import React, { useEffect, useState } from 'react'
import '../ComponentCSS/FirstPage.css'
import { Eternity } from '../../public/assets/assest'
import { Link } from 'react-router-dom'

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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === FirstPageImages.length - 1 ? 0 : prev + 1
            );
        }, 2500); // image change delay

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section className='FirstPageSect'>
                <div className="RightSideSection">
                    <h1>Hello Viwers !!</h1>
                    <p>Aniterest is a modern image-browsing platform designed for creators, designers, and anyone
                        who values visual inspiration. The homepage offers a clean, distraction-free experience
                        with a powerful search feature that helps users discover high-quality images effortlessly.
                        Whether you are exploring ideas, collecting references, or simply browsing for inspiration,
                        Aniterest makes the process smooth and enjoyable. Images are presented in a well-structured
                        grid layout, allowing quick scanning and easy access to content. The overall design feels
                        minimal, fast, and intuitive, keeping the focus on visuals rather than clutter. Aniterest
                        blends functionality with a relaxed user experience, making it a reliable place to explore,
                        search, and get inspired without unnecessary complexity.</p>
                    <Link to='/collection'>
                        <button>Your Collection</button>
                    </Link>
                    <p id='Creater'>Created By Ansh Raj Kumar</p>
                </div>

                <div className="LeftSideSection">
                    <div className="OverSideFrame">
                        <div className='ImageFrame'>
                            <img
                                src={FirstPageImages[currentIndex]}
                                alt="Gallery preview"
                                className="fadeImage"
                            />
                        </div>
                        <h1>Hello there !!</h1>
                        <div className="BeforeBox"></div>
                        <div className="AfterBox"></div>
                        <div className="NormalState"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirstPage