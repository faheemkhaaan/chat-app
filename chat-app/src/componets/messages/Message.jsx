import React, { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversations";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

function Message({message}) {
  const [shakeClass,setShakeClass] = useState(message?.shouldShake ? "animate-bounce" : "");
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "bg-gray-500"
  const formatedTime = extractTime(message.createdAt);


  

  useEffect(()=>{
    setTimeout(()=>{
      setShakeClass('')
    },1500)
  },[shakeClass])

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">

        <div className="w-10 rounded-full">
            <img src={profilePic} alt="Tailwind css chat bubble component" />
        </div>

      </div>

      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} `}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-300">{formatedTime}</div>
    </div>
  );
}

export default Message;
