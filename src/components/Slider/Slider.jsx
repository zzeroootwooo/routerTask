import { React, useState } from "react";
import { Link } from "react-router";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pics = [
        {
            alt: "First pic",
            url: "https://http.cat/100",
        },

        {
            alt: "Second pic",
            url: "https://http.cat/200",
        },
        {
            alt: "Third pic",
            url: "https://http.cat/300",
        },
        {
            alt: "Fourth pic",
            url: "https://http.cat/404",
        },
    ];

    const currentPic = pics[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? pics.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((next) => (next === pics.length - 1 ? 0 : next + 1));
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button onClick={handlePrev}>PREV</button>
                <div>
                    <img
                        style={{ width: 400, height: 400 }}
                        src={currentPic.url}
                        alt={currentPic.alt}
                    />
                </div>
                <button onClick={handleNext}>NEXT</button>
            </div>

            <Link style={{ color: "fff" }} to="/">
                Go Back To Main Page
            </Link>
        </>
    );
};

export default Slider;
