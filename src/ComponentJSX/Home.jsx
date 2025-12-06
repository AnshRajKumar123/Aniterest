import React from 'react'
import Hero from './Hero'
import LatestCollection from './LatestCollection'
import LatestLibrary from './LatestLibrary'
import LatestStyling from './LatestStyling'
import useTitle from './useTitle'

const Home = () => {

    useTitle("Aniterest - Downloads Your Favourite Photos Here...");

    return (
        <>
            <Hero />
            <LatestCollection />
            <LatestLibrary />
            <LatestStyling />
        </>
    )
}

export default Home