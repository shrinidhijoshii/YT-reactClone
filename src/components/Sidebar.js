import React from "react";
import { useSelector } from "react-redux";
import appSlice from "../utils/appSlice";
import { Link } from "react-router-dom";
import {
  Home,
  Library,
  Radio,
  Youtube,
  Clock4,
  ThumbsUp,
  Flame,
  Music2,
  Newspaper,
  Trophy,
} from "lucide-react";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-xl w-48 p-5">
      <div className="m-3">
        <Link to="/">
          <div className="flex space-x-2">
            <Home />
            <h1 className="my-1">Home</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Library />
            <h1 className="my-1">Library</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Youtube />
            <h1 className="my-1">Videos</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Radio />
            <h1 className="my-1">Live</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Clock4 />
            <h1 className="my-1">Watch Later</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <ThumbsUp />
            <h1 className="my-1">Liked Videos</h1>
          </div>
        </Link>
      </div>
      <div className="m-3">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>Striver</ul>
        <ul>PowerfulJRE</ul>
        <ul>Tanmay Bhat</ul>
        <ul>T-series</ul>
        <ul>PraveenMohan</ul>
      </div>
      <div className="m-3">
        <h1 className="font-bold my-2">Explore</h1>
        <Link to="/">
          <div className="flex space-x-2">
            <Flame />
            <h1 className="my-1">Trending</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Music2 />
            <h1 className="my-1">Music</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Newspaper />
            <h1 className="my-1">News</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Trophy />
            <h1 className="my-1">Sports</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
