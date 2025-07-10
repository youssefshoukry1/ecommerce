import React from 'react'
import img from '../../assets/img/Snapchat-2125464010.jpg'
export default function Footer() {
  return (


  <div className='footer flex justify-between items-center bg-slate-700 shadow-sm lg:p-5 p-3 w-full '>
    <div className=' flex relative '> 
          <h1 className='text-white flex text-end lg:my-3 text-xs'>
      develope by: <span className='text-cyan-400 lg:mx-2 lg:text-md text-xs'>Youssef Shoukry</span>
    </h1>
            <span className='flex justify-start lg:h-16 lg:w-20 rounded-3xl overflow-hidden'>
  <img src={img} className='lg:h-full w-8 h-8 mx-2 border-2 border-cyan-600 lg:w-full rounded-full object-cover hover:scale-125 duration-300 cursor-pointer' />
  <h1 className='flex absolute lg:my-10 my-5 -mx-36 lg:text-base text-white text-xs '>Phone: <p className=' lg:text-sm text-xs text-cyan-400 lg:my-1 mx-2  hover:scale-125 duration-150 cursor-pointer'>01204470794</p></h1>
</span> 
    </div>
    <ul className='flex lg:gap-10 gap-3 items-center justify-center'>
              <i className="fa-brands fa-facebook text-blue-600 lg:text-2xl hover:scale-125 duration-300 cursor-pointer"><a href=""></a></i>
      <i className="fa-brands fa-tiktok lg:text-2xl hover:scale-125 duration-300 cursor-pointer"><a href=""></a></i>
          <i className='fab  fa-youtube lg:text-2xl text-red-600 hover:scale-125 duration-300 cursor-pointer'></i>
          <i className="fa-brands fa-square-instagram bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 lg:text-2xl rounded-md hover:scale-125 duration-300 cursor-pointer"></i>
    </ul>

  </div>
  
  )
}
