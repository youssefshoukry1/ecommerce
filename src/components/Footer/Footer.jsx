import React from 'react'
import img from '../../assets/img/Snapchat-2125464010.jpg'
export default function Footer() {
  return (


  <div className='footer flex justify-between items-center bg-slate-700 shadow-sm p-5 '>
    <div className=' flex relative'> 
          <h1 className='text-white flex text-end my-3'>
      develope by: <span className='text-cyan-400 mx-2'>Youssef Shoukry</span>
    </h1>
            <span className='flex justify-start h-14 w-14 rounded-3xl overflow-hidden'>
  <img src={img} className='h-full  border-2 border-cyan-600 w-full rounded-full object-cover hover:scale-125 duration-300 cursor-pointer' />
  <h1 className='flex absolute my-10 -mx-52 text-base text-white '>Phone: <p className=' text-sm text-cyan-400 my-1 mx-2  hover:scale-125 duration-150 cursor-pointer'>01204470794</p></h1>
</span> 
    </div>
    <ul className='flex gap-10 items-center justify-center'>
              <a href="#"><i className="fa-brands fa-facebook text-blue-600 text-2xl hover:scale-125 duration-300 cursor-pointer"></i></a>
      <a href="#"><i className="fa-brands fa-tiktok text-2xl hover:scale-125 duration-300 cursor-pointer"></i></a>
          <i className='fab px-2 fa-youtube text-2xl text-red-600 hover:scale-125 duration-300 cursor-pointer'></i>
          <i className="fa-brands fa-square-instagram bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-3xl rounded-md hover:scale-125 duration-300 cursor-pointer"></i>
    </ul>

  </div>
  
  )
}
