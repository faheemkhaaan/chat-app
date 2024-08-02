import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useLogin() {
  const [loading,setLoading] = useState(false);
  const {authUser,setAuthUser} = useAuthContext();
  const login = async (username,password) =>{
    const success =  handelInputErrors(username,password);

    if(!success)return;
    setLoading(true);
    try {
        const res = await axios.post('/api/auth/login',{username,password})
        console.log(res.data);
        if(res.error){
            throw new Error(res.error);
        }

        localStorage.setItem("chat-user",JSON.stringify(res.data));
        setAuthUser(res.data);

        toast.success("logged in successfully")

        
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }

  return {loading,login}
}

function handelInputErrors(username,password){
    // if(!fullName || !username || !password || !confirmPassword || !gender){
    //   toast.error("Please fill all th fields")
    //   return false
    //   }
  
 
    if(!username){
      toast.error("Please fill in your username")
      return false
    }  
    if(!password){
      toast.error("Please fill in your password")
      return false
    }
    return true
  }
  


export default useLogin