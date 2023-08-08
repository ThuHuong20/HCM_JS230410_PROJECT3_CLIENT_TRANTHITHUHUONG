import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import "./searchProduct.scss";
import { productActions } from "../stores/slices/product";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import api from "@api";
function Example() {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    const dispatch = useDispatch();
    /* bootstrap */
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const productStore = useSelector((store) => store.productStore);

    let timeOut; // tạo ra 1 biến để lưu timeout
    const [searchStatus, setSearchStatus] = useState(false);
    const [searchData, setSearchData] = useState([]);
    function search(e) {
        clearTimeout(timeOut); // việc đầu tiên khi on change là remove timeout sắp diễn ra.
        if (e.target.value == "") {
            return;
        }
        // ghi đè timeout thành 1 time out mới  => nếu không onchange nữa thì sẽ không bị clear và sẽ diễn ra nội dung bên trong timeout
        timeOut = setTimeout(async () => {
            // call api
            setSearchStatus(true);
            try {
                if (searchStatus) {
                    return;
                }
                let result = await api.products.search(e.target.value);
                if (result.status == 200) {
                    // ok sau 1.5s thì update data và tắt hiệu ứng
                    setTimeout(() => {
                        setSearchStatus(false);
                        setSearchData(result.data.data);
                    }, 1500);
                } else {
                    // failed
                }
            } catch (err) {
                // lỗi call api
            }
        }, 700); // sau 700 ms không gõ thì thực thi
    }
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <span class="material-symbols-outlined">
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        className="input"
                        placeholder="Search"
                    />
                </span>
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                style={{ marginTop: "80px" }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <input
                            style={{
                                border: "2px solid green",
                                width: "450px",
                            }}
                            type="text"
                            placeholder="Enter search"
                            className="input"
                            onChange={(e) => {
                                search(e);
                            }}
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {searchData.map((product, index) => (
                        <div className="DetailItem_container ">
                            <div
                                key={Date.now() * Math.random()}
                                className="DetailItem"
                            >
                                <div className="DetailItem_img">
                                    <img src={product.avatar} />
                                </div>
                                <div className="DetailItem_name">
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                    <b>Description: </b>
                                    <span style={{ color: "black" }}>
                                        {product.des}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Modal.Body>
                {/* ))} */}
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                {searchStatus ? (
                    <div className="loading">
                        <Spin indicator={antIcon} />
                    </div>
                ) : (
                    <></>
                )}
            </Modal>
        </>
    );
}

export default Example;
