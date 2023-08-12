import React, { useContext, useState, useEffect } from "react";
import "./payment.scss";
import { RootContext } from "@/App";
import { convertToUSD } from "@mieuteacher/meomeojs";
import axios from "axios";
export default function Payment() {
    const { cartStore } = useContext(RootContext);
    console.log("🚀 ~ file: Payment.jsx:8 ~ Payment ~ cartStore:", cartStore);
    const [cartItems, setCartItems] = useState(null);
    useEffect(() => {
        if (cartStore.data) {
            setCartItems(cartStore.data.cart_details);
        }
    }, [cartStore.data]);

    function checkOut(eventForm) {
        eventForm.preventDefault();
        console.log("payment", eventForm.target.payment.value);
        let receiptInfor = {
            receipt_code: cartStore.data.id,
            total: cartStore.data.cart_details.reduce((result, nextItem) => {
                return (result += nextItem.quantity * nextItem.product.price);
            }, 0),
            pay_mode: eventForm.target.payment.value,
            paid: eventForm.target.payment.value == "CASH" ? false : true,
        };
        let receiptDetails = [];
        for (let i in cartStore.data.cart_details) {
            receiptDetails.push({
                product_id: cartStore.data.cart_details[i].product_id,
                quantity: cartStore.data.cart_details[i].quantity,
                note: cartStore.data.cart_details[i].note,
            });
        }
        // console.log("data", receiptInfor);
        // console.log("receiptDetails", receiptDetails);
        axios
            .post("http://localhost:4000/apis/v1/purchase/zalo-create", {
                receipt_code: cartStore.data.id,
                total: cartStore.data.cart_details.reduce(
                    (result, nextItem) => {
                        return (result +=
                            nextItem.quantity * nextItem.product.price);
                    },
                    0
                ),
            })
            .then((res) => {
                console.log("Okla");
            })
            .catch((err) => {
                alert("bala");
            });
        return;
        axios
            .post("http://localhost:4000/apis/v1/purchase/order", {
                receiptInfor,
                receiptDetails,
            })
            .then((res) => {
                console.log("Okla");
            })
            .catch((err) => {
                alert("bala");
            });
    }
    return (
        <div>
            <div>
                <div className="shipping">
                    <div
                        onSubmit={(eventForm) => {
                            eventForm.preventDefault();
                        }}
                        className="form-group"
                    >
                        <h2>Information</h2>
                        <div className="form-groupInput">
                            <input
                                id="name"
                                className="form-group-input"
                                type="text"
                                placeholder="Name"
                                name="userName"
                            />
                            <br />
                            <input
                                id="phone"
                                className="form-group-input"
                                type="text"
                                placeholder="Phone Number"
                                name="userPhoneNumber"
                            />
                            <br />
                            <input
                                id="address"
                                className="form-group-input"
                                type="text"
                                placeholder="Address"
                                name="userAddress"
                            />
                            <br />
                        </div>
                        {/* Xử lý tại đây */}
                        <form
                            onSubmit={(eventForm) => {
                                checkOut(eventForm);
                            }}
                        >
                            <div className="shippingDetails">
                                <p>Payment methods</p>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="CASH"
                                />
                                <span>Cash</span>

                                <input
                                    className="zalo"
                                    type="radio"
                                    name="payment"
                                    value="ZALO"
                                />
                                <span> Zalo</span>

                                <input
                                    type="radio"
                                    name="payment"
                                    value="MOMO"
                                />
                                <span>Momo</span>
                                <div className="shippingDetails_button">
                                    <img src="../images/payment.png" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="form-group-checkout"
                            >
                                Check Out
                            </button>
                        </form>
                        <p className="validate-email" />
                    </div>
                    <div className="informationLine">
                        {cartItems?.map((item, index) => (
                            <div>
                                <div className="informationLine_product">
                                    <img src={`${item.product.avatar}`} />
                                    <div className="informationLine_text">
                                        <h4>{item.product.name}</h4>
                                        <p>
                                            {convertToUSD(item.product.price)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="informationLine_total">
                            <h3>Total:</h3>
                            <span>
                                {convertToUSD(
                                    cartItems?.reduce((value, nextItem) => {
                                        return (value +=
                                            nextItem.quantity *
                                            nextItem.product.price);
                                    }, 0)
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
