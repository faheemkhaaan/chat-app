import React from "react";
import GenderCheckBox from "./GenderCheckBox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500 px-2">ChatApp</span>
        </h1>

        <form>
          <div>
            <label htmlFor="fullName" className=" label p-2">
              <span className="text-base label-text text-gray-100">
                Full Name
              </span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className=" label p-2">
              <span className="text-base label-text text-gray-100">
                Username
              </span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className=" label p-2">
              <span className="text-base label-text text-gray-100">
                Pssword
              </span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className=" label p-2">
              <span className="text-base label-text text-gray-100">
                Confirm Password
              </span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
              required
            />
          </div>

          <GenderCheckBox/>

          {/* GENDER CHECKBOX GOES HERE */}

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100"
          >
            Already have an account
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// STARTER CODE FOR SIGNUP COMPONENT

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500 px-2">ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label htmlFor="fullName" className=" label p-2">
//               <span className="text-base label-text text-gray-100">
//                 Full Name
//               </span>
//             </label>
//             <input
//               id="fullName"
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="username" className=" label p-2">
//               <span className="text-base label-text text-gray-100">
//                 Username
//               </span>
//             </label>
//             <input
//               id="username"
//               type="text"
//               placeholder="Enter your username"
//               className="w-full input input-bordered h-10"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className=" label p-2">
//               <span className="text-base label-text text-gray-100">
//                 Pssword
//               </span>
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               className="w-full input input-bordered h-10"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="confirmPassword" className=" label p-2">
//               <span className="text-base label-text text-gray-100">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               id="confirmPassword"
//               type="password"
//               placeholder="Enter your password"
//               className="w-full input input-bordered h-10"
//               required
//             />
//           </div>

//           <GenderCheckBox/>

//           {/* GENDER CHECKBOX GOES HERE */}

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100"
//           >
//             Already have an account
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2">Sign up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
