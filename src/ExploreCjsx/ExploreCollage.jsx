import React, { useEffect } from 'react'
import '../ExploreCcss/ExploreCollage.css'
import { Eternity } from '../../public/assets/assest'

const ExploreCollage = () => {

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

        const visibleElements1 = document.querySelectorAll('.CenterLineCollage');
        const visibleElements2 = document.querySelectorAll('.OpacityAnimation1');
        const visibleElements3 = document.querySelectorAll('.OpacityAnimation2');
        const visibleElements4 = document.querySelectorAll('.OpacityAnimation3');
        const visibleElements5 = document.querySelectorAll('.OpacityAnimation4');
        visibleElements1.forEach(el => observer.observe(el));
        visibleElements2.forEach(el => observer.observe(el));
        visibleElements3.forEach(el => observer.observe(el));
        visibleElements4.forEach(el => observer.observe(el));
        visibleElements5.forEach(el => observer.observe(el));

        // Cleanup observer when component unmounts
        return () => {
            visibleElements1.forEach(el => observer.unobserve(el));
            visibleElements2.forEach(el => observer.unobserve(el));
            visibleElements3.forEach(el => observer.unobserve(el));
            visibleElements4.forEach(el => observer.unobserve(el));
            visibleElements5.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <div className="ExploreCollage">
                <div className="StartLineCollage">
                    <div className="Box1Col BoxCollageSet OpacityAnimation1">
                        <img src={Eternity.SmallBoxCol1} />
                    </div>
                    <div className="Box2Col BoxCollageSet OpacityAnimation2">
                        <img src={Eternity.SmallBoxCol2} />
                    </div>
                    <div className="Box3Col BoxCollageSet OpacityAnimation3">
                        <img src={Eternity.SmallBoxCol3} />
                    </div>
                    <div className="Box4Col BoxCollageSet OpacityAnimation4">
                        <img src={Eternity.SmallBoxCol4} />
                    </div>
                </div>
                <div className="CenterLineCollage">
                    <img src={Eternity.ExploreCol1} />
                </div>
                <div className="LastLineCollage">
                    <div className="Box1Col BoxCollageSet OpacityAnimation1">
                        <img src={Eternity.SmallBoxCol5} />
                    </div>
                    <div className="Box2Col BoxCollageSet OpacityAnimation2">
                        <img src={Eternity.SmallBoxCol6} />
                    </div>
                    <div className="Box3Col BoxCollageSet OpacityAnimation3">
                        <img src={Eternity.SmallBoxCol7} />
                    </div>
                    <div className="Box4Col BoxCollageSet OpacityAnimation4">
                        <img src={Eternity.SmallBoxCol8} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreCollage