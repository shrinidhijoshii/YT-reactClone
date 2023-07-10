import React from 'react'

const Sidebar = () => {
  return (
    <div className="shadow-xl w-48 p-5">
      <div className="m-3">
        <h1 className="">Home</h1>
        <h1 className="">Shorts</h1>
        <h1 className="">Videos</h1>
        <h1 className="">Live</h1>
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
        <h1 className="font-bold">Explore</h1>
        <ul>Trending</ul>
        <ul>Music</ul>
        <ul>News</ul>
        <ul>Sports</ul>
      </div>
    </div>
  );
}

export default Sidebar