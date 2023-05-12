import React from 'react';
import Banners from './banners/Banners';
import About from './About/About';
import Service from './Service/Service';


const Home = () => {
    return (
        <div>
           <Banners></Banners>
           <About></About>
           <Service></Service>
        </div>
    );
};

export default Home;