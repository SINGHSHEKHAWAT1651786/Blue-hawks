

function App() {
  const location = useLocation();  // This is now safe

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
      </Routes>

      {/* Footer visible on all pages except Home */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;
