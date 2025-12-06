import React from 'react'
import '../ComponentCSS/LatestCollection.css'
import { Eternity } from '../../public/assets/assest'
import { useNavigate } from 'react-router-dom';

const LatestCollection = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="LatestCol">
                <div className="LatestHeader">
                    <h1>Our Latest Collection</h1>
                    <p>A visual collection of our most recent works - each piece crafted <br /> with intention, emotion, and style.</p>
                </div>

                <div className="BoxOfSmallWid">
                    <div onClick={() => navigate('/explore/one_piece_img')} className='ImageWid'>
                        <img src={Eternity.LatestImg1} />
                        <div className="LatestImgDetail">
                            <h2>One Piece</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/nature')} className="ImageWid">
                        <img src={Eternity.LatestImg2} />
                        <div className="LatestImgDetail">
                            <h2>Nature Wallpaper</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/animal')} className="ImageWid">
                        <img src={Eternity.LatestImg3} />
                        <div className="LatestImgDetail">
                            <h2>Animals Wallpaper</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/btth_img')} className="ImageWid">
                        <img src={Eternity.LatestImg4} />
                        <div className="LatestImgDetail">
                            <h2>Battle Through the Heavens</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/naurto_img')} className="ImageWid">
                        <img src={Eternity.LatestImg5} />
                        <div className="LatestImgDetail">
                            <h2>Naurto</h2>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => navigate('/explore/flower_img')} className="ImageWid">
                        <img src={Eternity.LatestImg6} />
                        <div className="LatestImgDetail">
                            <h2>Flowers Wallpaper</h2>
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

export default LatestCollection