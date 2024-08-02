import React from "react";
import { IoLogOut } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
  const {loading,logout} = useLogout()
  return (
    <div className="mt-auto">

      {
        !loading ? <BiLogOut className="text-white text-2xl cursor-pointer" 
        onClick={logout}
      /> : <span className=" loading loading-spinner"></span>
      }
      
      
    </div>
  );
}

export default LogoutButton;
