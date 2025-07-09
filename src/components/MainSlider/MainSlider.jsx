import React from 'react'
import Slider from "react-slick";
import img1 from '../../assets/img/niche-service-marketplace-concept-illustration/female_shopping_from_phone.jpg'
import img2 from '../../assets/img/niche-service-marketplace-concept-illustration/6155752.jpg'
import img3 from '../../assets/img//niche-service-marketplace-concept-illustration/Big_phone_with_cart.jpg'
import img4 from '../../assets/img//niche-service-marketplace-concept-illustration/1725.jpg'


export default function MainSlider() {

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };



  return (
    <div className='conteiner my-5'>
<div className="row">
  <div className='w-1/5'>
  <img src={img1} className='w-full  h-full secondImg object-cover' />
  <img src={img2} className='w-full h-full secondImg object-cover' />
  </div>
  <div className='w-2/3'>
    <Slider {...settings}>
      <img src={img3} className='w-full mainImg object-cover'  />
      <img src={img4} className='w-full mainImg object-cover' />
    </Slider>
  </div>
</div>
    </div>
  )
}
