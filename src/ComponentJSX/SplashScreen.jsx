import React, { useEffect, useState } from "react";
import '../ComponentCSS/SplashScreen.css'

function SplashScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Check if already visited in this tab
        if (sessionStorage.getItem("visited")) {
            setShow(false); // Skip splash if already seen
        } else {
            sessionStorage.setItem("visited", "true");

            // Auto hide after 2 seconds
            const timer = setTimeout(() => setShow(false), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

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
            threshold: 0 // optional: triggers when 20% visible
        });

        const visibleElements1 = document.querySelectorAll('#SplashHeading');
        visibleElements1.forEach(el => observer.observe(el));

        // Cleanup observer when component unmounts
        return () => {
            visibleElements1.forEach(el => observer.unobserve(el));
        };
    }, []);

    if (!show) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#111",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                transition: "opacity 0.6s ease",
            }}
        >
            <h1 id="SplashHeading">Aniterest</h1>
        </div>
    );
}

export default SplashScreen