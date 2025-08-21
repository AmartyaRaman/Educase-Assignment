import React from 'react'

const Account = () => {
  return (
    <div className='flex p-5 h-screen w-full items-center justify-center'>
      <div className='bg-gray-100 flex flex-col w-xs h-full py-8 px-5 border border-gray-300 relative'>
        <div className='bg-white flex items-center absolute left-0 right-0 top-0 h-16'>
          <p className='p-4 text-gray-600 font-medium'>Account Settings</p>
        </div>
        <div className='flex mb-7 pt-15'>
          <div className='relative mr-5'>
            <img src="profile.jpg" alt="profile" className='rounded-4xl bg-white size-16'/>
            <div className='absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1'>
              <svg className='w-4 h-4 text-white' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586l-.707-.707A1 1 0 0013 4H7a1 1 0 00-.707.293L5.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-medium'>Marry Doe</p>
            <p className='text-gray-500'>marry@gmail.com</p>
          </div>
        </div>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo. Amet magnam veniam est blanditiis nobis iure soluta aliquid adipisci distinction.</p>
        <div className="border-b-2 border-dashed border-gray-200 mt-2 -mx-8"></div>
        <div className="mt-auto border-b-2 border-dashed border-gray-200 -mx-8"></div>
      </div>
    </div>
  )
}

export default Account
