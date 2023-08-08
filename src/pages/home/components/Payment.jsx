import React from "react";
import "./payment.scss";

export default function Payment() {
    return (
        <div>
            <div>
                <div className="shipping">
                    <form
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
                        <div className="shippingDetails">
                            <p>Payment methods</p>
                            <input
                                type="radio"
                                name="payment"
                                defaultValue="COD"
                            />
                            Pay on delivery
                            <br />
                            <input
                                type="radio"
                                name="payment"
                                defaultValue="ATM"
                            />
                            Express checkout
                            <br />
                            <div className="shippingDetails_button">
                                <img src="../images/payment.png" />
                            </div>
                        </div>
                        <button type="submit" className="form-group-checkout">
                            Check Out
                        </button>
                        <p className="validate-email" />
                    </form>
                    <div className="informationLine">
                        <div>
                            <div className="informationLine_product">
                                <img src="https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw17e6d319/images/images/1455370.png" />
                                <div className="informationLine_text">
                                    <h4>san pham 1</h4>
                                    <p>$7241</p>
                                </div>
                            </div>
                        </div>

                        <div className="informationLine_total">
                            <h3>Total:</h3>
                            <span>$35353</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
