import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { searchApi } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);
    // do api call after 200ms
    // before 200ms , if re-render happens because of new key stroke reject the api call or dont do api call
    const timer = setTimeout(() => doSearchApiCall(),200);
    
    // clear the timer before rendering next cycle or before re-render (un-mount cycle)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery]);

  const doSearchApiCall = async () => {
    const data = await fetch(searchApi + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  /*
  when key - i is pressed 
  - render the element
  - call useEffect() bcz I have added searchQuery as dependency var
  - start the timer => make api call after 200ms

  when key - p is pressed after i (ip)
  - destroy the previous element and unmount the timer which is defined in the useEffect
  - re-render the element
  - call useEffect() bcz I have added searchQuery as dependency var
  - start the timer => make api call after 200ms
   */

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-3 my-2">
      <div className="col-span-2 flex">
        <img
          className="h-9 my-2 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
        />
        <a href="/">
          <img
            className="h-14 mx-2"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-9">
        <input
          className="border border-gray-500 p-2 w-1/2 rounded-l-full"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="p-2 border border-gray-500 rounded-r-full bg-gray-100 w-14">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Header;
