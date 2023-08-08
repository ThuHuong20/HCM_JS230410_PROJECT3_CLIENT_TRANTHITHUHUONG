import { useRef, useState, useEffect } from "react";
import "./admin.scss";
import axios from "axios";
import { message } from "antd";

message.config({
    top: 150,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
});

export default function Admin() {
    const urlPreviewRef = useRef();
    const [categories, setCategories] = useState([]);
    try {
        useEffect(() => {
            axios
                .get("http://localhost:4000/apis/v1/categories")
                .then((res) => {
                    setCategories(res.data.data);
                });
        }, []);
    } catch (err) {}

    return (
        <form
            className="admin_container"
            onSubmit={async (eventForm) => {
                eventForm.preventDefault();

                let newProductInfor = {
                    category_id: Number(eventForm.target.category_id.value),
                    name: eventForm.target.name.value,
                    des: eventForm.target.des.value,
                    price: Number(eventForm.target.price.value),
                };

                let newProductAvatar = {
                    avatar: eventForm.target.avatar.files[0],
                };

                let fakeForm = new FormData();
                fakeForm.append("imgs", newProductAvatar.avatar);
                fakeForm.append(
                    "product_infor",
                    JSON.stringify(newProductInfor)
                );
                await axios
                    .post("http://localhost:4000/apis/v1/products", fakeForm, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((res) => {
                        message.success("Add Product Successfully!");
                    })
                    .catch((err) => {
                        console.log("err", err);
                    });
            }}
        >
            <h2>Add Product</h2>
            <div className="admin_content">
                <div className="product_infor">
                    <div className="form_group">
                        <label htmlFor="">Product Name</label>
                        <br />
                        <input type="text" name="name" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="">Description</label>
                        <br />
                        <textarea type="text" name="des" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="">Price</label>
                        <br />
                        <input type="text" name="price" />
                    </div>
                    <label htmlFor="">Category</label>
                    <br />
                    <select name="category_id">
                        {categories?.map((category, index) => (
                            <option key={index} value={category.id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="product_image">
                    <input
                        name="avatar"
                        onChange={(event) => {
                            if (event.target.files.length == 0) {
                                console.log("Chưa chọn hình!");
                            } else {
                                let blodUrl = URL.createObjectURL(
                                    event.target.files[0]
                                );
                                urlPreviewRef.current.src = blodUrl;
                            }
                        }}
                        type="file"
                    />
                    <img
                        ref={urlPreviewRef}
                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                        alt=""
                    />
                </div>
            </div>
            <div>
                <button className="addProduct_btn" type="submit">
                    ADD PRODUCT NOW
                </button>
            </div>
        </form>
    );
}
