import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import {Helmet} from "react-helmet";

export default function Checkout() {
let { cartid } = useParams()


        function handleRegister(formsData) {
          console.log(formsData)
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}`,{'shippingAddress':formsData},
          {
            headers: {
              token:localStorage.getItem('userToken')
            },
            params:{
<<<<<<< HEAD
              url:'http://localhost:5173/'
=======
              url:'https://ecommerce-ibhs.vercel.app/'
>>>>>>> c8c94863642eb5b670cd8db87cb32cf09da96471
            }
          }
        )
        .then((response)=>{console.log('checkout',response)
          location.href = response.data.session.url
        })
        .catch(()=>{})
        
    }







const validationSchema = Yup.object({
  details: Yup.string().required('Details is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^01[0125][0-9]{8}$/, 'Phone must be a valid Egyptian number'),
  city: Yup.string().required('City is required'),
});

let formik = useFormik({
    initialValues: {
        details: "",
        phone: "",
        city: "",
    },
    validationSchema: validationSchema,
    onSubmit:handleRegister
});
    




    return (
    <>

      <Helmet>
                
                <title>CheckOut</title>
              
            </Helmet>

    <div className=" flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        
    <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
            
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-sky-400">
                pay Now
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6" method="POST">

                <div>
                    <label htmlFor="ur-details" className="block text-sm font-medium text-gray-700">Details</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details} name='details' id='ur-details' type="text" autoComplete="details-address" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                                        {formik.errors.details && formik.touched.details?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.details}</span> 
                            </div>:null
                            }
                            
                    </div>
                </div>

                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">city</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} name='city' id='city' type="text" autoComplete="city" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                                {formik.errors.city && formik.touched.city?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.city}</span> 
                            </div>:null
                            }
                    </div>
                </div>

                                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' id='phone' type="text" autoComplete="phone" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                                        {formik.errors.phone && formik.touched.phone?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.phone}</span> 
                            </div>:null
                            }
                    </div>
                </div>

                <div>
                                <button className="transition-all duration-700 ease-in-out w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-sky-500 hover:to-blue-500 hover:scale-105 hover:shadow-xl hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="relative px-5 py-2.5 transition-all duration-700 ease-in rounded-md">
        <p className='text-xl'>pay now</p> 
      </span>
    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
    )
}
