import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Banner from '../page/Home/Banner';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;