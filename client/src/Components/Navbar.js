import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileView(!isMobileView);
  };

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const naviconStyle = (icon) => ({
    fill: hoveredIcon === icon? '#8BBCF3' : 'none',
    transform: hoveredIcon === icon? 'scale(1.07)' : 'scale(1)',
    transition: 'transform 0.2s, fill 0.2s'
  });

  return (
    <div>
      <nav className="bg-darkblue py-5 fixed w-full top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Updated Link to navigate to the homepage */}
            <Link to="/" className="text-white font-bold ml-20">
              <img src="site-logo.png" className="h-10 cursor-pointer" alt="Company Logo" onClick={() => window.location.href='https://trend-trove-client-side.vercel.app/'}/>
            </Link>
            <div className="flex ml-10">
              <Link to="/" className="text-white hover:text-blue-300 px-3">Home</Link>
              <Link to="/women" className="text-white hover:text-blue-300 px-3">Women</Link>
              <Link to="/men" className="text-white hover:text-blue-300 px-3">Men</Link>
              <Link to="/kids" className="text-white hover:text-blue-300 px-3">Kids</Link>
            </div>
          </div>
          <div className="flex items-center">
            <SearchBar />
            <div className="ml-20 flex gap-4">
            <span className="cursor-pointer" onMouseEnter={() => handleMouseEnter('icon1')} onMouseLeave={handleMouseLeave} style={{ marginRight: '20px',...naviconStyle('icon1') }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={hoveredIcon === 'icon1' ? '#fff' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6 navicon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </span>
              <span className="cursor-pointer" onMouseEnter={() => handleMouseEnter('icon2')} onMouseLeave={handleMouseLeave} style={{ marginRight: '20px',...naviconStyle('icon2') }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={hoveredIcon === 'icon2' ? '#fff' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6 navicon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </span>
              <span className="cursor-pointer" onMouseEnter={() => handleMouseEnter('icon3')} onMouseLeave={handleMouseLeave} style={{ marginRight: '40px',...naviconStyle('icon3') }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={hoveredIcon === 'icon3' ? '#fff' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6 navicon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </span>
            </div>
      
          </div>
        </div>
        {isMobileView && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.70711 6.70711C6.31658 7.09763 6.31658 7.7308 6.70711 8.12132L11.5858 13L6.70711 17.8787C6.31658 18.2692 6.31658 18.9024 6.70711 19.2929C7.09763 19.6834 7.7308 19.6834 8.12132 19.2929L13 14.4142L17.8787 19.2929C18.2692 19.6834 18.9024 19.6834 19.2929 19.2929C19.6834 18.9024 19.6834 18.2692 17.8787 19.2929L14.4142 13L19.2929 8.12132C19.6834 7.7308 19.6834 7.09763 19.2929 6.70711C18.9024 6.31658 18.2692 6.31658 17.8787 6.70711L13 11.5858L8.12132 6.70711C7.7308 6.31658 7.09763 6.31658 6.70711 6.70711Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2">Home</Link>
              <Link to="/women" className="text-gray-300 hover:text-white block px-3 py-2">Women</Link>
              <Link to="/men" className="text-gray-300 hover:text-white block px-3 py-2">Men</Link>
              <Link to="/kids" className="text-gray-300 hover:text-white block px-3 py-2">Kids</Link>
              <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;





