import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getYtVideosApi } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    let getRes = getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(getYtVideosApi);
    const json = await data.json();
    setVideoList(json.items);
  };

  return (
    <div className="flex flex-wrap p-2">
      {videoList.map((item) => {
        return (
          <Link to={`/watch?v=${item.id}`} key={item.id}>
            <VideoCard info={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
