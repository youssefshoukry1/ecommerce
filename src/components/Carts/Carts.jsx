import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import Loader from '../loader/loader';
import {Helmet} from "react-helmet";
export default function Carts() {
  let { getProductToCart, updateProductInCart, removeProductInCart } = useContext(CartContext)

  const getProducts = React.useCallback(async () => {
    const { data } = await getProductToCart();
    return data.data;
  }, [getProductToCart]);
  const { data: product, isLoading, refetch } = useQuery({
    queryKey: ['cartProducts'],
    queryFn: getProducts,
    staleTime: 4000,
  });
  async function updateProducts(id, countNumber) {
    await updateProductInCart(id, countNumber);
    refetch();
  }
  async function deleteProducts(id) {
    await removeProductInCart(id);
    refetch();
  }

  // الجزء المحدد من الكود مسؤول عن جلب بيانات عربة التسوق وإدارتها وتحديثها باستخدام مكتبة React Query مع دوال من الـ Context الخاص بعربة التسوق.

  // في البداية، يتم تعريف دالة getProducts باستخدام useCallback حتى تظل ثابتة ولا تتغير إلا إذا تغيرت دالة getProductToCart. هذه الدالة تستدعي getProductToCart (التي غالبًا تجلب بيانات العربة من السيرفر)، ثم ترجع البيانات المطلوبة فقط.

  // بعد ذلك، يتم استخدام useQuery من مكتبة React Query لجلب بيانات العربة وتخزينها في متغير product، مع متغيرات أخرى مثل isLoading لمعرفة حالة التحميل، وrefetch لإعادة جلب البيانات عند الحاجة. يتم تحديد queryKey باسم ['cartProducts'] حتى يتم تمييز هذا الاستعلام، وqueryFn هي الدالة getProducts، وstaleTime يحدد مدة اعتبار البيانات حديثة قبل إعادة جلبها.

  // ثم هناك دالتان: updateProducts وdeleteProducts. الدالة الأولى تقوم بتحديث كمية منتج معين في العربة عن طريق استدعاء updateProductInCart ثم إعادة جلب البيانات باستخدام refetch. الدالة الثانية تحذف منتجًا من العربة بنفس الطريقة، حيث تستدعي removeProductInCart ثم refetch. بهذه الطريقة، تظل واجهة المستخدم متزامنة دائمًا مع البيانات الحقيقية الموجودة في السيرفر بعد أي تعديل أو حذف.

  //   const[product, setProducts] =  useState([])

  //     let { data = product, isLoading } = useQuery({
  //     queryKey: ['cartProducts'],
  //     queryFn: getProducts,
  //     // refetchInterval:3000,
  //     // refetchIntervalInBackground:true
  //     staleTime: 4000,
  //     select: ((hambozo) => {
  //       return hambozo?.data
  //     })      // بدل مانزل تحت واعمل  data?.data.map(()=>{}) بدل مانزل تحت واعم
  //   })

  //   let {getProductToCart, updateProductInCart, removeProductInCart} = useContext(CartContext)

  // async function getProducts(){
  // let {data} = await getProductToCart()
  // return data

  // }

  // async function updateProducts(id, countNumber){
  // let {data} = await updateProductInCart(id, countNumber)
  // return data.data

  // }

  // async function deleteProducts(id){
  // let {data} = await removeProductInCart(id)
  // return data


  // }

  // useEffect(()=>{
  //   getProducts()
  // },[])

  if (isLoading) {
    return <Loader />
  } else {
    return (
<>

      <Helmet>
                
                <title>Cart</title>
              
            </Helmet>

<<<<<<< HEAD
      <div className='lg:w-8/12 w-5/6 mx-auto my-10 '>
=======
      <div className='w-8/12 mx-auto my-10 '>
>>>>>>> c8c94863642eb5b670cd8db87cb32cf09da96471
        {product?.products.length > 0 ? (
          <>
            <div classname="fkex flex-wrap justify-around  rounded-3xl">
              <div className=" card m-auto p-5 w-full max-w-sm  border-gray-200 rounded-lg shadow-xl h-48">
                <div className="px-5 pb-5">
                  <h1 className="  text-focus-in text-center text-4xl text-main text-sky-800">Shoping Cart</h1>
                  <p className="  text-focus-in text-center text-2xl my-6 flex justify-center  ">Tota Price: <span className="text-white mx-3">{product?.totalCartPrice ?? 0} </span></p><p className="  text-sm text-black flex justify-end -my-16 mx-10 ">EGP</p><p />
                  <div className=" items-center justify-between my-14">
                    <Link to={'/checkout/' + product?._id} className=" blink-1 checkbtn  absolute my-9 text-white rounded-lg text-base px-7 py-3.5 text-center  hover:bg-sky-100 duration-300  ">check out</Link>
                  </div>
                </div>
              </div>
            </div>


<<<<<<< HEAD
            <div className=" w relative overflow-x-auto shadow-md sm:rounded-lg my-10 rounded-3xl border-4 border-cyan-900  ">
=======
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10 rounded-3xl border-4 border-cyan-900 ">
>>>>>>> c8c94863642eb5b670cd8db87cb32cf09da96471
              <table className="w-full mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-3xl border-4 border-cyan-900 ">
                <thead className="text-xs text-gray-700 uppercase bg-cyan-900 dark:text-gray-400 rounded-3xl ">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span>Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-16 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    product?.products.map((item) => {
                      return (
                        <tr className=" bg-cyan-700 rounded-3xl border-4 border-cyan-900">
                          <td className="p-4">
                            <img src={item?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full rounded-3xl" alt="Apple Watch" />
                          </td>
                          <td className=" text-xl   font-semibold text-gray-900 dark:text-white">
                            {item?.product?.title}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <button onClick={() => { updateProducts(item?.product?._id, item.count > 1 ? item.count - 1 : 1) }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                </svg>
                              </button>
                              <div>
                                <input type="number" id="first_product" className="bg-gray-50 w-14 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={item?.count} required />
                              </div>
                              <button onClick={() => { updateProducts(item?.product?._id, item.count + 1) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            <p className='text-2xl flex '>{item?.price}  <p className='  flex text-sm mx-2'>EGP</p> </p>
                          </td>
                          <td className="px-6 py-4">
                            <button onClick={() => { deleteProducts(item?.product?.id) }} className=" removebtn  blink-1  font-medium text-red-700 text-xl hover:text-rose-700  hover:text-2xl bg-cyan-600 hover:bg-red-300 duration-300 rounded-3xl p-3">Remove</button> 
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </>
        ) : <h1 className=' text-pop-up-top text-focus-in text-7xl text-sky-600 font-medium flex items-center justify-center '>There Is No Data</h1>
        }
      </div>
</>
    )
  }
  }
