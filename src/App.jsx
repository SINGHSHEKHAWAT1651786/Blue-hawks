import './App.css';
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/Index";
import About from './Components/Page/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
