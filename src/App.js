import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Destination from './Pages/Destination';
import ContactUs from './Pages/ContactUs';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bars } from 'react-loader-spinner'
import Packages from './Pages/Packages';
// import { useLocation } from 'react-router-dom';



const App = () => {
  // const location = useLocation();
  // console.log(location)
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000)
  }, []);


  return (
    <>
      {loader ?
        <div div className="loader">
          <Bars
            height="100"
            width="100"
            radius="9"
            color="#3A78C9"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
        :
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/packages' element={<Packages />} />
          </Routes>
          <Footer />
        </Router>
      }
    </>
  );
}

export default App;
