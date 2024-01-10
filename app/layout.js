"use client";

import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Navigation";

import FinanceContextProvider from "./lib/store/finance-context"; 
import AuthContextProvider from "./lib/store/auth-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <link rel="icon" href="/bm.png" type="image/png" sizes="16x16"/>
      <title>BudgetMate</title>
      <head />
      <body>
        <AuthContextProvider>
          <FinanceContextProvider>
            <ToastContainer />
            <Nav />
            {children}
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}