import React from 'react'
import '../ComponentCSS/LatestLibrary.css'
import { Eternity } from '../../public/assets/assest'
import { useNavigate } from 'react-router-dom'

const LatestLibrary = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='LatestLib'>
                <div className="LatestHeader">
                    <h1>Our Latest Library</h1>
                    <p>A visual Library of our most recent Anime Collection - each piece crafted <br /> with intention, emotion, and style.</p>
                </div>

                <div className="BoxOfLatestLib">
                    <div onClick={() => navigate('/explore/solo_leveling_img')} className="SmallAniLL">
                        <img src={Eternity.LatestLib1} />
                        <div className="HovLatestLib">
                            <h2>Solo Leveling</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/renegade_immortal_img')} className="SmallAniLL">
                        <img src={Eternity.LatestLib2} />
                        <div className="HovLatestLib">
                            <h2>Renegade Immortal</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/wang_ling_img')} className="SmallAniLL">
                        <img src={Eternity.LatestLib3} />
                        <div className="HovLatestLib">
                            <h2>Wang Ling</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/nezuko_img')} className="SmallAniLL">
                        <img src={Eternity.LatestLib4} />
                        <div className="HovLatestLib">
                            <h2>Kamado Nezuko</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/tanjiro_img')} className="SmallAniLL">
                        <img src={Eternity.LatestLib5} />
                        <div className="HovLatestLib">
                            <h2>Kamado Tanjiro</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/little_fairy_doctor_img')} className="SmallAniLL">
                        <img src={Eternity.LatestLib6} />
                        <div className="HovLatestLib">
                            <h2>Little Fairy Doctor</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestLibrary