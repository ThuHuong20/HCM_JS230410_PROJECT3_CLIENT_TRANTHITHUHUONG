import React, { useEffect } from "react";
import "./product.scss";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "@actions/user";
import { useParams, useNavigate } from "react-router-dom";
import { categoryActions } from "../../../stores/slices/category";

export default function Product() {
    const { category } = useParams();
    const navigate = useNavigate();
    // console.log("category", category);
    const store = useSelector((store) => store);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.authenToken());
    // }, []);

    useEffect(() => {
        if (category == "rings") {
            dispatch(categoryActions.findByCategory(1));
        }
        if (category == "bags") {
            dispatch(categoryActions.findByCategory(2));
        }
        if (category == "watches") {
            dispatch(categoryActions.findByCategory(3));
        }
        if (category == "necklaces") {
            dispatch(categoryActions.findByCategory(4));
        }
    }, [category]);

    const categoryStore = useSelector((store) => store.categoryStore);
    console.log("categoryStore", categoryStore);
    // let products = [
    //     {
    //         id: "1",
    //         name: "san phamr 1",
    //         price: 123,
    //         des: "good",
    //         avatar: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw17e6d319/images/images/1455370.png",
    //     },
    //     {
    //         id: "1",
    //         name: "san phamr 1",
    //         price: 123,
    //         des: "good",
    //         avatar: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwad22fa70/images/images/1499362.png",
    //     },
    //     {
    //         id: "1",
    //         name: "san phamr 1",
    //         price: 123,
    //         des: "good",
    //         avatar: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwad22fa70/images/images/1499362.png",
    //     },
    //     {
    //         id: "1",
    //         name: "san phamr 1",
    //         price: 123,
    //         des: "good",
    //         avatar: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwad22fa70/images/images/1499362.png",
    //     },
    //     {
    //         id: "1",
    //         name: "san phamr 1",
    //         price: 123,
    //         des: "good",
    //         avatar: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwad22fa70/images/images/1499362.png",
    //     },
    //     {
    //         id: "1",
    //         name: "san phamr 1",
    //         price: 123,
    //         des: "good",
    //         avatar: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwad22fa70/images/images/1499362.png",
    //     },
    // ];
    return (
        <div>
            <div className="Card">
                {categoryStore?.data?.map((product, index) => (
                    <div
                        className="card_img"
                        onClick={() => navigate(`/products/${product.id}`)}
                    >
                        <img
                            src={product.avatar}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card_name">
                            <div className="card-text">
                                <span>{product.name}</span>
                            </div>
                            <div className="card-price">
                                <p>{product.price}</p>
                                <span style={{ marginLeft: "50px" }}>
                                    <i class="fa-solid fa-heart"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
