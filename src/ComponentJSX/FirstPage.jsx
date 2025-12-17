import React, { useEffect, useState, useRef } from 'react'
import '../ComponentCSS/FirstPage.css'
import { Eternity } from '../../public/assets/assest'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const FirstPageImages = [
    Eternity.FirstPageImg1,
    Eternity.FirstPageImg2,
    Eternity.FirstPageImg3,
    Eternity.FirstPageImg4,
    Eternity.FirstPageImg5,
    Eternity.FirstPageImg6,
    Eternity.FirstPageImg7,
    Eternity.FirstPageImg8,
    Eternity.FirstPageImg9,
    Eternity.FirstPageImg10,
];

const FirstPage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const imageRef = useRef(null);
    const frameRef = useRef(null);
    const textRef = useRef(null);
    const beforeRef = useRef(null);
    const afterRef = useRef(null);

    /* Image rotation logic (unchanged) */
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev =>
                prev === FirstPageImages.length - 1 ? 0 : prev + 1
            );
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    /* GSAP animations */
    useEffect(() => {

        /* Text entrance */
        gsap.from(textRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        /* Floating frame */
        gsap.to(frameRef.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        /* Depth layers */
        gsap.to(beforeRef.current, {
            rotation: -7,
            x: -8,
            y: 8,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(afterRef.current, {
            rotation: 7,
            x: 8,
            y: -8,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    /* Image transition on change */
    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.08 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
        );
    }, [currentIndex]);

    return (
        <section className='FirstPageSect'>
            <div className="RightSideSection" ref={textRef}>
                <h1>Hello Viwers !!</h1>
                <p>
                    Aniterest is a modern image-browsing platform designed for creators, designers, and anyone
                    who values visual inspiration. The homepage offers a clean, distraction-free experience
                    with a powerful search feature that helps users discover high-quality images effortlessly.
                    Whether you are exploring ideas, collecting references, or simply browsing for inspiration,
                    Aniterest makes the process smooth and enjoyable. Images are presented in a well-structured
                    grid layout, allowing quick scanning and easy access to content. The overall design feels
                    minimal, fast, and intuitive, keeping the focus on visuals rather than clutter. Aniterest
                    blends functionality with a relaxed user experience, making it a reliable place to explore,
                    search, and get inspired without unnecessary complexity.
                    </p>

                <Link to='/collection'>
                    <button>Your Collection</button>
                </Link>

                <p id='Creater'>Created By Ansh Raj Kumar</p>
            </div>

            <div className="LeftSideSection">
                <div className="OverSideFrame" ref={frameRef}>
                    <div className='ImageFrame'>
                        <img
                            ref={imageRef}
                            src={FirstPageImages[currentIndex]}
                            alt="Gallery preview"
                        />
                    </div>

                    <h1>Hello there !!</h1>

                    <div className="BeforeBox" ref={beforeRef}></div>
                    <div className="AfterBox" ref={afterRef}></div>
                    <div className="NormalState"></div>
                </div>
            </div>
        </section>
    )
}

export default FirstPage