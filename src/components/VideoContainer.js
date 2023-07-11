import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getYtVideosApi } from "../utils/constants";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    let getRes = getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(getYtVideosApi);
    const json = await data.json();
    setVideoList(json.items)
    console.log(json.items);
  };

  return (
    <div className="flex flex-wrap p-2">
    {videoList.map((item) => {
      return <VideoCard info={item} key={item.id} />;
    })}
    </div>
  );
};

export default VideoContainer;
