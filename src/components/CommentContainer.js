import React from "react";
import Comment from "./Comment";

const CommentsMock = [
  {
    name: "Rahul",
    comment: "is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "when an unknown printer took a galley of type and",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "when an unknown printer took a galley of type and",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply random tex",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "iterature from 45 BC",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "here are many variations of passages of Lorem Ipsum available",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "but the majority have suffered alteration in some form",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "a Latin professor at Hampden-Sydney College in Virginia",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "The standard chunk of Lorem Ipsum used since the 1500s",
    replies: [],
  },
  {
    name: "Rahul",
    comment:
      "n the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    replies: [],
  },
  {
    name: "Rahul",
    comment:
      "reproduced below for those interested. Sections 1.10.32 and 1.10.33",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "The standard chunk of Lorem Ipsum used since the 1500s",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "ere isn't anything embarrassing ",
    replies: [],
  },
  {
    name: "Rahul",
    comment: "is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div>
            <Comment key={index} data={comment} />
            <div className="ml-5 pl-5 border border-l-gray-500 border-white">
              <Comment key={index} data={comment} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="py-4">
      <h1 className="font-bold">Comments</h1>
      <CommentsList comments={CommentsMock} />
    </div>
  );
};

export default CommentContainer;
