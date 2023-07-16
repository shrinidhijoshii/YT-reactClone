import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { searchApi } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { Mic } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsDiv, setSuggestionsDiv] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // do api call after 200ms
    // before 200ms , if re-render happens because of new key stroke reject the api call or dont do api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        doSearchApiCall();
      }
    }, 200);

    // clear the timer before rendering next cycle or before re-render (un-mount cycle)
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const doSearchApiCall = async () => {
    const data = await fetch(searchApi + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2 my-2">
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
      <div className="col-span-9 flex">
        <input
          className="border border-gray-500 p-2 w-1/2 rounded-l-full h-10 my-2"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setSuggestionsDiv(true)}
          onBlur={() => setSuggestionsDiv(false)}
        />
        <button className="p-2 border border-gray-500 rounded-r-full bg-gray-100 w-14 h-10 my-2">
          🔍
        </button>
        {suggestionsDiv && suggestions.length > 0 ? (
          <div className="absolute bg-white p-3 my-12 border border-gray-300 rounded-lg shadow-lg lg:w-[35%] md:w-[30%] sm:w-max">
            <ul>
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-gray-100 cursor-pointer py-1"
                  >
                    {" "}
                    🔍 {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
        <Mic className="border my-3 p-1 mx-2 h-8 w-8 border-gray-500 rounded-full bg-gray-100 cursor-pointer" />
      </div>
      <div className="col-span-1">
        <img
          className="h-10 my-3"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
