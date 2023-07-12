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
          <h1 className="py-3">
            Channel Name
          </h1>
          <img
            className="h-16 w-24 cursor-pointer mx-4"
            src="data:image/png;base64,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"
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
