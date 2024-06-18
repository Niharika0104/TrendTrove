import { React, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { MdKeyboardArrowLeft as LeftArrowIcon } from "react-icons/md";
import { IoMdSearch as SearchIcon } from "react-icons/io";
import { MdKeyboardArrowRight as RightArrowIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Helper/Context';

function Navbar({query,onSearch}) {
    const [IsMobileView,setIsMobileView]=useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [isShowSearch, setIsShowSearch] = useState(false);


  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
  };

  const toggleMobileMenu = () => {
    setIsMobileView(!IsMobileView);
  };

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const naviconStyle = (icon) => ({
    fill: hoveredIcon === icon ? "#8BBCF3" : "none",
    transform: hoveredIcon === icon ? "scale(1.07)" : "scale(1)",
    transition: "transform 0.2s, fill 0.2s",
  });
  
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

  useEffect(() => {
    if (document) {
      document.body.style.overflow =
        IsMobileView || isShowSearch ? "hidden" : "auto";
    }
  }, [IsMobileView, isShowSearch]);
  
  

  return (
    <div>
      <nav className="bg-darkblue p-3 fixed w-full top-0 z-50 shadow-sm">
        <div className=" container mx-auto flex justify-between items-center md:flex md:justify-between md:items-center">
          <div className="text-white font-bold hidden md:block ">
            <Link to="https://trend-trove-client-side.vercel.app/">
              <img src="site-logo.png" className="h-10" alt="Company Logo" />
            </Link>
          </div>

          <div class="hidden md:block ">
            <Link to="/" className="text-white hover:text-blue-300 px-3">
              {" "}
              Home
            </Link>
            <Link to="/women" className="text-white hover:text-blue-300 px-3">
              {" "}
              Women
            </Link>
            <Link to="/men" className="text-white hover:text-blue-300 px-3">
              {" "}
              Men
            </Link>
            <Link to="/kids" className="text-white hover:text-blue-300 px-3">
              {" "}
              Kids
            </Link>
          </div>
          <div className="md:hidden  pr-8">
            <div className="flex justify-start gap-4 items-center">
              {!IsMobileView && (
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-300  hover:text-white focus:outline-none"
                >
                  <svg
                    className="h-12 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}

              <span
                className="cursor-pointer"
                onMouseEnter={() => handleMouseEnter("icon3")}
                onMouseLeave={handleMouseLeave}
                style={naviconStyle("icon3")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={hoveredIcon === "icon3" ? "#fff" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-6 h-6 navicon md:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-white font-bold  md:hidden ">
            <Link to="https://trend-trove-client-side.vercel.app/">
              <img src="site-logo.png" className="h-10" alt="Company Logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <SearchBar />
          </div>

          <div className="my-5 flex gap-4 ">
            <div className="md:hidden ">
              <SearchIcon
                className="text-white text-2xl cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
            <span
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter("icon1")}
              onMouseLeave={handleMouseLeave}
              style={naviconStyle("icon1")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={hoveredIcon === "icon1" ? "#fff" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 navicon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </span>

            <span
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter("icon2")}
              onMouseLeave={handleMouseLeave}
              style={naviconStyle("icon2")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={hoveredIcon === "icon2" ? "#fff" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 navicon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>

            <span
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter("icon3")}
              onMouseLeave={handleMouseLeave}
              style={naviconStyle("icon3")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={hoveredIcon === "icon3" ? "#fff" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 navicon hidden md:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-full bg-white bg-opacity-100 z-50 transform transition-transform duration-500 ${
            isShowSearch ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex !important bg-slate-500  p-2 ">
            <LeftArrowIcon className="text-4xl mr-3 " onClick={toggleSearch} />
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 focus:outline-none rounded-lg border border-slate-300"
            ></input>
          </div>

        </div>

        {/* Mobile menu */}

        <div
          className={`md:hidden fixed top-0 right-0 h-full w-full bg-white bg-opacity-100 z-50 transform transition-transform duration-500 
            ${IsMobileView ? "-translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none mr-2"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70711 6.70711C6.31658 7.09763 6.31658 7.7308 6.70711 8.12132L11.5858 13L6.70711 17.8787C6.31658 18.2692 6.31658 18.9024 6.70711 19.2929C7.09763 19.6834 7.7308 19.6834 8.12132 19.2929L13 14.4142L17.8787 19.2929C18.2692 19.6834 18.9024 19.6834 19.2929 19.2929C19.6834 18.9024 19.6834 18.2692 19.2929 17.8787L14.4142 13L19.2929 8.12132C19.6834 7.7308 19.6834 7.09763 19.2929 6.70711C18.9024 6.31658 18.2692 6.31658 17.8787 6.70711L13 11.5858L8.12132 6.70711C7.7308 6.31658 7.09763 6.31658 6.70711 6.70711Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 text-xl px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center font-semibold border-b ">
            <Link to="/men">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">Men</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>

            <Link to="/women">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">Women</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>

            <Link to="/kids">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">Kids</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>
          </div>

          <div className="mt-6 text-xl px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center  ">
            <Link to="/profile">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">My Profile</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>

            <Link to="/about">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">About</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>

            <Link to="/services">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">Services</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>

            <Link to="/contact">
              <div className="flex items-center justify-between pl-4 pr-8">
                <p className="block px-3 py-2">Contact</p>
                <RightArrowIcon className="text-2xl " />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
