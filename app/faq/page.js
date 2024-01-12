import { Button } from '@tremor/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Faq() {
  return (
    <div className='h-full flex flex-col items-center max-w-[1100px] mx-auto' >
        <h1 className='text-4xl font-bold text-[whitesmoke] py-4'>
          BudgetMate FAQ
        </h1>  
      <div className='flex items-center'>
        <div className='flex-1 hidden md:block'>
          <Image src={'/faq.svg'} width={400} height={400} alt=''/>
        </div>
        <div className='flex-1 flex flex-col md:items-start items-center md:mx-auto max-w-[580px]'>
        <h2 className='text-xl font-bold text-[whitesmoke] '>What is BudgetMate?</h2>
        <p className='text-sm font-light '>
        BudgetMate is a comprehensive financial management platform designed to empower individuals and businesses in making informed decisions about their money. It provides smart solutions for personal and business budgeting, goal planning, debt management, and more.
        </p>
        <h2 className='text-xl font-bold text-[whitesmoke]'>How can BudgetMate help me?</h2>
        <p className='text-sm font-light '>
        BudgetMate helps you take control of your finances by offering automated tracking, goal planning, and debt management features. It provides insights into your spending patterns, allowing you to budget effectively and work towards financial independence.
        </p>
        <h2 className='text-xl font-bold text-[whitesmoke]'>How do I get started with BudgetMate?</h2>
        <p className='text-sm font-light '>
        To get started with BudgetMate, simply sign up for an account on our platform. Once registered, you can set your financial goals, track your income and expenses, and start budgeting effectively.
        </p>
        <h2 className='text-xl font-bold text-[whitesmoke]'>Is my financial information secure with BudgetMate?</h2>
        <p className='text-sm font-light '>
        Yes, we take the security of your financial information seriously. BudgetMate employs industry-standard security measures to safeguard your data and ensure a secure user experience.
        </p>
        <h2 className='text-xl font-bold text-[whitesmoke]'>Can I use BudgetMate on different devices?</h2>
        <p className='text-sm font-light '>
        Absolutely! BudgetMate is designed to be accessible on various devices, including desktops, laptops, tablets, and smartphones. You can access your budgeting tools anytime, anywhere.
        </p>
        <Button className='my-4' variant='secondary'><Link href={"/"}>SignIn</Link></Button>
        </div>
      </div>
      
    </div>
  )
}

export default Faq