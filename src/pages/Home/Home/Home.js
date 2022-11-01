import React from 'react';
import About from '../About/About';
import Banner from '../baner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About></About>
            <Services></Services>
            
        </div>
    );
};

export default Home;