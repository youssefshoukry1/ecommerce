import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
 import * as Yup from 'yup';

export default function Register() {
let {setLogin}=useContext(UserContext)
const[apiError,setError] = useState('');
const[isLoading ,setLoading] = useState(false)
        let navigate = useNavigate()

        function handleRegister(formsData) {
            setLoading(true)

        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formsData)
        .then((response)=>{console.log('success',response)
            
            if(response.data.message == 'success'){
                localStorage.setItem('userToken',response.data.token)
                setLogin(response.data.token)
            setLoading(false)          
            navigate('/login')
            
        }
        })
        .catch((error)=>{setError(error.response.data.message)
            setLoading(false)})
        
    }

let validationSchema = Yup.object({
    name:Yup.string().required('name is required').min(3,'min lenght is 3').max(10,'max lenght is 10'),
    email:Yup.string().required('email is required').email('enter availed email'),
    phone:Yup.string().required('phone is required').matches(/^01[1250][0-9]{8}$/),
    password:Yup.string().required('passowrd is required').matches(/^[A-Z][a-z0-9]{5,7}$/,'enter availed passowrd'),
    rePassword:Yup.string().required('confirm password is required').oneOf([Yup.ref('password')]),

});



    let formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
    },
        validationSchema:validationSchema
        ,
    onSubmit:handleRegister
    });
    




    return (
    
    <>
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
            
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-sky-400">
                Register Now
            </h2>



                                        {apiError?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{apiError}</span> 
                            </div>:null
                            }


            <form onSubmit={formik.handleSubmit} className="space-y-6" method="POST">

                <div>
                    <label for="usName" className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' id='usName' type="text" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {formik.errors.name && formik.touched.name?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.name}</span> 
                            </div>:null
                        }


                    </div>
                </div>

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
                    <label for="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword' id='confirm_password' type="password" autocomplete="confirm-password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />

                            {formik.errors.rePassword && formik.touched.rePassword?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.rePassword}</span> 
                            </div>:null
                            }
                    </div>
                </div>

                    <div>
                    <label for="Phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="mt-1">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' id='Phone' type="tel" autocomplete="confirm-password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />

                            {formik.errors.phone && formik.touched.phone?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{formik.errors.phone}</span> 
                            </div>:null
                            }
                    </div>
                </div>

                <div>
                    <button type="submit"  disable = {formik}
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                        {isLoading?<i className='fa fa-spinner fa-spiin mx-3'></i>:null}  Register
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
    )
}