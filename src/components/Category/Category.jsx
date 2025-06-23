import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../loader/loader';
import { Link } from 'react-router-dom';


export default function Category(props) {

console.log(props)
let category = props.categoryName || 'all';
  const [product, setDetails] = useState([]);
  const [isLoading, setLoadding] = useState(true)

  useEffect(() => {
  function getProductDatails() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data
        let related = allProducts.filter((prod)=>{
          return prod.category.name === category
        })
        console.log(related)
          setDetails(related)
          setLoadding(false)
        })
      .catch(()=>{
          setLoadding(false)
      });
  }
  getProductDatails();
  }, [category]);

  return (
    <div className=""> 
    {
                ! isLoading ?      
            <div className="row gap-2 ">{product.map((productInfo)=>{
        return <div className="w-1/6 px-4">
          <Link to = {`product-detail/${productInfo.id}/${productInfo.category.name}`}>
                    <img className="w-full " src={productInfo.imageCover} alt={productInfo.title}/>
          <span className="block text-xl font.semibold text-green-500">
            {productInfo.category.name}
          </span>
          <span className="text-lg font-light text-gray-700">
            {productInfo.title.split(' ').slice(0,3).join(' ')}
          </span>
          <div className="flex justify-between my-3 ">
            <span>{productInfo.price}EGP</span>
            <span>{productInfo.ratingsQuantity}<i className="fas fa-star text-yellow-300"></i></span>
          </div>
          </Link>

        </div>
      })}
      </div> : <Loader/> 
    }
    </div>
  );
}
