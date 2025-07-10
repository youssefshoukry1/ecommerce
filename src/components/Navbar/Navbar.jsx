import { useContext, useEffect } from 'react'
import img from '../../assets/img/niche-service-marketplace-concept-illustration//shopping-cart.png'
import img2 from '../../assets/img/niche-service-marketplace-concept-illustration/shopping-cart (1).png'
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'

export default function Navbar() {
  let navigate = useNavigate()
  let { isLogin, setLogin } = useContext(UserContext)
  let { cartNumber, getProductToCart } = useContext(CartContext)

  async function getUserData() {
    await getProductToCart()
  }

  useEffect(() => {
    getUserData()
  }, [])

  function logOut() {
    localStorage.removeItem('userToken');
    setLogin(null)
    navigate('/login')
  }


  return (
<<<<<<< HEAD
<nav className="flex bg-slate-700 shadow-lg p-4 h-16 md:h-20 lg:h-24">
  <div className="flex justify-between items-center w-full">
    
    {/* الشمال: لوجو + روابط Home و Cart */}
    <div className="flex items-center gap-4">
      <img
        src={img}
        alt="fresh-icon"
        className="w-10 md:w-14 lg:w-20"
      />

      {isLogin && (
        <ul className="flex items-center gap-4 md:gap-8 list-none">
          <li className="text-white hover:text-cyan-400 transition-all lg:text-2xl md:text-xl text-sm">
            <NavLink to={''}>Home</NavLink>
          </li>
          <li className="text-white hover:text-cyan-400 transition-all lg:text-2xl md:text-xl text-sm">
            <NavLink to={'cart'}>Cart</NavLink>
          </li>
          <div className="relative flex items-center gap-1 -mx-3 lg:-mx-7">
            <img src={img2} className="h-4 md:h-6 lg:h-8 " />
            <p className="text-yellow-400 text-xs md:text-base lg:text-xl">{cartNumber}</p>
          </div>
        </ul>
      )}
    </div>

    {/* اليمين: Logout أو Login/Register */}
    <div className="flex items-center gap-4">
      {isLogin ? (
        <li
          className="list-none cursor-pointer text-red-500 hover:text-white transition-all text-sm md:text-xl lg:text-2xl"
          onClick={logOut}
        >
          Logout
        </li>
      ) : (
        <ul className="flex items-center gap-4 list-none">
          <li className="text-cyan-400 hover:text-white transition-all text-sm md:text-xl lg:text-2xl">
            <NavLink to={'register'}>Register</NavLink>
          </li>
          <li className="text-cyan-400 hover:text-white transition-all text-sm md:text-xl lg:text-2xl">
            <NavLink to={'login'}>Login</NavLink>
          </li>
        </ul>
      )}
    </div>

  </div>
</nav>
=======
    <nav className='bg-slate-700 shadow-lg p-4 '>
      <div className='flex justify-between lg:items-center flex-col lg:flex-row'>
        <div className='flex   flex-col flex-between lg:flex-row lg:items-center px-10 '>
          <img src={img} width={70} alt='fresh-icon' className='-mx-3 absolute' />
          {isLogin ?

            <ul className='flex flex-col lg:flex-row mx-16   '>
              <li className=' text-focus-in px-3 py-2 text-3xl hover:text-cyan-400 transition-all text-white mx-10 hover:scale-110 duration-300'><NavLink to={''} >Home</NavLink></li>
              <li className=' text-focus-in px-3 py-2 text-3xl hover:text-cyan-400 transition-all  text-white -mx-8 hover:scale-110 duration-300'><NavLink to={'cart'} >Cart</NavLink></li>
              <img src={img2} className="   my-3 mx-6 h-8" />
              <p className='text-xl text-yellow-400 -mx-4 -my-1'>{cartNumber}</p>
            </ul> : null
          }

        </div>
        <div className='social px-10'>
          <ul className='flex flex-col lg:flex-row items-center mx-4 gap-3 '>
            {!isLogin ?
              <>
                <li className=' text-focus-in px-3 py-2 text-3xl hover:text-cyan-400 transition-all  text-cyan-600 hover:scale-110 duration-300'><NavLink to={'register'} >Register</NavLink></li>
                <li className=' text-focus-in px-3 py-2 text-3xl hover:text-cyan-400 transition-all  text-cyan-600 hover:scale-110 duration-300'><NavLink to={'login'} >Login</NavLink></li>
              </> :
              <li className=' text-focus-in py-2 text-3xl cursor-pointer hover:text-white transition-all  text-red-600 hover:scale-110 duration-300'><span onClick={() => { logOut() }}>Logout</span></li>
            }
          </ul>
        </div>
      </div>
    </nav>
>>>>>>> c8c94863642eb5b670cd8db87cb32cf09da96471
  )
}
