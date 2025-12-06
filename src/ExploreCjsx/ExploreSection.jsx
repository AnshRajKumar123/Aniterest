import React from 'react'
import '../ExploreCcss/ExploreSection.css'
import { Link, useNavigate } from 'react-router-dom'
import { Eternity } from '../../public/assets/assest'

const ExploreSection = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="ExploreSectionSet">
                <div className="LatestHeader">
                    <h1>Explore Our Latest Gallary</h1>
                    <p>Explore the human experience through portraits and landscapes that <br /> speak without words.</p>
                </div>

                <div className="ExploreCollageCircle">
                    <Link to='/' className="MainCenterBoxCircle">
                        <div className="MainCircleImageBox">
                            <img src={Eternity.MainCircleImgSet} />
                        </div>
                        <div className="FirstLineSet">
                            <h1>Aniterest</h1>
                        </div>
                    </Link>

                    <div className='BoxCircle1D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg1} />
                        <div onClick={() => navigate('/explore/perfect_world_img')} className="SpanDetailImageBox">
                            <span>Perfect World</span>
                        </div>
                    </div>
                    <div className='BoxCircle2D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg2} />
                        <div onClick={() => navigate('/explore/hunter_X_hunter_img')} className="SpanDetailImageBox">
                            <span>Hunter <br /> X <br /> Hunter</span>
                        </div>
                    </div>
                    <div className='BoxCircle3D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg3} />
                        <div onClick={() => navigate('/explore/freefire_wallpaper')} className="SpanDetailImageBox">
                            <span>Free Fire</span>
                        </div>
                    </div>
                    <div className='BoxCircle4D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg4} />
                        <div onClick={() => navigate('/explore/dark_wallpaper')} className="SpanDetailImageBox">
                            <span>Dark</span>
                        </div>
                    </div>
                    <div className='BoxCircle5D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg5} />
                        <div onClick={() => navigate('/explore/desktop_wallpaper')} className="SpanDetailImageBox">
                            <span>Desktop <br /> Wallpaper</span>
                        </div>
                    </div>
                    <div className='BoxCircle6D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg11} />
                        <div onClick={() => navigate('/explore/soul_land_2_img')} className="SpanDetailImageBox">
                            <span>Soul <br /> Land 2</span>
                        </div>
                    </div>
                    <div className='BoxCircle7D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg7} />
                        <div onClick={() => navigate('/explore/sketch')} className="SpanDetailImageBox">
                            <span>Sketch Art</span>
                        </div>
                    </div>
                    <div className='BoxCircle8D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg8} />
                        <div onClick={() => navigate('/explore/cars_wallpaer')} className="SpanDetailImageBox">
                            <span>Cars</span>
                        </div>
                    </div>
                    <div className='BoxCircle9D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg9} />
                        <div onClick={() => navigate('/explore/boysfashion')} className="SpanDetailImageBox">
                            <span>Boys Fashion</span>
                        </div>
                    </div>
                    <div className='BoxCircle10D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg10} />
                        <div onClick={() => navigate('/explore/main_anime_img')} className="SpanDetailImageBox">
                            <span>Anime</span>
                        </div>
                    </div>
                    <div className='BoxCircle11D SameHeWiCircle'>
                        <img src={Eternity.CircleCollageImg6} />
                        <div onClick={() => navigate('/explore/girlsfashion')} className="SpanDetailImageBox">
                            <span>Girl Fashion</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreSection