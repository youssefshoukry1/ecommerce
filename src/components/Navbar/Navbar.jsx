import { useContext } from 'react'
import img from '../../assets/img/fresh.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default function Navbar() {
  let navigate = useNavigate()
  let {isLogin , setLogin} = useContext(UserContext)

  function logOut(){
    localStorage.removeItem('userToken');
    setLogin(null)
    navigate('/login')
  }


  return (
    <nav className='bg-slate-300 shadow-sm p-4'>
      <div className='flex justify-between lg:items-center flex-col lg:flex-row'>
              <div className='logo flex  flex-col flex-between lg:flex-row lg:items-center '>
        <img src={img} width={80} alt='fresh'/>
        {isLogin?
        
              <ul className='flex flex-col lg:flex-row'> 
          <li className='px-3 py-2'><NavLink to={''} >Home</NavLink></li>
          <li className='px-3 py-2'><NavLink to={'Brands'} >Brands</NavLink></li>
          <li className='px-3 py-2'><NavLink to={'cart'} >Cart</NavLink></li>
        </ul>:null
      }
    
      </div>
      <div className='social'>
        <ul className='flex flex-col lg:flex-row items-center'>

          {!isLogin? 
        <>
        <li className='px-2 py-2'><NavLink to={'register'} >Register</NavLink></li>
        <li className='px-2 py-2'><NavLink to={'login'} >Login</NavLink></li>
        <i className='fab px-2 fa-facebook ' ></i>
          <i className='fab px-2 fa-youtube'></i>
          <i className='fab px-2 fa-instagram'></i>
        </> : 
          <li className='px-2 py-2 cursor-pointer'><span onClick={()=> {logOut()}}>Logout</span></li>
        }

        
        <li>

        </li>
        </ul>

      </div>
      </div>
    </nav>
  )
}
