import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import BottomBanner from './BottomBanner/BottomBanner';
import TourPackages from './../Packages/AllPackages/TourPackages';
import About from './../About/About';
import FAskQuestion from './../FrequentAskQ/FAskQuestion';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BottomBanner> </BottomBanner>
            <About> </About>
            <TourPackages> </TourPackages>
            <FAskQuestion> </FAskQuestion>
        </div>
    );
};

export default Home;