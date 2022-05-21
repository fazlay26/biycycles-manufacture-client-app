import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';
import Footer from './Footer';
import Navbar from './Navbar';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Parts></Parts>
            <ExtraSection1></ExtraSection1>
            <BusinessSummary></BusinessSummary>
            <ExtraSection2></ExtraSection2>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;