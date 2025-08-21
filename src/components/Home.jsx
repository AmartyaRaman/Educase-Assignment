import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex p-5 h-screen w-full items-center justify-center'>
      <div className='bg-gray-50 flex flex-col-reverse w-xs h-full py-12 px-5 border border-gray-300'>
        <button className='bg-[rgb(208,188,252)] p-2 font-medium rounded-md w-full mt-2'><Link to="/login">Already Registered? Login</Link></button>
        <button className='bg-[rgb(112,36,252)] cursor-pointer p-2 font-medium text-white rounded-md w-full mt-6'><Link to="/signup">Create Account</Link></button>
        <p className='mt-4 text-lg text-gray-400'>Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit.</p>
        <p className='text-3xl font-semibold'>Welcome to PopX</p>
      </div> 
    </div>
  )
}

export default Home
