import {React,useContext,useState} from 'react'
import SearchBar from './SearchBar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from '../Helper/Context';
function Navbar() {
    const [IsMobileView,setIsMobileView]=useState(false);
    const toggleMobileMenu=()=>{
        setIsMobileView(!IsMobileView);
    }

    // const { loggedIn, user ,setLoggedIn,setUser} = useContext(UserContext);
    // console.log(loggedIn);
    // console.log("user data in navbar",user);
    
    const {user ,setLoggedIn,setUser,loggedIn} =useContext(UserContext);
    const navigate = useNavigate();

    console.log("user data in navbar ", user);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
            setLoggedIn(false);
            setUser(null);
            navigate('/'); // Redirect to the home page or login page
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

 
    const handleMouseEnter = (icon) => {
      setHoveredIcon(icon);
    };
  
    const handleMouseLeave = () => {
      setHoveredIcon(null);
    };
  
    const naviconStyle = (icon) => ({
      fill: hoveredIcon === icon ? '#8BBCF3' : 'none',
      transform: hoveredIcon === icon ? 'scale(1.07)' : 'scale(1)',
      transition: 'transform 0.2s, fill 0.2s'
    });


  
  return (
    <div>
     <nav className="bg-darkblue p-3 fixed w-full top-0 z-50 shadow-sm">
  <div className="container mx-auto md:flex md:justify-between md:items-center">
    <div className="text-white font-bold hidden md:block">
      <Link to="https://trend-trove-client-side.vercel.app/">
        <img src="site-logo.png" className='h-10' alt="Company Logo" />
      </Link>
    </div>
   
    <div class="hidden md:block ">
    
      <Link to="/" className="text-white hover:text-blue-300 px-3">  Home
      </Link>
      <Link to="/women" className="text-white hover:text-blue-300 px-3">  Women
      </Link>
      <Link to="/men" className="text-white hover:text-blue-300 px-3">  Men
      </Link>
      <Link to="/kids" className="text-white hover:text-blue-300 px-3">  Kids
      </Link>
    
      
    </div>

    <SearchBar />
    <div className='m-5 flex gap-4 items-center' >
      <span className='cursor-pointer'>
     
     
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</span>
<span  className='cursor-pointer'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</span>
<span  className='cursor-pointer'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</span>
{user && (
              <div className=' text-white border px-3 py-1'>
                {user.name}
              </div>
           )}
               <button onClick={handleLogout} className="text-white border px-3 py-1 hover:text-blue-300">
                Logout
              </button>
          
</div>



 
    <div className="md:hidden ">
     <div className='flex justify-start gap-4'>
   {!IsMobileView && <button onClick={toggleMobileMenu} className="text-gray-300  hover:text-white focus:outline-none">
            <svg className="h-3 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>}
          <span className="text-white font-bold md:hidden px-5 sticky right-3 ">
      Logo
    </span>
    </div>
        </div>
       
      </div>
      {/* Mobile menu */}
      {IsMobileView && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-start p-4">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.70711 6.70711C6.31658 7.09763 6.31658 7.7308 6.70711 8.12132L11.5858 13L6.70711 17.8787C6.31658 18.2692 6.31658 18.9024 6.70711 19.2929C7.09763 19.6834 7.7308 19.6834 8.12132 19.2929L13 14.4142L17.8787 19.2929C18.2692 19.6834 18.9024 19.6834 19.2929 19.2929C19.6834 18.9024 19.6834 18.2692 19.2929 17.8787L14.4142 13L19.2929 8.12132C19.6834 7.7308 19.6834 7.09763 19.2929 6.70711C18.9024 6.31658 18.2692 6.31658 17.8787 6.70711L13 11.5858L8.12132 6.70711C7.7308 6.31658 7.09763 6.31658 6.70711 6.70711Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">About</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Services</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
       
</nav>
    </div>
  )
}

export default Navbar
