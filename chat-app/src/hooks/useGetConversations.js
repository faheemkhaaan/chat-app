import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function useGetConversations() {
  const [loading,setLoading] = useState(false);
  const [conversations,setConversations] = useState([]);
  useEffect(()=>{
    const getConversations = async () =>{
        setLoading(true)
        try {
            const res = await axios.get("/api/users");
            if(res.error){
                throw new Error(res.error)
            }
            setConversations(res.data);
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    getConversations()
  },[])

  return {loading,conversations}
}

export default useGetConversations