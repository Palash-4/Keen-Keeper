import React from 'react';
import Banner from '../../components/homepage/Banner';
import NumberCard from '../../components/homepage/NumberCard';
import FriendsCard from '../../components/homepage/FriendsCard';

const Homepage = () => {
    return (
        <>
        <Banner></Banner>
        <NumberCard></NumberCard>
        <FriendsCard></FriendsCard>
        </>
    );
};

export default Homepage;