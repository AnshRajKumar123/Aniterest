import React, { useEffect, useState } from 'react'
import '../ComponentCSS/ImagePop.css'

const ImagePopUp = ({ images, isOpen, onClose, likedItems, onLike, onDownload, currentImage }) => {
    const [current, setCurrent] = useState(currentImage);

    // ✅ sync current with prop
    useEffect(() => {
        if (currentImage) setCurrent(currentImage);
    }, [currentImage]);

    // ✅ navigation helpers
    const currentIndex = images.findIndex((img) => img._id === current?._id);

    const showPrev = () => {
        if (images.length === 0) return;
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrent(images[prevIndex]);
    };

    const showNext = () => {
        if (images.length === 0) return;
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrent(images[nextIndex]);
    };

    // ✅ Keyboard controls: Esc, Left, Right
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        if (isOpen) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, currentIndex]); // depend on currentIndex so it always uses latest

    // ✅ Stop background scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";

        return () => (document.body.style.overflow = "");
    }, [isOpen]);

    if (!isOpen || !current) return null;

    return (
        <div className="ImagePopUpOverlay" onClick={onClose}>
            <div className="ImagePopUpContent" onClick={(e) => e.stopPropagation()}>

                <div className="BigImageWrapper">

                    <div className="ExcellentPosition">
                        {/* ⬅️ Left Button */}
                        <button className="NavBtn LeftBtn" onClick={showPrev}>
                            <i className="ri-arrow-left-s-line"></i>
                        </button>
                        {/* ➡️ Right Button */}
                        <button className="NavBtn RightBtn" onClick={showNext}>
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>

                    <div className="PogdaActions">
                        <div className="PopUpSetActions">
                            <div className="FreeToUse">
                                <i className="ri-shield-check-line"></i>
                                <span>Free to use</span>
                            </div>

                            <div className="SharePopUpBtn">
                                <i className="ri-share-line"></i>
                                <span>Share</span>
                            </div>
                        </div>

                        <div className="PopupActions">
                            <button className='DownloadPopUpBtn' onClick={() => onDownload(current.src)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>
                                <span>Download</span>
                            </button>
                            <button className="LikePopUpBtn" onClick={() => onLike(current._id)}>
                                {likedItems[current._id] ? (
                                    <>
                                        <i className="ri-heart-2-fill" style={{ color: "red" }}></i>
                                        <span> Unlike</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="ri-heart-2-line"></i>
                                        <span> Like</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <img src={current.src} alt={current.name} className="BigImage" />
                </div>

                <div className="ThumbnailStrip">
                    {images.map((img) => (
                        <img
                            key={img._id}
                            src={img.src}
                            alt={img.name}
                            className={`Thumb ${current._id === img._id ? "active" : ""}`}
                            onClick={() => setCurrent(img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImagePopUp;