import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

export default function Loader() {
  return (
    
    <div className="flex justify-center items-center h-screen">
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#0284c7"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  )
}
