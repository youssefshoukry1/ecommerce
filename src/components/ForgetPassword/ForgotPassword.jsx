import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {Helmet} from "react-helmet";

export default function ForgotPassword() {
  let navigate = useNavigate()

  let validationSchema = Yup.object({
    email: Yup.string().required('email is required').email('enter availed email'),
  })

  let validationSchema2 = Yup.object({
    resetCode: Yup.string().required('email is required')
  })

  function sendCode(values) {
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values)
      .then(({ data }) => {
        console.log(data);
        document.querySelector('.verfiyCode').classList.remove('d-none');
        document.querySelector('.fogotPassword').classList.add('d-none');

      });
  }

  function getcode(values) {
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values)
      .then(({ data }) => {
        console.log(data);
        if (data.status == 'Success') {
          navigate('/resetPassword')
        }
      });
  }

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: sendCode
  });

  const formik2 = useFormik({
    initialValues: {
      resetCode: ''
    },
    validationSchema: validationSchema2,
    onSubmit: getcode
  });

  return (
    <>

      <Helmet>
                
                <title>ForgetPassword</title>
              
            </Helmet>

      <section className="bg-gray-50 dark:bg-gray-900 h-screen py-20 lg:py-0">
        <div className=" fogotPassword flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h2>
            <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
            </form>


          </div>
        </div>


        <div className="verfiyCode d-none flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Verification Code
            </h2>
            <form onSubmit={formik2.handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label htmlFor="resetCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Code</label>
                <input type="text" value={formik2.values.resetCode} onBlur={formik2.handleBlur} onChange={formik2.handleChange} name="resetCode" id="resetCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter verification code" required />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="newsletter2" aria-describedby="newsletter2" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter2" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verify Code</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
