import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
 import * as Yup from 'yup';
 import {Helmet} from "react-helmet";

export default function Login() {
    let {setLogin} = useContext(UserContext)
    const[apiError,setError] = useState('');
    const[isLoading,setLoading] = useState(false)
        let navigate = useNavigate()

        function handleRegister(formsData) {
            setLoading(true)

        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formsData)
        .then((response)=>{console.log('success',response)
            
            if(response.data.message == 'success'){
                localStorage.setItem('userToken',response?.data?.token)
                setLogin(response?.data?.token)
            setLoading(false)          
            navigate('/')
            
        }
        })
        .catch((error)=>{setError(error.response.data.message)
            setLoading(false)})
        
    }

let validationSchema = Yup.object({

    email:Yup.string().required('email is required').email('enter availed email'),
    password:Yup.string().required('passowrd is required').matches(/^[A-Z][a-z0-9]{5,7}$/,'enter availed passowrd'),
});



    let formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
        validationSchema:validationSchema
        ,
    onSubmit:handleRegister
    });
    




    return (

    
    <>

      <Helmet>
                
                <title>Login</title>
              
            </Helmet>


    <div className=" flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        
    <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
            
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-sky-400">
                Login Now
            </h2>



                                        {apiError?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{apiError}</span> 
                            </div>:null
                            }


            <form onSubmit={formik.handleSubmit} className="space-y-6" method="POST">


                <div>
                    <label for="ur-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' id='ur-email' type="email" autocomplete="email-address" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            
                            {formik.errors.email && formik.touched.email?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.email}</span> 
                            </div>:null
                            }

                    </div>
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password' id='password' type="password" autocomplete="password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />

                            {formik.errors.password && formik.touched.password?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.password}</span> 
                            </div>:null
                            }
                    </div>
                </div>


                <div>
                                <button className="transition-all duration-700 ease-in-out w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-sky-500 hover:to-blue-500 hover:scale-105 hover:shadow-xl hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="relative px-5 py-2.5 transition-all duration-700 ease-in rounded-md">
        <p className='text-xl'>Login</p> 
      </span>
      {isLoading ? <i className='fa fa-spinner fa-spin mx-3'></i> : null}  
    </button>
    <p><Link to={'/forgot-passord'} className=''>FotgetPassword ?</Link></p>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
    )
}
