import React, { useContext } from "react";

import { authContext } from "../lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import {  Divider, Text } from "@tremor/react";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className=" text-4xl font-bold text-center whitespace-nowrap pt-6">Welcome To Budget Mate </h1>
      <p className="text-center font-light text-slate-600 py-4">Empower Your Financial Journey: Smart Solutions for Personal and Business Budgeting</p>
      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
        <div className="h-52">
          <img
            className="object-cover w-full h-full"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/411196255_330816636450020_1333022664433143315_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGCM2RNu1f9lqwvgn7b0i6SQkkSYl7vU-xCSRJiXu9T7LjceJVNtPwq0eA_Ec94YIo0UU72WQnSJY9xQ05vf20Q&_nc_ohc=C_9JhrFFXfEAX8WnltY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTepVyf-B-4Q5R-0F_Zv-p9vR36n867e8u323ocI-Dg9g&oe=65BFE0CC"
          />
        </div>

        <div className="px-4 py-4 flex flex-col items-center justify-center gap-4">
          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg"
          >
            <FcGoogle className="text-2xl" /> Google
          </button>
          <div className="flex flex-col items-center justify-center gap-2 w-full">
          <p className="text-white text-sm">Sign in with Google</p>
          <Divider className="border border-t-[1px] border-b-0 border-l-0 border-r-0 border-white mx-auto max-w-[400px]"></Divider>
          <Link href={"https://accounts.google.com/lifecycle/steps/signup/name?continue=https://accounts.google.com/signin/oauth/consent?authuser%3Dunknown%26part%3DAJi8hAP0JVuZzg6OG0STRHmcLEeN29_-PpPq1hjQhSsl0-XWeTxy5yXdScsNX0P4Fx0AJNHr7_l9HJQ8J0WVno8WIkcrT5u25M_wj5Tlo-f0H83Mh7VUHZr3OjJYt3abou2K73vEwYXOHwpm9i9YehRWCuViYDQDdu9F0myFXlMjCzvvLC1KRpLdPcU2nxIW7PZCeq1fAS48GNm0s8X8uNYeJSTq_WpfRPoXQdLdkFz9Ab_Qtq8W4K2-QvjV6dvCf9GJFXgcfPGGaY3uRScfJ1wHCmIwN57uPOti43HJvTIZXgUDwKKI-2fiCKQ3PGEKCJXAiuBWwx8Idc9xqUhInyvW7RfvtXVLsRZfO93VbFPaZDsNt6cfWS4zgGv5r9TznjJv0JXPk0K05TdvclTvCOuqh4qd02pUk0LFAht8bsn_SJgyZj0xNFODVOWJ7W13qbJvMm7a5u8MDZdiA3JiSnoq6A-dMMDfBayA3V4rRkmstfY89zS6_20%26as%3DS-1039543048%253A1704879230681968%26client_id%3D512096825885-6uuncd4k7ois7f9kj96i24euf6c1kvm6.apps.googleusercontent.com%26theme%3Dglif%23&dsh=S-1039543048:1704879230681968&flowEntry=SignUp&flowName=GlifWebSignIn&theme=glif&TL=AHNYTISjUaXfW_bBaS5DaMWFjxSuVr4v51zWKMu0ir5e_FdpYDhNJ7Gctv8r0kIn"}>
          <p className="text-white text-sm">Don't have an account? Create now.</p>
          </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;