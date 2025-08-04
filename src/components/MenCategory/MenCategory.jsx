import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import CartContext from "../../context/CartContext.js";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loader from '../loader/loader.jsx';
import {Helmet} from "react-helmet";

export default function MenCategory() {
 const [showDropdown, setShowDropdown] = useState(false);
  const [ search, setSearch ] = useState('')

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

  let { data, isLoading } = useQuery({
    queryKey: ['mencategory'],
    queryFn: getProducts,
    // refetchInterval:3000,
    // refetchIntervalInBackground:true
    staleTime: 4000,
    select: ((data) => {
      return data?.data
    })      // بدل مانزل تحت واعمل  data?.data.map(()=>{}) بدل مانزل تحت واعم
  })


function getProducts() {
  return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then(({ data }) => {
      const filtered = data.data.filter(
        (item) =>
          /(^|\W)men(\W|$)/.test(item.category.slug.toLowerCase()) ||
          /(^|\W)men(\W|$)/.test(item.category.name.toLowerCase())
      );
      return { ...data, data: filtered };
    });
}

if(isLoading){
  return <Loader/>
}else{
    return (

      <>
        <Helmet>
                
                <title>men's category</title>
              
            </Helmet>




        <div className="">


<form className="w-full max-w-xs sm:max-w-md mx-auto my-12 rounded-3xl px-4">
  <div className="flex relative">
    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
      Your Email
    </label> 
    <button
      id="dropdown-button"
      type="button"
      className=" outline-none shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200  focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      men's Fashion
      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
    </button>
    {showDropdown && (
      <div id="dropdown" className="z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute left-0 top-12">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
          <li>
              <Link to={`/category-table/women`}> <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Women's Fashion</button></Link>
          </li>
          <li>
              <Link to={`/electronic/electronic`}> <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Electronics</button></Link>
          </li>
        </ul>
      </div>
    )}
    <div className="relative w-full">
      <input
      
      onChange={(e)=> setSearch(e.target.value)}
        type="search"
        id="search-dropdown"
        className=" outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search here..."
        required
      />
    </div>
  </div>
</form>



          <div className="row gap-8 my-11 ">
            {data.filter((item) => {
                return search.trim() === '' 
    ? true 
    : item.title.toLowerCase().includes(search.toLowerCase());
            }).map((productInfo) => { //هنا عملنا بدلproduct.map عملنا data.map عشان الquery
              return (
                <div className="lg:w-1/6 lg:px-6 w-2/5  " key={productInfo.id}>
                  <div className="bg-gray-700 lg:w-64 w-36  p-3 rounded-3xl shadow-current hover:shadow-2xl hover:shadow-cyan-900 transition-all hover:scale-95 duration-300">
                    <Link to={`/productdetail/${productInfo.id}/${productInfo.category.name}`}>
                      <img
                        className="w-full rounded-3xl "
                        src={productInfo.imageCover}
                        alt={productInfo.title}
                      />
                      <span className="block lg:text-xl font.semibold text-cyan-600 ">
                        {productInfo.category.name}
                      </span>
                      <span className="lg:text-lg font-light text-white">
                        {productInfo.title.split(" ").slice(0, 3).join(" ")}
                      </span>
                      <div className="flex justify-between my-3 gap-2 ">
                        
                        <span className="flex text-white ">
                          <p className="p-2 lg:-my-2.5 -my-1.5 lg:text-2xl  text-xl text-cyan-600">{productInfo.price}</p>
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
              );
            })}
          </div>

        </div>
      </>
    );

  }

}
