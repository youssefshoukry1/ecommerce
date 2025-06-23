import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import CartContext from "../context/CartContext.js";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoadding] = useState(true);

  // let { addProductToCart } = useContext(CartContext);

  // async function addProductItem(id) {
  //   let response = await addProductToCart(id);
  //   console.log(response);
  // }

  function getProducts() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        setLoadding(false);
        setProduct(data.data);
      })
      .catch(() => {
        setLoadding(false);
        console.error("Error fetching products");
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="">
        {!isLoading ? (
          <div className="row gap-2 ">
            {product.map((productInfo) => {
              return (
                <div className="w-1/6 px-4 " key={productInfo.id}>
                  <div className="bg-slate-100 p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <Link to={`product-detail/${productInfo.id}/${productInfo.category.name}`}>
                      <img
                        className="w-full "
                        src={productInfo.imageCover}
                        alt={productInfo.title}
                      />
                      <span className="block text-xl font.semibold text-blue-400">
                        {productInfo.category.name}
                      </span>
                      <span className="text-lg font-light text-gray-700">
                        {productInfo.title.split(" ").slice(0, 3).join(" ")}
                      </span>
                      <div className="flex justify-between my-3 ">
                        <span>{productInfo.price}EGP</span>
                        <span>
                          {productInfo.ratingsQuantity}
                          <i className="fas fa-star text-yellow-300"></i>
                        </span>
                      </div>
                    </Link>
                    <button
                      // onClick={() => {
                      //   addProductItem(productInfo.id);
                      // }}
                      className="btn"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
