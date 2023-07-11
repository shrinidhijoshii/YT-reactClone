import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="ml-16">
      <ButtonList />
      <Outlet/>
    </div>
  );
};

export default MainContainer;
