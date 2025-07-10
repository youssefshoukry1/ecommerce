
import axios from "axios";
import CartContext from "./CartContext.js";
import { useState } from "react";

let headers = {
    token: localStorage.getItem("userToken"),
};

export default function CartContextProvider(props) {


    const [cartNumber, setCartNumber] = useState(0);


        async function addProductToCart(productId) {
        return axios
            .post(
                `https://ecommerce.routemisr.com/api/v1/cart`,
                {
                    productId: productId,
                },
                {
                    headers: headers,
                }
            )
            .then((response) => {
                console.log(';;;',response);
                setCartNumber(response.data.numOfCartItems)
                return response})
            .catch((error) => error);
    }

            async function getProductToCart() {
        return axios
            .get(
                `https://ecommerce.routemisr.com/api/v1/cart`,
                {
                    headers: headers,
                }
            )
                        .then((response) => {
                console.log(';;;',response);
                setCartNumber(response.data.numOfCartItems)
                return response})
            .catch((error) => error);
    }

                async function updateProductInCart(productId, count) {
        return axios
            .put(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                {
                    count: count,
                }, {
                    headers: headers,
                }
            )
            .then((response) => response)
            .catch((error) => error);
    }

                    async function removeProductInCart(productId) {
        return axios
            .delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                {
                    headers: headers,
                }
            )
                        .then((response) => {
                console.log(';;;',response);
                setCartNumber(response.data.numOfCartItems)
                return response})
            .catch((error) => error);
    }

    return (
        <CartContext.Provider value={{ addProductToCart, getProductToCart, updateProductInCart, removeProductInCart,cartNumber }}>
            {props.children}
        </CartContext.Provider>
    );
}
