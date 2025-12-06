import React, { useEffect } from 'react'
import '../ComponentCSS/Hero.css'
import { Eternity } from '../../public/assets/assest'
import { Link } from 'react-router-dom'

const Hero = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showAnimation');
                } else {
                    // entry.target.classList.remove('showAnimation');
                }
            });
        }, {
            threshold: 0.2 // optional: triggers when 20% visible
        });

        const visibleElements1 = document.querySelectorAll('.hexagon');
        const visibleElements2 = document.querySelectorAll('.BigBoxHeroD .LatestHeader');

        visibleElements1.forEach(el => observer.observe(el));
        visibleElements2.forEach(el => observer.observe(el));

        // Cleanup observer when component unmounts
        return () => {
            visibleElements1.forEach(el => observer.unobserve(el));
            visibleElements2.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <section className='BigBoxHeroD'>
                <div className="HexaBoxSet">
                    <div className='InOneLine'>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol1} />
                        </div>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol2} />
                        </div>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol3} />
                        </div>
                    </div>
                    <div className='InOneLine TopSet2'>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol4} />
                        </div>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol5} />
                        </div>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol6} />
                        </div>
                    </div>
                    <div className='InOneLine TopSet3'>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol7} />
                        </div>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol8} />
                        </div>
                        <div className="hexagon">
                            <img src={Eternity.MainPageCol9} />
                        </div>
                    </div>
                </div>

                <div className="LatestHeader">
                    <h1>Caturing Life, <br /> One Frame at a Time</h1>
                    <Link to='/explore' className='BtnExplore'>Explore More</Link>
                </div>
            </section>
        </>
    )
}

export default Hero