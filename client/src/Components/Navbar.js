import {React,useState} from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
function Navbar() {
    const [IsMobileView,setIsMobileView]=useState(false);
    const toggleMobileMenu=()=>{
        setIsMobileView(!IsMobileView);
    }
  return (
    <div>
     <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
  <div className="container mx-auto md:flex md:justify-between md:items-center ">
    <div className="text-white font-bold hidden md:block">
      <img src="site-logo.png" className='h-10'/>
    </div>
   
    <div class="hidden md:block ">
    
      <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">  Home
      </Link>
      <Link to="/men" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            Men
          </Link>
          <Link to="/women" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            Women
          </Link>
          <Link to="/kids" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
            Kids
          </Link>
      
    </div>
    <SearchBar/>
    <div className="md:hidden ">
     <div className='flex justify-start gap-4'>
   {!IsMobileView && <button onClick={toggleMobileMenu} className="text-gray-300  hover:text-white focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
