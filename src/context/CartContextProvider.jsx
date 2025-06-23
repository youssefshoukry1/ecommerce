// import React from "react";
// import axios from "axios";
// import CartContext from "./CartContext";

// let headers = {
//     token: localStorage.getItem("userToken"),
// };

// export default function CartContextProvider(props) {
//     function addProductToCart(productId) {
//         return axios
//             .post(
//                 `https://ecommerce.routemisr.com/api/v1/cart`,
//                 {
//                     productId: productId,
//                 },
//                 {
//                     headers: headers,
//                 }
//             )
//             .then((response) => response)
//             .cath((error) => error);
//     }

//     return (
//         <CartContext.Provider value={{ addProductToCart }}>
//             {props.chidren}
//         </CartContext.Provider>
//     );
// }
