import React, { useEffect } from 'react'
import '../ExploreCcss/Explore.css'
import ExploreCollage from './ExploreCollage'
import ExploreCarousle from './ExploreCarousle'
import ExploreSection from './ExploreSection'
import useTitle from '../ComponentJSX/useTitle'

const Explore = () => {

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

        const visibleElements1 = document.querySelectorAll('.ExploreSetSection .LatestHeader');
        visibleElements1.forEach(el => observer.observe(el));

        // Cleanup observer when component unmounts
        return () => {
            visibleElements1.forEach(el => observer.unobserve(el));
        };
    }, []);

    useTitle("Aniterst - Explore Images Here....");

    return (
        <>
            <div className="ExploreSetSection">
                <div className="LatestHeader">
                    <h1>Explore Our Aniterest</h1>
                    <p>Hii, You now explore our image websitre ( Aniterest ). If you like <br /> our website then leave a comment, like and subscribe.</p>
                </div>

                <ExploreCollage />

                <ExploreCarousle />

                <ExploreSection />
            </div>
        </>
    )
}

export default Explore