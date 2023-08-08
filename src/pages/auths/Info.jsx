import React, { useEffect, useState } from "react";
import api from "@api";
import { useSelector } from "react-redux";
import "./auth.scss";
import Navbar from "../../components/Navbar";
export default function Info() {
    const userStore = useSelector((store) => store.userStore);
    console.log("userStore", userStore);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            //window.location.href = "/";
        }
    }, []);
    const [feature, setFeature] = useState([
        "Find a Store",
        "Help",
        "Join Us",
        "Sign In",
    ]);
    return (
        <>
            {/* Before Nav */}
            <section className="before_nav">
                <div className="before_nav_content">
                    <span className="brand_name">
                        {/* {t("hello")} - {t("about")} User:{" "}
                        {store.userStore?.data?.first_name}{" "}
                        {store.userStore?.data?.last_name} */}
                    </span>
                    <div className="feature">
                        {feature.map((item, index) => (
                            <span
                                className="feature_item"
                                key={Date.now() * Math.random()}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <Navbar />
            <div className="profile">
                <div className="profile_title">
                    <i class="fa-solid fa-user-pen"></i>
                    <h4>PROFILE</h4>
                </div>
                <br></br>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        alert("đã gọi");
                        let result = await api.users.changePassword({
                            new_pass: e.target.new_pass.value,
                            old_pass: e.target.old_pass.value,
                        });
                        console.log("result", result);
                    }}
                >
                    <input name="old_pass" type="text" placeholder="OldPass" />
                    <br />
                    <input name="new_pass" type="text" placeholder="NewPass" />
                    <br />
                    <input
                        name="renew_pass"
                        type="text"
                        placeholder="ReNewPass"
                    />
                    <br />
                    <div className="button_text">
                        <button
                            style={{ width: "130px" }}
                            type="text"
                            class="btn btn-info"
                        >
                            Submit
                        </button>
                        <button
                            class="btn btn-info"
                            onClick={async (e) => {
                                console.log("đã vào đây");
                                if (!userStore.data?.email_confirm) {
                                    alert("đã vào");
                                    let result = await api.users.resend();
                                    console.log("result", result);
                                }
                            }}
                        >
                            Resend Email
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
