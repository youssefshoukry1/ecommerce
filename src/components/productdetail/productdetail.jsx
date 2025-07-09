import axios from 'axios'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Category from '../Category/Category'
import CartContext from '../../context/CartContext'
import toast from 'react-hot-toast'
import Slider from 'react-slick'
import Loader from '../loader/loader';
import { useQuery } from "@tanstack/react-query";
import {Helmet} from "react-helmet";

export default function Productdetail() {
  let { id } = useParams()

 // This will give you the product ID from the URL
  // لا داعي لاستخدام useState هنا
  let {addProductToCart} = useContext(CartContext)


  const { isLoading, data: details } = useQuery({
    queryKey: ['getProduct', id],
    queryFn: async () => {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      return data.data;
    },
    staleTime: 4000
    // refetchInterval:3000,
    // refetchIntervalInBackground:true
  });







    async function addProductItem(id) {
    let response = await addProductToCart(id);
    console.log(response);
        if(response.data.status === 'success'){
          toast.success(response.data.message) 
    }else{
      toast.error(response.data.message) 
    }
  }

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };






  if (isLoading) {
    return <Loader />;
  }
  return (
    <>


      <Helmet>
                
                <title>ProductDetails</title>
              
            </Helmet>

        <div className='row justify-center items-center my-5'>
      <div className='w-1/5 py-20 mx-5 '>
            <Slider {...settings}>

        {details?.images.map((src)=>{
          return <img src={src} className='w-full rounded-3xl ' alt={details?.title} />
        })}
    </Slider>

      
      </div>
      <div className='w-1/3 flex flex-col justify-around mx-5 bg-gray-700 p-7 rounded-3xl'> 
        <div>
          <h1 className='text-xl font-semibold text-sky-600'>{details?.title}</h1>
          <p className='mt-4 text-white text-lg'>{details?.description}</p>
        </div>
        <div>
            <p className='mt-3 text-white text-lg'>{details?.category?.name}</p>
                  <div className="flex justify-between my-3 ">
                    
            <span className='text-cyan-200 text-2xl flex my-5 '>
              {details?.price} 
                      <p className='text-white text-sm mx-2 -my-1.5'>EGP</p>
            </span>
            <span className='flex p-2 -my-3' style={{ color: '#0891b2' }}>
              <p className=' text-xl -my-1.5 mx-2'>{details?.ratingsQuantity}</p>
              <i className="fas fa-star text-yellow-300 "></i>
            </span>
        </div>

          </div>
          <button className='button shake-vertical'
                      onClick={() => {
                        addProductItem(details?.id);
                      }}>Add To Cart
                        </button>
      </div>
    </div>
    <Category categoryName={details?.category?.name} />
    </>

  )
}
