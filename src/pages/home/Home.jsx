import "./home.scss";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@actions/user";

function Home() {
    const store = useSelector((store) => store);
    const { t } = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.authenToken());
    }, []);
    return (
        <div className="root_page">
            {/* Before Nav */}
            <section className="before_nav">
                <div className="before_nav_content">
                    <span className="brand_name">
                        {/* {t("hello")} - {t("about")} User:{" "}
                        {store.userStore?.data?.first_name}{" "}
                        {store.userStore?.data?.last_name} */}
                    </span>
                    <div className="feature">
                        {/* {feature.map((item, index) => (
                            <span
                                className="feature_item"
                                key={Date.now() * Math.random()}
                            >
                                {item}
                            </span>
                        ))} */}
                        <span
                            className="feature_item"
                            onClick={() => {
                                window.location.href =
                                    "https://www.bulgari.com/en-us/storelocator/";
                            }}
                        >
                            Find A Store
                        </span>
                        <span
                            className="feature_item"
                            onClick={() => {
                                window.location.href =
                                    "https://www.bulgari.com/en-us/contact-us--info.html";
                            }}
                        >
                            Help
                        </span>
                        <span
                            className="feature_item"
                            onClick={() => {
                                window.location.href =
                                    "https://www.bulgari.com/en-us/contact-us--info.html";
                            }}
                        >
                            Join Us
                        </span>
                        {localStorage.getItem("token") ? (
                            <span className="feature_item">
                                {/* {t("hello")} */}
                                Hello {store.userStore?.data?.last_name}
                            </span>
                        ) : (
                            <span className="feature_item">Sign In</span>
                        )}
                    </div>
                </div>
            </section>
            {/* Navbar */}
            <Navbar />
            {/* Body */}
            <section className="body_container">
                <div className="body_container_center">
                    <Outlet />
                    {/* <Banner />
                    <Content /> */}
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
