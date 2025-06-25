import './App.css';
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/index";
import About from './Components/Page/About';
import Tour from './Components/Page/Tour';
import Footer from './Components/Footer/Footer';
import Destination from './Components/Page/Destination';
import DestinationDetails from './Components/Page/Destination-details';
import ToursDetails from './Components/Page/Tours-details';
import Blog from './Components/Page/Blog';
import Contact from './Components/Page/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';

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
