import React, { useEffect, useState } from "react";

const WatchPage = () => {
  // const [videoDetails, setVideoDetails] = useState([]);
  // useEffect(async () => {
  //   const getRes = await fetch();
  //   const json = getRes.json();
  // }, []);

  return (
    <div className="grid grid-flow-col">
      <div className="col-span-11">
        <div>video container</div>
        <div>subscribe</div>
        <div>comments</div>
      </div>
      <div className="col-span-1">recomendations</div>
    </div>
  );
};

export default WatchPage;
