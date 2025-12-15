import React from "react";
import "../ComponentCSS/ImageRotater.css";
import { Eternity2 } from "../../public/assets/assest";

const AutoImageRotator = () => {
    return (
        <section className="banner">
            <div
                className="slider"
                style={{ "--quantity": Eternity2.length }}
            >
                {Eternity2.map((img, index) => (
                    <div
                        className="item"
                        key={index}
                        style={{ "--position": index + 1 }}
                    >
                        <img src={img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AutoImageRotator;