import React, { useEffect } from "react";
import validate from "@utils/validate";
import api from "@api";
import "./auth.scss";
export default function Login() {
    useEffect(() => {
        if (localStorage.getItem("token")) {
            window.location.href = "/";
        }
    });
    return (
        <div>
            <section
                className="vh-100"
                style={{
                    backgroundImage:
                        'url("https://www.bulgari.com/on/demandware.static/-/Library-Sites-bulgariSharedLibrary/default/dwcec99e9f/the_maison/bulgari_history/SLIDER_1/2_410x410.jpg")',
                }}
            >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div
                                className="card"
                                style={{ borderRadius: "1rem" }}
                            >
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="../images/lisa.jpg"
                                            alt="login form"
                                            className="img-fluid"
                                            style={{
                                                borderRadius: "1rem 0 0 1rem",
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form
                                                onSubmit={async (e) => {
                                                    e.preventDefault();
                                                    let data = {
                                                        user_name:
                                                            e.target.user_name
                                                                .value,
                                                        password:
                                                            e.target.password
                                                                .value,
                                                        type: !validate.isEmail(
                                                            e.target.user_name
                                                                .value
                                                        ), // Email false, User Name true
                                                    };

                                                    try {
                                                        let result =
                                                            await api.users.login(
                                                                data
                                                            );
                                                        if (
                                                            result.status == 200
                                                        ) {
                                                            if (
                                                                result.data
                                                                    .token ==
                                                                undefined
                                                            ) {
                                                                alert(
                                                                    "Đăng nhập thất bại"
                                                                );
                                                            } else {
                                                                localStorage.setItem(
                                                                    "token",
                                                                    result.data
                                                                        .token
                                                                );
                                                                alert(
                                                                    "Đăng nhập Thành Công"
                                                                );
                                                            }
                                                        } else {
                                                            alert(
                                                                result.data
                                                                    .message
                                                            );
                                                        }
                                                    } catch {
                                                        err;
                                                    }
                                                    {
                                                    }
                                                }}
                                            >
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h1 fw-bold mb-0">
                                                        <img
                                                            style={{
                                                                width: "230px",
                                                                height: "40px",
                                                            }}
                                                            src="../images/bvlgari.png"
                                                        />
                                                    </span>
                                                </div>
                                                <h5
                                                    className="fw-normal mb-3 pb-3"
                                                    style={{ letterSpacing: 1 }}
                                                >
                                                    Sign into your account
                                                </h5>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        placeholder="User Name or Email"
                                                        name="user_name"
                                                        type="email"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        placeholder=" Password"
                                                        name="password"
                                                        type="password"
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button
                                                        onClick={() => {
                                                            window.location.href =
                                                                "/";
                                                        }}
                                                        className="btn btn-dark btn-lg btn-block button-login"
                                                        type="submit"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <a
                                                    className="small text-muted"
                                                    href="#!"
                                                >
                                                    Forgot password?
                                                </a>
                                                <p
                                                    className="mb-5 pb-lg-2"
                                                    style={{ color: "#393f81" }}
                                                >
                                                    Don't have an account?{" "}
                                                    <p
                                                        onClick={() => {
                                                            window.location.href =
                                                                "/register";
                                                        }}
                                                        href="#!"
                                                        style={{
                                                            color: "#393f81",
                                                        }}
                                                    >
                                                        Register here
                                                    </p>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
