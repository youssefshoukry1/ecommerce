import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Category from '../Category/Category'

export default function Productdetail() {
 let { id } = useParams() // This will give you the product ID from the URL

  const [details, setDetails] = useState(null)

  useEffect(() => {
  function getProductDatails() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => { setDetails(data.data) })
      .catch();
  }
  // Call the function to fetch product details
  // This will run when the component mounts and whenever `id` changes
  console.log("Product ID from URL:", id);
  getProductDatails();
  }, [id]);

  return (
    <>
        <div className='row justify-center items-center'>
      <div className='w-1/4 '>
      <img src={details?.imageCover} className='w-full' alt={details?.title} /> {// ؟ معناها لو ده محصلش ماتكملش
      }
      </div>
      <div className='w-1/3 flex flex-col justify-around'> 
        <div>
          <h1 className='text-xl font-semibold text-sky-600'>{details?.title}</h1>
          <p className='mt-4'>{details?.description}</p>
        </div>
        <div>
            <p className='mt-3'>{details?.category?.name}</p>
                  <div className="flex justify-between my-3 ">
            <span>{details?.price}EGP</span>
            <span>{details?.ratingsQuantity}<i className="fas fa-star text-yellow-300 "></i></span>
        </div>

          </div>
          <button className='btn'>Add To Cart</button>
      </div>
    </div>
    <Category categoryName={details?.category?.name}/>
    </>

  )
}
