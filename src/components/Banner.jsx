import React, { useEffect, useRef } from "react";
import "./banner.scss";
export default function Banner() {
    const videoRef = useRef(null);
    useEffect(() => {
        // Chạy hàm playVideo khi component được render
        playVideo();
    }, []);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    return (
        <div className="banner">
            <video ref={videoRef} controls>
                <source
                    className="banner_video"
                    type="video/mp4"
                    src={`${process.env.REACT_APP_SERVER_HOST}home/banner.mp4`}
                />
            </video>
        </div>
    );
}
