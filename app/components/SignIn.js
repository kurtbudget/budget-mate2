import React, { useContext } from "react";

import { authContext } from "../lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center">Welcome To Budget Mate </h1>

      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
        <div className="h-52">
          <img
            className="object-cover w-full h-full"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/411196255_330816636450020_1333022664433143315_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGCM2RNu1f9lqwvgn7b0i6SQkkSYl7vU-xCSRJiXu9T7LjceJVNtPwq0eA_Ec94YIo0UU72WQnSJY9xQ05vf20Q&_nc_ohc=C_9JhrFFXfEAX8WnltY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTepVyf-B-4Q5R-0F_Zv-p9vR36n867e8u323ocI-Dg9g&oe=65BFE0CC"
          />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-2xl text-center"></h3>

          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg"
          >
            <FcGoogle className="text-2xl" /> Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;