import './App.css';
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/Index";
import About from './Components/Page/About';
import Tour from './Components/Page/Tour';
import Footer from './Components/Footer/Footer';
import Destination from './Components/Page/Destination';
import DestinationDetails from './Components/Page/Destination-details';
import ToursDetails from './Components/Page/Tours-details';
import Blog from './Components/Page/Blog';
import Contact from './Components/Page/Contact';
import Services from './Components/Page/Services';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();  // This is now safe

  useEffect(() => {
    window.scrollTo(0, 0);
    const path = location.pathname.toLowerCase();
    const pageMetadata = {
      '/': {
        title: 'Blue Hawks - Travel With Ease | BlueHawks Travel',
        description: 'Blue Hawks (BlueHawks Travel) is a Jaipur travel agency for domestic and international tours, flights, hotels, and visa assistance. Plan your trip with us.',
      },
      '/about': {
        title: 'About Blue Hawks | BlueHawks Travel, Jaipur',
        description: 'Meet Blue Hawks, a Jaipur travel team helping travelers plan thoughtful domestic and international holidays.',
      },
      '/tour': {
        title: 'Tours & Holiday Packages | Blue Hawks Travel',
        description: 'Explore domestic and international holiday packages with Blue Hawks. Find a trip that fits your travel style.',
      },
      '/tour-details': {
        title: 'Trip Details | Blue Hawks Travel',
        description: 'Explore trip details and plan your next holiday with Blue Hawks Travel.',
      },
      '/destination': {
        title: 'Top Travel Destinations | Blue Hawks Travel',
        description: 'Discover featured destinations and plan your next holiday with Blue Hawks Travel in Jaipur.',
      },
      '/destination-details': {
        title: 'Destination Details | Blue Hawks Travel',
        description: 'Explore destination highlights and start planning your next trip with Blue Hawks Travel.',
      },
      '/blog': {
        title: 'Travel Blog & Guides | Blue Hawks Travel',
        description: 'Read travel inspiration, destination guides, and trip-planning tips from Blue Hawks Travel.',
      },
      '/contact': {
        title: 'Contact Blue Hawks Travel | Jaipur Travel Agency',
        description: 'Contact Blue Hawks Travel in Vaishali Nagar, Jaipur, for tour planning, flights, hotels, and visa assistance.',
      },
      '/services': {
        title: 'Travel Services | Blue Hawks Travel, Jaipur',
        description: 'Get help with flight bookings, hotel stays, visa assistance, and holiday planning from Blue Hawks Travel.',
      },
    };
    const metadata = path.startsWith('/tour-details/')
      ? {
          title: 'Trip Details | Blue Hawks Travel',
          description: 'View holiday package details and enquire about your next trip with Blue Hawks Travel.',
        }
      : pageMetadata[path] ?? {
          title: 'Blue Hawks - Travel With Ease | BlueHawks Travel',
          description: 'Plan domestic and international holidays with Blue Hawks Travel, a travel agency based in Jaipur, India.',
        };

    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute(
      'href',
      `https://www.blue-hawks.com${location.pathname}`,
    );
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute(
      'content',
      `https://www.blue-hawks.com${location.pathname}`,
    );
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour-details" element={<ToursDetails />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/Destination-details" element={<DestinationDetails />} />
        <Route path="/Tour-details/:id" element={<ToursDetails />} />
        <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Footer visible on all pages except Home */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;
