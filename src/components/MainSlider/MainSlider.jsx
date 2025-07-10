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
  <img src={img1} className='lg:w-full w-40 md:w-52 h-16 md:h-32 lg:h-48 lg:secondImg object-cover ' />
  <img src={img2} className='lg:w-full w-40 md:w-52 h-16 md:h-32 lg:h-48 lg:secondImg object-cover ' />
  </div>
  <div className='w-2/3'>
    <Slider {...settings}>
      <img src={img3} className='lg:w-full h-32 lg:h-96 w-40 md:w-52 md:h-64  lg:mainImg object-cover lg:object-coverr'  />
      <img src={img4} className='lg:w-full h-32 lg:h-96 w-40 md:w-52 md:h-64  lg:mainImg object-cover lg:object-cover' />
    </Slider> 
  </div>
</div>
    </div>
  )
}
