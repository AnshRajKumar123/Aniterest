import React from 'react'
import LatestCollection from './LatestCollection'
import LatestLibrary from './LatestLibrary'
import LatestStyling from './LatestStyling'
import useTitle from './useTitle'
import FirstPage from './FirstPage'
import ImageRotater from './ImageRotater'

const Home = () => {

    useTitle("Aniterest - Downloads Your Favourite Photos Here...");

    return (
        <>
            <FirstPage />
            <LatestCollection />
            <LatestLibrary />
            <LatestStyling />
            <ImageRotater />
        </>
    )
}

export default Home