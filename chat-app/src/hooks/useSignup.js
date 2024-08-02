import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext';

function useSignup() {
  const [loading,setLoading] = useState(false);
  const {authUser,setAuthUser} = useAuthContext();


  const signup = async ({fullName,username,password,confirmPassword,gender}) =>{
    const success =  handelInputErrors({fullName,username,password,confirmPassword,gender});

    if(!success)return;
    setLoading(true)
    try {
      const res = await axios.post('/api/auth/signup',{fullName,username,password,confirmPassword,gender})

      console.log(res.data);
      if(res.error){
        throw new Error(res.error);
      }

      // localstorage

      localStorage.setItem('chat-user',JSON.stringify(res.data));

      //context

      setAuthUser(res.data)



      toast.success("Account created successfully")
      
    } catch (error) {
      toast.error(error.message)
      
    }finally{
      setLoading(false)
    }
  }  

  return {loading,signup}
}

function handelInputErrors({fullName,username,password,confirmPassword,gender}){
  // if(!fullName || !username || !password || !confirmPassword || !gender){
  //   toast.error("Please fill all th fields")
  //   return false
  //   }

  if(!fullName){
    toast.error("Please fill in your full name")
    return false
  }
  if(!username){
    toast.error("Please fill in your username")
    return false
  }  
  if(!password){
    toast.error("Please fill in your password")
    return false
  }
  if(!confirmPassword){
    toast.error("Please fill in your confirmPassword")
    return false
  }
  if(!gender){
    toast.error("Please fill in your gender")
    return false
  }
  

    

  if(password !== confirmPassword){
    toast.error("Password do not match")
    return false
  }

  if(password.length < 6){
    toast.error("Password must be at least 6 characters")
    return false
  }
  return true
}

export default useSignup