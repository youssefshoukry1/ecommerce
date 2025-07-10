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
  )
}
