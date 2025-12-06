import React from 'react'
import '../ComponentCSS/About.css'
import { Eternity } from '../../public/assets/assest'
import { Link } from 'react-router-dom'
import useTitle from './useTitle'

const About = () => {

    useTitle("Aniterest - About Aniterest Website....");

    return (
        <>
            <div className="AboutSectionSet">
                <div className="DivOfBackImg">
                    <div className="AboutTwoSection">
                        <div className="FirstAboutSect">
                            <h1>About Us</h1>
                            <p id='BezColor'>Celebrating stories through visuals that inspire, connect, and endure</p>
                            <p>At Aniterest, we believe that a single image can transcend language and transport you to another time and place. This gallery is more than a simple showcase; it is a meticulously curated collection of visual stories. Each photograph is a testament to the beauty we see in the world, the moments that move us, and the memories we strive to preserve. We are artists, storytellers, and visual communicators who are passionate about sharing our unique perspective with you. Through our work, we aim to evoke emotion, spark curiosity, and inspire a deeper appreciation for the art of photography. Whether you are an enthusiast, a fellow creative, or simply a lover of beauty, we invite you to explore our gallery and discover the narratives woven into every pixel. Thank you for being a part of our journey.</p>
                        </div>
                        <div className="SecondAboutSect">
                            <img src={Eternity.About1} />
                        </div>
                        <div className='Box1What'>
                            <span id='SmallText'>No. of Images</span>
                            <p id='BigText'>10,000+</p>
                        </div>

                        <div className='Box2What'>
                            <span id='SmallText'>Ranking In Website</span>
                            <p id='BigText'>1.</p>
                        </div>
                    </div>
                </div>
                <div className="SecondBoxDiv">
                    <div className="OneleDiv">
                        <h1>About Our <br /> Aniterest <br /> Website</h1>
                        <p>Welcome to our world of images. We believe every picture tells a story, and this space is where we share ours with you. This gallery is more than just a collection of photographs; it's a window into the moments, places, and feelings that inspire us.</p>
                        <Link className='BtnBottom' to='/'>Go to Main Page</Link>
                    </div>
                    <div className="TwoleDiv">
                        <h1>What We Do</h1>
                        <div className="BoxDivSet">
                            <div className="FirstDivSet">
                                <img src={Eternity.About3} />
                                <div className="DetailAboutWhat">
                                    <h1>Uploading Multiple Images</h1>
                                    <p>We Upload many images of Anime, Nature, Animals, landscape, Dark, Night, Desktop Wallpapers.</p>
                                </div>
                            </div>
                            <div className="FirstDivSet">
                                <img src={Eternity.About2} />
                                <div className="DetailAboutWhat">
                                    <h1>User Image Download</h1>
                                    <p>We give authority to user download images and also upload images.</p>
                                </div>
                            </div>
                            <div className="FirstDivSet">
                                <img src={Eternity.About4} />
                                <div className="DetailAboutWhat">
                                    <h1>Custom Collage</h1>
                                    <p>We have custom collage and restricted to copy any collage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ThirdBoxDiv">
                    <p>Discover your next favorite memory. Our collection is a journey through shared experiences and untold stories. It's about finding a photograph that resonates with you and becomes a part of your own personal narrative.</p>
                    <Link className='BtnBottom' to='/explore'>Explore Our Website</Link>
                </div>
            </div >
        </>
    )
}

export default About