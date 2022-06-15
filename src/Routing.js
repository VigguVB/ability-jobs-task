import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './Components/About';
import Jobs from './Components/Jobs';
import Header from './Components/Header';
import Home from './Components/Home';




function Routing(props) {
    return (
       <BrowserRouter>
       <Header />
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
       </Routes>
       </BrowserRouter>
    );
}

export default Routing;