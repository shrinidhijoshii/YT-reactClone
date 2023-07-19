import React from 'react'

const LiveChatMessage = ({name, message}) => {
  return (
    <div className="flex shadow-md p-1">
      <img
        className="mx-1 h-6"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <p className="font-semibold mx-1">{name}</p>
      <p className="mx-1">{message}</p>
    </div>
  );
}

export default LiveChatMessage