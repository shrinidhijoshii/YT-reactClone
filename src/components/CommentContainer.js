import React from "react";
import Comment from "./Comment";

const CommentsMock = [
  {
    name: "js-bot",
    comment: "is simply dummy text of the printing and typesetting industry",
    replies: [
      {
        name: "wiliames",
        comment:
          "1st level nesting comment",
        replies: [],
      },
      {
        name: "akshay",
        comment: "2nd level nesting comment",
        replies: [
          {
            name: "shri",
            comment:
              "3rd level nesting comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "yt-bot",
    comment: "when an unknown printer took a galley of type and",
    replies: [],
  },
  {
    name: "mars-prediator",
    comment: "when an unknown printer took a galley of type and",
    replies: [],
  },
  {
    name: "musk",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply random tex",
    replies: [],
  },
  {
    name: "binod",
    comment: "iterature from 45 BC",
    replies: [],
  },
  {
    name: "xerxes",
    comment: "here are many variations of passages of Lorem Ipsum available",
    replies: [],
  },
  {
    name: "mahatma",
    comment: "but the majority have suffered alteration in some form",
    replies: [],
  },
  {
    name: "random-user",
    comment: "a Latin professor at Hampden-Sydney College in Virginia",
    replies: [],
  },
  {
    name: "rutherford",
    comment: "is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "react-pro",
    comment: "The standard chunk of Lorem Ipsum used since the 1500s",
    replies: [],
  },
  {
    name: "steve",
    comment:
      "n the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    replies: [],
  },
  {
    name: "gamer-fi",
    comment:
      "reproduced below for those interested. Sections 1.10.32 and 1.10.33",
    replies: [],
  },
  {
    name: "joshi",
    comment: "The standard chunk of Lorem Ipsum used since the 1500s",
    replies: [],
  },
  {
    name: "mark",
    comment: "ere isn't anything embarrassing ",
    replies: [],
  },
  {
    name: "xavier",
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
              <CommentsList comments={comment.replies} />
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
