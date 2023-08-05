import React from "react";
import "./content.scss";
export default function Content() {
    return (
        <div className="container">
            <div className="container_text">
                <h1>SERPENTI STYLE</h1>
                <p>
                    A modern muse meets the magnetic allure of an icon.
                    Embracing the audacious attitude of Serpenti, Anne Hathaway
                    elevates her style with on-trend handbags and mesmerizing
                    jewelry creations inspired by the fascinating snake.
                </p>
            </div>
            <div className="container_img">
                <div className="container_img_one">
                    <img
                        src={`${process.env.REACT_APP_SERVER_HOST}home/a1.avif`}
                    />
                    <img
                        src={`${process.env.REACT_APP_SERVER_HOST}home/a4.avif`}
                    />
                </div>
                <div className="container_img_two">
                    <img
                        src={`${process.env.REACT_APP_SERVER_HOST}home/a2.avif`}
                    />
                    <img
                        src={`${process.env.REACT_APP_SERVER_HOST}home/a3.avif`}
                    />
                </div>
            </div>
            <div className="container_product">
                <div className="container_product_h1">
                    <h1>OUR INSPIRING CREATIONS</h1>
                </div>
                <div className="container_product_item">
                    <div>
                        <img
                            src={`${process.env.REACT_APP_SERVER_HOST}home/necklace.avif`}
                        />
                        NECKLACES
                    </div>
                    <div>
                        <img
                            src={`${process.env.REACT_APP_SERVER_HOST}home/rings.avif`}
                        />
                        RINGS
                    </div>
                    <div>
                        <img
                            src={`${process.env.REACT_APP_SERVER_HOST}home/watch.avif`}
                        />
                        WATCHES
                    </div>
                    <div>
                        <img
                            src={`${process.env.REACT_APP_SERVER_HOST}home/bag.avif`}
                        />
                        BAGS
                    </div>
                </div>
            </div>
        </div>
    );
}
