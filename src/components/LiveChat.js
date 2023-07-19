import React, { useEffect } from 'react'
import LiveChatMessage from './LiveChatMessage';

const LiveChat = () => {

    useEffect(() => {
        const timeInterval = setInterval(() => {
            console.log("API polling")
        }, 2000);

        return () => {
            clearInterval(timeInterval);
        }

    },[])

  return (
    <div className="p-1 m-1 w-72 cursor-pointer shadow-lg h-[600px] bg-gray-100">
      <h1 className="text-center m-2">Live chat</h1>
      <LiveChatMessage name="shrinidhi" message={"welcome🚀"} />
      <LiveChatMessage name="shrinidhi" message={"welcome🚀"} />
      <LiveChatMessage name="shrinidhi" message={"welcome🚀"} />
      <LiveChatMessage name="shrinidhi" message={"welcome🚀"} />
      <LiveChatMessage name="shrinidhi" message={"welcome🚀"} />
    </div>
  );
}

export default LiveChat