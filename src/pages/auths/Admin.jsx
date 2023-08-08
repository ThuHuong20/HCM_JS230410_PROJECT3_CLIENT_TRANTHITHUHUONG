import React from "react";
import axios from "axios";
import { message } from "antd";
export default function Admin() {
    return (
        <div>
            <div>
                <h1 style={{ marginLeft: "600px" }}>Admin</h1>
            </div>
            <div className="form_container">
                <div className="form_add">
                    <h1>Add Product</h1>
                    <div className="form_add_avatar">
                        <img
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                            }}
                            src="../images/noAvatar.jpg"
                            alt=""
                        />
                        <br />

                        <input type="file" />
                        <br />
                    </div>
                    <div className="form_add_product">
                        <select
                            style={{
                                border: "1px solid black",
                                borderRadius: "5px",
                            }}
                            defaultValue={""}
                            name="type"
                        >
                            <option value="">Choose...</option>
                            <option value="Cactus">Rings</option>
                            <option value="Largeplant">Watches</option>
                            <option value="Orchid">Necklaces</option>
                            <option value="Dried">Bags</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Name Product"
                            name="NameProduct"
                        ></input>
                        <input
                            type="text"
                            placeholder="Price"
                            name="Price"
                        ></input>
                        <button>Add</button>
                    </div>
                </div>
                <div className="form_listProduct">
                    <h1>List Product</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Avatar</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <img
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            borderRadius: "50%",
                                        }}
                                        src="../images/noAvatar.jpg"
                                        alt=""
                                    />
                                </td>
                                <td>DREAM</td>
                                <td>$49,876</td>
                                <td>
                                    <button
                                        style={{
                                            width: "30px",
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                    >
                                        -
                                    </button>
                                    <span style={{ margin: "0px 30px" }}>
                                        2
                                    </span>
                                    <button
                                        style={{
                                            width: "30px",
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <img
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            borderRadius: "50%",
                                        }}
                                        src="../images/noAvatar.jpg"
                                        alt=""
                                    />
                                </td>
                                <td>DREAM</td>
                                <td>$49,876</td>
                                <td>
                                    <button
                                        style={{
                                            width: "30px",
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                    >
                                        -
                                    </button>
                                    <span style={{ margin: "0px 30px" }}>
                                        2
                                    </span>
                                    <button
                                        style={{
                                            width: "30px",
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
