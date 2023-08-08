import React from "react";
import "./cart.scss";
export default function Cart() {
    return (
        <div>
            <div className="cart_container">
                <div className="cart_shipping">
                    <h1>MY BAG: 2 ITEM</h1>
                    <p>
                        <i class="fa-solid fa-truck"></i>
                    </p>
                    <p>This order qualifies for FREE Shipping!</p>
                </div>
                <div>
                    <div className="cart_content">
                        <div className="cart_image">
                            <img
                                src="https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw17e6d319/images/images/1455370.png"
                                alt=""
                            />
                        </div>
                        <div className="cart_item">
                            <h1>san pham 1</h1>
                            <div className="cart_price">
                                <div className="price">
                                    {/* <span>{convertToUSD(props.product?.price)}</span> */}
                                    <span>$424</span>
                                </div>
                                <div className="cart_count">
                                    <button>-</button>
                                    <span>5</span>
                                    <button>+</button>
                                </div>
                                <div>
                                    <i
                                        style={{
                                            color: " #de7474",
                                            fontSize: "20px",
                                        }}
                                        class="fa-solid fa-trash"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <h1>Total</h1>
                    <p
                        style={{
                            color: "#de7474",
                            fontWeight: "bold",
                            fontSize: "25px",
                        }}
                    >
                        2424
                    </p>
                    <button>Check Out</button>
                </div>
            </div>
        </div>
    );
}
