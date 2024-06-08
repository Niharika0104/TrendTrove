/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import LinkItem from "./LinkItem";
import SearchBar from "./SearchBar";

import { Heart, ShoppingBag, UserRound } from "lucide-react";
function Navbar() {
  // const [IsMobileView, setIsMobileView] = useState(false);
  return (
    <header className="z-50 w-full">
      <div className="flex h-full bg-darkblue px-14 text-white items-center justify-between rounded-none pt-2 md:py-5 backdrop-blur-lg">
        <div className="w-full items-center flex justify-between container">
          <img src="site-logo.png" className="h-12" />
          <SearchBar />
          <div className="flex gap-5 cursor">
            <ShoppingBag />
            <UserRound />
            <Heart />
          </div>
        </div>
      </div>
      <div className="flex px-14 py-5 justify-between border border-b-blue-gray-700">
        <div className="items-center gap-2 flex">
          <LinkItem text="Home" href="/" />
          <LinkItem href="/about" text="Women" />
          <LinkItem href="/about" text="Men" />
          <LinkItem href="/about" text="Kids" />
        </div>
        <div className="items-center gap-2 flex bg-[#f6f6f6]">
          <LinkItem text="Login" href="/" />
          <LinkItem text="Create Account" href="/sign-up" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
