import { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversations';
import axios from 'axios';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();

    const getMessages = async () =>{
        setLoading(true)
        try {
            const res = await axios.get(`/api/message/${selectedConversation._id}`)
            console.log(res.data);
            if(res.error){
                throw new Error(res.error)
            }
            setMessages(res.data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        console.log("inside use effect ");
        
        if(selectedConversation?._id){
            console.log("Inside use effect condition")
            getMessages()
        };
    },[selectedConversation?._id,setMessages]);

    return {messages , loading}
}

export default useGetMessages