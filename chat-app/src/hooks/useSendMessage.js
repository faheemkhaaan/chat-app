import React, { useState } from 'react'
import useConversation from '../zustand/useConversations'
import toast from 'react-hot-toast';
import axios from 'axios';

function useSendMessage() {
  const [loading,setLoading] = useState(false)
  const {messages , setMessages, selectedConversation} = useConversation();

  const sendMessage = async (message) =>{
    console.log(message);
    setLoading(true)
    try {
        const res = await axios.post(`/api/message/send/${selectedConversation._id}`,{message});
        if(res.error){
            throw new Error(res.error);
        }

        setMessages([...messages,res.data]);
        
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }

  return {loading,sendMessage}
}

export default useSendMessage