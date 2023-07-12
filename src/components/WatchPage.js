import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, getYtVideosApi } from "../utils/constants";
import VideoCard from "./VideoCard";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoList, setVideoList] = useState([]);

  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  useEffect(() => {
    const videoDetails = giveApiResponse();
    const videoList = getRecomendedVideo();
  }, []);

  const getRecomendedVideo = async () => {
    const data = await fetch(getYtVideosApi);
    const json = await data.json();
    setVideoList(json.items);
    console.log(json.items);
  };

  const giveApiResponse = async () => {
    const getRes = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParam.get(
        "v"
      )}c&key=${GOOGLE_API_KEY}`
    );
    const json = await getRes.json();
    setVideoDetails(json);
    console.log(json);
  };

  return (
    <div className="grid grid-flow-col">
      <div className="col-span-11 m-2">
        <div className="">
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="py-3">
          video title
          {/* <div className="m-2">{videoDetails.items[0].snippet.title}</div> */}
        </h1>
        <div className="flex">
          <h1 className="py-10">Channel Name</h1>
          <img
            className="h-28 cursor-pointer mx-2"
            src="https://cdn.pixabay.com/photo/2021/03/18/10/21/subscribe-6104536_1280.png"
          ></img>
        </div>
        <div>
          <p>description</p>
        </div>
        <div className="py-4">
          <h1>Comments</h1>
        </div>
      </div>
      <div className="col-span-1 pl-4">
        {videoList.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCard info={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
