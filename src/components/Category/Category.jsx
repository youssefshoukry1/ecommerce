import React from 'react'
import axios from 'axios'
import Loader from '../loader/loader';
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from 'react-router-dom';
import { useContext } from "react";
import CartContext from "../../context/CartContext.js";
import toast from "react-hot-toast";

export default function Category(props) {
    let { category } = useParams()
  // بدل مانزل تحت واعمل  data?.data.map(()=>{}) بدل مانزل تحت واعم

console.log(props)






  const { isLoading, data: product = [] } = useQuery({
    queryKey: ['getProduct', category],
    queryFn: async () => {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      let allProducts = data.data;
      let related = allProducts.filter((prod) => prod.category.name === category);
      return related;
    },
    staleTime: 4000,
    refetchIntervalInBackground: true
  });



    let { addProductToCart } = useContext(CartContext);

  async function addProductItem(id) {
    let response = await addProductToCart(id);
    console.log(response);
    if (response.data.status === 'success') {
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }

  }


  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-5">
      <div className="row gap-8 my-11 ">
        {product.map((productInfo) => (
          <div className="lg:w-1/6 lg:px-6 w-2/5"  key={productInfo.id}>
            <div className="bg-gray-700 p-3 rounded-3xl shadow-3xl lg:w-64 w-36 hover:shadow-2xl hover:shadow-cyan-900 hover:scale-95 transition-all duration-300">
              <Link to={`/product-detail/${productInfo?.id}/${productInfo?.category?.name}`}>
                <img className="w-full rounded-3xl " src={productInfo?.imageCover} alt={productInfo?.title} />
                <span className=" my-4 text-center block lg:text-xl font.semibold text-sky-600">
                  {productInfo?.category?.name}
                </span>
                <span className="lg:text-lg font-light text-gray-700">
                  {productInfo?.title.split(' ').slice(0, 3).join(' ')}
                </span>
                <div className="flex justify-between my-3 gap-2 ">
                        <span className="flex text-white ">
                          <p className="p-2 lg:-my-2.5 -my-1.5 lg:text-2xl text-xl text-cyan-600">{productInfo.price}</p>
                          <p className="text-xs lg:text-md -mx-1">EGP</p>
                        </span>
                        <span className="flex ">
                          <p className="lg:p-2 p-1 lg:-my-3.5 -my-0 text-sm lg:text-lg text-white ">{productInfo.ratingsQuantity}</p>
                          <i className="fas fa-star text-sm text-yellow-300 my-1.5"></i>
                        </span>
                </div>
              </Link>
                  <div className="flex justify-center mt-2">
                      <button
                        onClick={() => {
                          addProductItem(productInfo.id);
                        }}
                        className="button text-sm vibrate-1 blink-1 "
                      >
                        Add To Cart
                      </button>
                    </div>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
  
 
}
