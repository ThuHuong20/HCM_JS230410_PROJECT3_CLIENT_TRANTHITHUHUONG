import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* Antd */
//import { AutoComplete, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SearchProduct from "@components/SearchProduct";
import { userActions } from "../stores/slices/user";

export default function Navbar() {
    const dispatch = useDispatch();
    const renderTitle = (title) => (
        <span>
            {title}
            <a
                style={{
                    float: "right",
                }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
                more
            </a>
        </span>
    );

    const renderItem = (title, count) => ({
        value: title,
        label: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {title}
                <span>
                    <UserOutlined /> {count}
                </span>
            </div>
        ),
    });

    const options = [
        {
            label: renderTitle("Libraries"),
            options: [
                renderItem("AntDesign", 10000),
                renderItem("AntDesign UI", 10600),
            ],
        },
        {
            label: renderTitle("Solutions"),
            options: [
                renderItem("AntDesign UI FAQ", 60100),
                renderItem("AntDesign FAQ", 30010),
            ],
        },
        {
            label: renderTitle("Articles"),
            options: [renderItem("AntDesign design language", 100000)],
        },
    ];
    const store = useSelector((store) => store);
    const { t } = useTranslation();
    return (
        <nav>
            <div className="nav_content">
                <div className="left_content">
                    {/* Logo */}
                    {/* <img
                        src={`${process.env.REACT_APP_SERVER_HOST}bvlgari.png`}
                        className="logo"
                    /> */}
                    <h1
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    >
                        B V L G A R I
                    </h1>
                </div>
                <div className="middle_content">
                    <a
                        className="item"
                        href="/"
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        Home
                    </a>
                    <a className="item" href="">
                        <div class="dropdown">
                            <a
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                }}
                                class="dropdown-toggle"
                                //type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Menu
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <Link class="dropdown-item" to="/necklaces">
                                    NECKLACES
                                </Link>
                                <Link class="dropdown-item" to="/rings">
                                    RINGS
                                </Link>
                                <Link class="dropdown-item" to="/watches">
                                    WATCHES
                                </Link>
                                <Link class="dropdown-item" to="/bags">
                                    BAGS
                                </Link>
                            </div>
                        </div>
                    </a>
                    <a
                        className="item"
                        style={{ color: "black", textDecoration: "none" }}
                        href="https://www.bulgari.com/en-us/corporate-social-responsibility/supply-chain.html"
                    >
                        About
                    </a>
                    <a
                        className="item"
                        style={{ color: "black", textDecoration: "none" }}
                        href="https://www.bulgari.com/en-us/magazine"
                    >
                        Stories
                    </a>
                </div>
                <div className="right_content">
                    {/* Search */}
                    <div className="searchBox d-flex" role="search">
                        <div>
                            <SearchProduct />
                        </div>
                    </div>
                    {localStorage.getItem("token") ? (
                        <div class="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    className="brand_name"
                                >
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                </span>
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a class="dropdown-item" href="/profile">
                                    Profile
                                </a>
                                <a
                                    class="dropdown-item"
                                    onClick={() => {
                                        alert("Are you sure want to logout?");
                                        localStorage.removeItem("token");
                                        dispatch(userActions.logOut());
                                        //navigate("/");
                                        window.location.href = "/";
                                    }}
                                    href="/"
                                >
                                    Log Out
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div class="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i class="fa-regular fa-user"> </i>
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a class="dropdown-item" href="/register">
                                    Register
                                </a>
                                <a class="dropdown-item" href="/login">
                                    Log In
                                </a>
                            </div>
                        </div>
                    )}
                    {/* Wishlist */}
                    <i className="fa-regular fa-heart"></i>
                    {/* Cart */}
                    <i className="fa-solid fa-bag-shopping"></i>
                </div>
            </div>
        </nav>
    );
}
