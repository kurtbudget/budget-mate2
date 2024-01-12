import { Button } from '@tremor/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className='h-[100vh] flex  items-center justify-center gap-4 mx-[50px]' >
      <div className='flex-1 hidden md:block'>
        <Image src={'/wallet.svg'} width={500} height={500} alt=''/>
      </div>


      <div className='flex-1 flex flex-col items-start'>
      <h1 className='text-4xl font-bold text-[whitesmoke] py-4'>
        About BudgetMate
      </h1>      
      <p className='text-md font-light '>
        Welcome to BudgetMate, your go-to platform for smart and efficient personal and business budgeting solutions. At BudgetMate, we understand the importance of financial empowerment and aim to provide you with the tools and insights needed to take control of your financial journey.
      </p>
      <h1 className='text-4xl font-bold text-[whitesmoke] py-4'>
      Our Mission
      </h1>      
      <p className='text-md font-light '>
      Our mission is to empower individuals and businesses to make informed financial decisions, achieve their goals, and attain financial independence. We believe that financial well-being is a crucial aspect of a fulfilling life, and we are committed to providing user-friendly and effective budgeting solutions to support you on your path to financial success.
      </p>
      <Button className='my-4' variant='secondary'><Link href={"/"}>SignIn</Link></Button>
      </div>
    </div>
  )
}

export default About