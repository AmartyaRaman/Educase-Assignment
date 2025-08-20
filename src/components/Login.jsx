import { useEffect, useState } from "react"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (email!=='' && password!=='') setFilled(true);
    else setFilled(false);
  }, [email, password])

  return (
    <div className='flex p-5 h-screen w-full items-center justify-center'>
      <div className='bg-gray-50 flex flex-col w-sm h-full py-12 px-8 border border-gray-300'>
        <p className='text-3xl font-medium'>Sign to your <br/> PopX account</p>
        <p className='mt-4 text-lg text-gray-400'>Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit.</p>

        <form className='mt-6'>
          <div class="relative mb-5">

            <input
            id="email"
            name="email"
            type="text"
            className="peer h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-4 text-sm text-black focus:border-purple-500 focus:outline-none"
            placeholder="Enter email address"
            onChange={e => setEmail(e.target.value)}
            />

            <label
              for="email"
              className="pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500"
              >
                Email Address
            </label>
          </div>
          
          <div className='relative'>

            <input 
            id='password'
            className='peer h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-4 text-sm text-black focus:border-purple-500 focus:outline-none' 
            type='password'
            placeholder='Enter password' 
            onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor='password' className='pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500'>
                Password
            </label>

            <button disabled={!filled} className='bg-[rgb(112,36,252)] cursor-pointer p-2 font-medium text-white rounded-md w-full mt-3 disabled:bg-gray-400'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
