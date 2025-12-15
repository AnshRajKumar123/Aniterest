import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryBanner, CombineImage } from "../../public/assets/assest1";
import { toast } from "react-toastify";
import ImagePopUp from "../ComponentJSX/ImagePop";
import useTitle from '../ComponentJSX/useTitle'
import '../ExploreCcss/ExploreImageM.css'

const ExploreImageM = () => {

    const { category } = useParams();
    const meta = CategoryBanner[category];
    const filtered = CombineImage[category] || [];

    // ✅ Manage liked state per image
    const [likedItems, setLikedItems] = useState(() => {
        const saved = {};
        filtered.forEach((item) => {
            const stored = localStorage.getItem(`liked_${item._id}`);
            saved[item._id] = stored ? JSON.parse(stored) : false;
        });
        return saved;
    });

    // ✅ Toggle Like
    const handleLikeBtn = (e, id) => {
        e.preventDefault();
        e.stopPropagation();

        const newState = !likedItems[id];
        const updated = { ...likedItems, [id]: newState };
        setLikedItems(updated);

        if (newState) {
            localStorage.setItem(`liked_${id}`, JSON.stringify(true));
            toast.success("Saved to Collection!");
        } else {
            localStorage.removeItem(`liked_${id}`);
            toast.error("Removed from Collection");
        }
    };

    const handleDownload = async (e, src) => {
        e.preventDefault();
        e.stopPropagation();

        const toastId = toast.loading('Downloading...', {
            position: "bottom-right",
        });

        try {
            console.log("Downloading from:", src);

            const response = await fetch(src);
            if (!response.ok) throw new Error('Failed to download');

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `${Date.now()}.${blob.type.split('/')[1] || 'jpg'}`;

            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(blobUrl);
            setTimeout(() => document.body.removeChild(link), 100);

            toast.update(toastId, {
                render: "Downloaded!",
                type: "success",
                autoClose: 3000,
                isLoading: false,
            });
        } catch (error) {
            console.error('Download error:', error);
            toast.update(toastId, {
                render: "Download failed!",
                type: "error",
                autoClose: 3000,
                isLoading: false,
            });
        }
    };

    // Popup State
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Open Popup
    const handleOpenPopup = (item) => {
        setSelectedImage(item);
        setIsPopupOpen(true);
    };

    useTitle(`Aniterest - Explore ${meta.title} Images....`);

    return (
        <>
            <div className="gallery-container">
                {/* Banner */}
                <div className="banner">
                    <img src={meta.banner} alt={meta.title} className="banner-img" />
                    <div className="banner-content">
                        <h1>{meta.title}</h1>
                        <p>{meta.description}</p>
                    </div>
                </div>

                {/* Gallery */}
                <div
                    className="gallery-grid"
                >
                    {filtered.map((item) => (
                        <div key={item._id} className="gallery-item">
                            <img src={item.src} alt={item.name} />

                            <div className="OnHoverOptions" onClick={() => handleOpenPopup(item)}>
                                <div className="BezTransformer">
                                    {/* Download Btn */}
                                    <div className="DownloadBtn BtnSame" onClick={(e) => handleDownload(e, item.src)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                className="FillThePath"
                                                fillRule="evenodd"
                                                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>

                                    {/* Like Btn */}
                                    <div className="SaveBtn BtnSame" onClick={(e) => handleLikeBtn(e, item._id)}>
                                        <i className={`ri-heart-2-${likedItems[item._id] ? "fill" : "line"}`}
                                            style={{
                                                color: likedItems[item._id] ? "red" : "",
                                                transition: "color 0.2s ease"
                                            }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ImagePopUp
                images={filtered}
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                likedItems={likedItems}
                onLike={(id) => handleLikeBtn(new Event("click"), id)}
                currentImage={selectedImage}
                onDownload={(src) => handleDownload(new Event("click"), src)}
            />
        </>
    );
};

export default ExploreImageM;