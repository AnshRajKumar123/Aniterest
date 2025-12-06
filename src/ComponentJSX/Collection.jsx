import React, { useEffect, useState } from "react";
import "../ExploreCcss/ExploreImageM.css"; // reuse same styles
import { CombineImage } from "../../public/assets/assest1";
import { toast } from "react-toastify";
import ImagePopUp from "../ComponentJSX/ImagePop"; // ✅ import popup
import '../ComponentCSS/Collection.css'
import useTitle from "./useTitle";

const Collection = () => {

    useTitle("Aniterest - Here Your all Saved Images...");

    const [likedImages, setLikedImages] = useState([]);
    const [likedItems, setLikedItems] = useState({}); // ✅ for popup like btn state

    // ✅ Load liked images from localStorage
    useEffect(() => {
        const allLiked = [];
        const likedMap = {};

        Object.keys(CombineImage).forEach((category) => {
            CombineImage[category].forEach((item) => {
                const isLiked = JSON.parse(localStorage.getItem(`liked_${item._id}`));
                if (isLiked) {
                    allLiked.push(item);
                    likedMap[item._id] = true;
                }
            });
        });

        setLikedImages(allLiked);
        setLikedItems(likedMap);
    }, []);

    // ✅ Remove from collection
    const handleRemove = (id) => {
        localStorage.removeItem(`liked_${id}`);
        setLikedImages((prev) => prev.filter((item) => item._id !== id));
        setLikedItems((prev) => ({ ...prev, [id]: false }));
        toast.error("Removed from Collection");
    };

    // ✅ Toggle Like (needed for popup too)
    const handleLikeBtn = (id) => {
        const newState = !likedItems[id];
        const updated = { ...likedItems, [id]: newState };
        setLikedItems(updated);

        if (newState) {
            localStorage.setItem(`liked_${id}`, JSON.stringify(true));
            toast.success("Saved to Collection!");
        } else {
            localStorage.removeItem(`liked_${id}`);
            setLikedImages((prev) => prev.filter((item) => item._id !== id)); // remove visually
            toast.error("Removed from Collection");
        }
    };

    // ✅ Download
    const handleDownload = async (src) => {
        const toastId = toast.loading('Downloading...', { position: "bottom-right" });
        try {
            const response = await fetch(src);
            if (!response.ok) throw new Error("Download failed");

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = `${Date.now()}.${blob.type.split("/")[1] || "jpg"}`;
            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(blobUrl);
            setTimeout(() => document.body.removeChild(link), 100);

            toast.update(toastId, { render: "Downloaded!", type: "success", autoClose: 3000, isLoading: false });
        } catch (err) {
            toast.update(toastId, { render: "Download failed!", type: "error", autoClose: 3000, isLoading: false });
        }
    };

    // ✅ Popup State
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenPopup = (item) => {
        setSelectedImage(item);
        setIsPopupOpen(true);
    };

    return (
        <div className="gallery-container1">
            <div className="banner">
                <h1>My Collection ❤️</h1>
                <p>All the images you liked are saved here.</p>
            </div>

            <div className="gallery-grid1">
                {likedImages.length === 0 ? (
                    <div className="empty-collection">
                        <p>No liked images yet 😢</p>
                    </div>
                ) : (
                    likedImages.map((item) => (
                        <div key={item._id} className="gallery-item" onClick={() => handleOpenPopup(item)}>
                            <img src={item.src} alt={item.name} />

                            <div className="OnHoverOptions">
                                <div className="BezTransformer">
                                    {/* Download Btn */}
                                    <div className="DownloadBtn BtnSame" onClick={(e) => { e.stopPropagation(); handleDownload(item.src); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path className="FillThePath" fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    {/* Remove Btn */}
                                    <div className="SaveBtn BtnSame" onClick={(e) => { e.stopPropagation(); handleRemove(item._id); }}>
                                        <i className="ri-delete-bin-line" style={{ color: "red" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* ✅ Popup added */}
            <ImagePopUp
                images={likedImages}
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                likedItems={likedItems}
                onLike={(id) => handleLikeBtn(id)}
                onDownload={(src) => handleDownload(src)}
                currentImage={selectedImage}
            />
        </div>
    );
};

export default Collection;