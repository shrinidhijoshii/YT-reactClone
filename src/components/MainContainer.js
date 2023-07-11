import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="ml-16">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
