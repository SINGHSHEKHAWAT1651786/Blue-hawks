import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import blogPosts from './blogPosts';

function Blog() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const linkedPost = blogPosts.find((post) => post.id === location.state?.selectedPostId);
        if (linkedPost) setSelectedPost(linkedPost);
    }, [location.state]);

    const categories = useMemo(
        () => [...new Set(blogPosts.map((post) => post.category))].sort(),
        []
    );

    const filteredPosts = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return blogPosts.filter((post) => {
            const matchesCategory = !selectedCategory || post.category === selectedCategory;
            const searchableContent = [
                post.title,
                post.category,
                post.excerpt,
                post.content.join(' '),
                post.author,
            ].join(' ').toLowerCase();

            return matchesCategory && (!normalizedSearch || searchableContent.includes(normalizedSearch));
        });
    }, [searchTerm, selectedCategory]);

    useEffect(() => {
        if (!selectedPost) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setSelectedPost(null);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedPost]);

    const openPost = (post) => setSelectedPost(post);

    return (
        <>
            <div className="section-banner section-banner--blog w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Travel Journal</h2>
                        <ul>
                            <li><Link to="/">Home</Link>&nbsp;</li>
                            <li><i className="bi bi-gear fs-6 pe-2" />Travel Journal</li>
                        </ul>
                    </div>
                </div>
            </div>

            <main className="blog py-5">
                <div className="container">
                    <div className="row g-5">
                        <section className="col-lg-8" aria-labelledby="blog-heading">
                            <div className="mb-4">
                                <span className="text-primary fw-bold">BLUE HAWKS TRAVEL JOURNAL</span>
                                <h1 id="blog-heading" className="fw-bold mt-2">Ideas for your next journey</h1>
                                <p className="text-secondary mb-0">
                                    Destination guides, thoughtful itineraries, and practical tips from the road.
                                </p>
                            </div>

                            <p className="text-secondary mb-3" aria-live="polite">
                                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'}
                            </p>
                            <div className="row g-4 blog-page">
                                {filteredPosts.map((post) => (
                                    <div className="col-12" key={post.id}>
                                        <article className="blog-card blog-post-card shadow-sm overflow-hidden">
                                            <img
                                                src={post.image}
                                                className="blog-img-top blog-post-image"
                                                alt={post.title}
                                            />
                                            <div className="blog-card-body p-4">
                                                <div className="d-flex flex-wrap align-items-center gap-3 mb-3 text-secondary">
                                                    <span className="blog-post-category">{post.category}</span>
                                                    <span><i className="bi bi-calendar3 me-2" />{post.date}</span>
                                                    <span><i className="bi bi-clock me-2" />{post.readTime}</span>
                                                </div>
                                                <h2 className="blog-post-title mb-3">{post.title}</h2>
                                                <p className="mb-4">{post.excerpt}</p>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-link blog-read-button p-0"
                                                        onClick={() => openPost(post)}
                                                        aria-label={`Read ${post.title}`}
                                                    >
                                                        Read article <i className="bi bi-arrow-up-right ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}

                                {filteredPosts.length === 0 && (
                                    <div className="col-12 py-5 text-center">
                                        <i className="bi bi-search fs-2 text-secondary" aria-hidden="true" />
                                        <h2 className="h4 mt-3">No stories found</h2>
                                        <p className="text-secondary">Try a different search or clear the selected category.</p>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            onClick={() => {
                                                setSearchTerm('');
                                                setSelectedCategory('');
                                            }}
                                        >
                                            Clear filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>

                        <aside className="col-lg-4" aria-label="Blog filters and recent posts">
                            <div className="blog-sidebar-panel mb-4">
                                <label htmlFor="blog-search" className="form-label fw-bold">Search stories</label>
                                <div className="search-input-wrapper">
                                    <input
                                        id="blog-search"
                                        type="search"
                                        className="form-control search-input-with-icon"
                                        placeholder="Try “hiking” or “Rome”"
                                        value={searchTerm}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                    />
                                    <i className="bi bi-search search-icon-inside" aria-hidden="true" />
                                </div>
                            </div>

                            <div className="blog-sidebar-panel mb-4">
                                <h2 className="h5 fw-bold mb-3">Categories</h2>
                                <button
                                    type="button"
                                    className={`blog-category-button ${selectedCategory === '' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('')}
                                    aria-pressed={selectedCategory === ''}
                                >
                                    <span>All stories</span>
                                    <span>{blogPosts.length}</span>
                                </button>
                                {categories.map((category) => {
                                    const categoryCount = blogPosts.filter((post) => post.category === category).length;
                                    return (
                                        <button
                                            type="button"
                                            className={`blog-category-button ${selectedCategory === category ? 'active' : ''}`}
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            aria-pressed={selectedCategory === category}
                                        >
                                            <span>{category}</span>
                                            <span>{categoryCount}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="blog-sidebar-panel">
                                <h2 className="h5 fw-bold mb-4">Recent stories</h2>
                                {blogPosts.slice(0, 3).map((post) => (
                                    <button
                                        type="button"
                                        className="blog-recent-button"
                                        key={post.id}
                                        onClick={() => openPost(post)}
                                    >
                                        <img src={post.image} className="recent-thumb" alt="" />
                                        <span>
                                            <small>{post.date}</small>
                                            <span className="blog-recent-title">{post.title}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {selectedPost && (
                <div
                    className="blog-dialog-backdrop"
                    onClick={() => setSelectedPost(null)}
                    role="presentation"
                >
                    <article
                        className="blog-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="blog-dialog-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="blog-dialog-close"
                            onClick={() => setSelectedPost(null)}
                            aria-label="Close article"
                        >
                            <i className="bi bi-x-lg" />
                        </button>
                        <img src={selectedPost.image} className="blog-dialog-image" alt={selectedPost.title} />
                        <div className="p-4 p-md-5">
                            <span className="blog-post-category">{selectedPost.category}</span>
                            <p className="text-secondary mt-3 mb-2">
                                {selectedPost.date} · {selectedPost.readTime}
                            </p>
                            <h2 id="blog-dialog-title" className="fw-bold mb-4">{selectedPost.title}</h2>
                            {selectedPost.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                    </article>
                </div>
            )}
        </>
    );
}

export default Blog;
