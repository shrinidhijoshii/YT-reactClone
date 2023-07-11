import React from 'react'

const VideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 w-72 cursor-pointer shadow-lg">
      <img src={info?.snippet?.thumbnails?.medium?.url} className='h-1/2 w-80 rounded-lg' ></img>
      <h1 className="font-semibold">{info?.snippet?.localized?.title}</h1>
      <small className="font-semibold">{info?.snippet?.channelTitle}</small>
      <div className="flex">
        <small>{info?.statistics?.viewCount} views</small>
        <small></small>
      </div>
    </div>
  );
}

export default VideoCard