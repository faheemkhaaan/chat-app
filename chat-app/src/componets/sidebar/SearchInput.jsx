import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white flex'>
           <IoSearchSharp className='size-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput


//STARTER CODE FOR THIS FILE
// import { IoSearchSharp } from "react-icons/io5";
// function SearchInput() {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white flex'>
//            <IoSearchSharp className='size-6 outline-none'/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput