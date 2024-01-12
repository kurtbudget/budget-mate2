import React, { useContext } from "react";

import { authContext } from "../lib/store/auth-context";
import { Signika } from 'next/font/google';
const signika = Signika({ subsets: ['latin'], weight: '700' })
import { FcAbout, FcGoogle } from "react-icons/fc";
import Link from "next/link";
import {  Button, Dialog, DialogPanel, Divider, Icon, Metric, Text, Title } from "@tremor/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FaQuestion } from "react-icons/fa";
function SignIn() {
  const { googleLoginHandler } = useContext(authContext);
  const [isAbout, setIsAbout] = React.useState(false);
  const [isFAQ, setIsFAQ] = React.useState(false);
  return (
    <main className="container max-w-2xl px-6 mx-auto ">
      <h1 className={` lg:text-6xl  text-4xl text-center lg:whitespace-nowrap pt-6 ${signika.className}`}>BudgetMate </h1>
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
          <Divider className="border border-t-[1px] border-b-0 border-l-0 border-r-0 border-white mx-auto max-w-[200px] py-0 my-0"></Divider>
          <Link href={"https://www.gmail.com"}>
          <p className="text-white text-sm">Don't have an account? Create now.</p>
          </Link>
          <div className="flex items-center gap-4 justify-between w-lg mx-auto">
          <div>
            <Link href={'/about'}>
              About
            </Link>
          </div>
          <div>
            <Link href={'/faq'}>
            FAQ
            </Link>
          </div>
            
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;