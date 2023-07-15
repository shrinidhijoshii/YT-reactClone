import React from 'react'

const Comment = ({data}) => {
    const {name,comment,replies} = data
  return (
    <div className="flex p-1 m-2 rounded-lg bg-gray-100">
      <img
        className="h-10 my-3"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-2 py-2">
        <p className="font-semibold">@{name.toLowerCase()}</p>
        <p>{comment}</p>
        <p>{replies}</p>
        <div className='flex space-x-2 cursor-pointer'>
          <p>👍🏼</p>
          <p>👎🏼</p>
        </div>
      </div>
    </div>
  );
}

export default Comment