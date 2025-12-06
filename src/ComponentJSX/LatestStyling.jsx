import React from 'react'
import '../ComponentCSS/LatestStyling.css'
import { Eternity } from '../../public/assets/assest'

const LatestStyling = () => {
    return (
        <>
            <div className="LatestStyDC">
                <div className="LatestHeader">
                    <h1>Our Latest Collage</h1>
                    <p>A visual Collage of our most recent Cars Collection - each piece crafted <br /> with intention, emotion, and style.</p>
                </div>

                <div className="LatestStylingSet">
                    <div className="FirstLineCollage">
                        <div className="Box Box1">
                            <img src={Eternity.Collage1} />
                        </div>
                        <div className="Box Box2">
                            <img src={Eternity.Collage2} />
                        </div>
                        <div className="Box Box3">
                            <img src={Eternity.Collage3} />
                        </div>
                        <div className="Box Box4">
                            <img src={Eternity.Collage4} />
                        </div>
                    </div>
                    <div className='SecondLineCollage'>
                        <div className="Box Box5">
                            <img src={Eternity.Collage5} />
                        </div>
                        <div className="Box Box6">
                            <img src={Eternity.Collage6} />
                        </div>
                        <div className="Box Box7">
                            <img src={Eternity.Collage7} />
                        </div>
                    </div>
                    <div className="ThirdLineCollage">
                        <div className="Box Box8">
                            <img src={Eternity.Collage8} />
                        </div>
                        <div className="Box Box9">
                            <img src={Eternity.Collage9} />
                        </div>
                        <div className="Box Box10">
                            <img src={Eternity.Collage10} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestStyling