import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

import Home from "./Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Content from "../../components/Content";
import Body from "./components/Body";
import Admin from "../auths/Admin";
import Admin2 from "../auths/Admin2";

export default (
    <>
        <Route path="/" element={<Home />}>
            <Route path="/" element={<Body />}></Route>;
            <Route path="/:category" element={<Product />}></Route>;
            <Route path="/products/:id" element={<ProductDetail />}></Route>;
            <Route path="/cart" element={<Cart />}></Route>;
            <Route path="/payment" element={<Payment />}></Route>;
            <Route path="/admin" element={<Admin />}></Route>;
            <Route path="/admin2" element={<Admin2 />}></Route>;
        </Route>
    </>
);
