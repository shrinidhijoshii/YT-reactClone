import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex p-1 m-2 rounded-lg bg-gray-100">
      <img
        className="h-10 my-3"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-2 py-2">
        <p className="font-semibold">@{name}</p>
        <p>{comment}</p>
        <div className="flex space-x-2 cursor-pointer">
          <div className="flex space-x-2">
            <ThumbsUp className="h-4 my-2" />
            <ThumbsDown className="h-4 my-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
