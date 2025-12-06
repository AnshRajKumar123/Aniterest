import React, { useEffect, useRef } from 'react';
import { Eternity } from '../../public/assets/assest'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../ExploreCcss/ExploreCarousle.css';
import { useNavigate } from 'react-router-dom';

const ExploreCarousle = () => {

    const swiperRef = useRef(null);

    const navigate = useNavigate();

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

        const visibleElements1 = document.querySelectorAll('.ExploreCaru .LatestHeader');
        const visibleElements2 = document.querySelectorAll('.ExploreCaru_Swipper');
        visibleElements1.forEach(el => observer.observe(el));
        visibleElements2.forEach(el => observer.observe(el));

        // Cleanup observer when component unmounts
        return () => {
            visibleElements1.forEach(el => observer.unobserve(el));
            visibleElements2.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="ExploreCaru">
            <div className="LatestHeader">
                <h1>Explore Our Card Carousle</h1>
                <p>In our card carousel there has many image card of anime mc in there and go click any <br /> of them and download many image as you want it.</p>
            </div>

            <button onClick={() => swiperRef.current.slidePrev()} className="nav-btn prev-btn">
                <i className="ri-arrow-left-s-line"></i>
            </button>
            <button onClick={() => swiperRef.current.slideNext()} className="nav-btn next-btn">
                <i className="ri-arrow-right-s-line"></i>
            </button>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="ExploreCaru_Swipper"
                effect={'coverflow'}
                modules={[EffectCoverflow]}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                <SwiperSlide onClick={() => navigate('/explore/sukuna_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper1} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Ryomen Sukuna</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/throne_of_seal_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper2} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Throne of Seal</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/one_piece_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper3} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Monkey D. Luffy</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/gojo_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper4} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Saturo Gojo</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/perfect_world_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper5} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Huo Ling'er</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/wang_ling_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper6} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Wang Ling</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/naurto_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper7} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Naurto</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/explore/demon_slayer_img')} className="popular_card">
                    <img src={Eternity.ExploreSwipper8} className="popular_img" />
                    <div className="SwipperHoverBox">
                        <div className="BezTransform">
                            <h1>Demon Slayer</h1>
                            <div className='ShowMore'>
                                <p>Show More</p>
                                <i className="ri-share-box-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ExploreCarousle;