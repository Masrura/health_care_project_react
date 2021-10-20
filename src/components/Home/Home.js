import React from 'react';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Membership from '../Membership/Membership';
import Review from '../Review/Review';
const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Membership></Membership>
            <Review></Review>
        </div>
    );
};

export default Home;