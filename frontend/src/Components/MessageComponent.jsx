import React from 'react';

const MessageComponent = ({ messageContent }) => {
  const { name, email, message, date } = messageContent;
  return (
    <div className=" sm:max-w-xl w-[90%] mx-auto my-4 bg-slate-800 text-white shadow-md rounded-lg py-2 px-4 font-karla">
      <div className="">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-gray-300">{email}</p>
      </div>
      <div className="my-1">
        <p className="text-white">Message : {message}</p>
      </div>
      <div className="text-right text-gray-400 text-sm">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default MessageComponent;
