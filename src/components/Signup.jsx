import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [agency, setAgency] = useState('');
  const [filled, setFilled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (fullname !== '' && phone !== '' && email !== '' && password !== '' && agency !== '') {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [fullname, phone, email, password, agency])

  const handleSignup = () => {
    if (filled) {
      navigate('/account');
    }
  };

  return (
    <div className='flex p-5 h-screen w-full items-center justify-center'>
      <div className='bg-gray-50 flex flex-col w-xs h-full py-8 px-5 border border-gray-300'>
        <p className='mb-3 text-3xl font-semibold'>Create your <br /> PopX account</p>

        <form className='mt-2 flex flex-col h-full'>
          <div className='relative mb-7'>
            <input 
            id='fullname'
            name='fullname'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder='Enter you name'
            className='h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-sm text-black focus:border-purple-500 focus:outline-none'
            />
            <label htmlFor='fullname' className='pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 after:content-["*"] after:ml-0.5 after:text-red-500'>Full Name</label>
          </div>
          <div className='relative mb-7'>
            <input 
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone number'
            className='h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-sm text-black focus:border-purple-500 focus:outline-none'
            />
            <label htmlFor='phone' className='pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 after:content-["*"] after:ml-0.5 after:text-red-500'>Phone number</label>
          </div>
          <div className='relative mb-7'>
            <input 
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter you email'
            className='h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-sm text-black focus:border-purple-500 focus:outline-none'
            />
            <label htmlFor='email' className='pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 after:content-["*"] after:ml-0.5 after:text-red-500'>Email address</label>
          </div>
          <div className='relative mb-7'>
            <input 
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            type='password'
            className='h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-sm text-black focus:border-purple-500 focus:outline-none'
            />
            <label htmlFor='password' className='pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 after:content-["*"] after:ml-0.5 after:text-red-500'>Password</label>
          </div>
          <div className='relative mb-5'>
            <input 
            id='company'
            name='company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder='Enter Company name'
            className='h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-sm text-black focus:border-purple-500 focus:outline-none'
            />
            <label htmlFor='company' className='pointer-events-none absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500'>Company Name</label>
          </div>

          <p className='mb-3 after:content-["*"] after:ml-0.5 after:text-red-500'>Are you an Agency?</p>

          <div className='flex items-center'>

            <input 
            className='mr-2 size-4 accent-purple-500' 
            type='radio' 
            id='agency-yes' 
            name='agency' 
            value='yes' 
            checked={agency === 'yes'} 
            onChange={(e) => setAgency(e.target.value)} 
            />
            <label className='mr-8 text-sm' htmlFor='agency-yes'>Yes</label>
            <input 
            className='mr-2 size-4 accent-purple-500' 
            type='radio' 
            id='agency-no' 
            name='agency' 
            value='no' 
            checked={agency === 'no'} 
            onChange={(e) => setAgency(e.target.value)} 
            />
            <label className='mr-8' htmlFor='agency-no'>No</label>
          </div>

          <button 
          className={`bg-[rgb(112,36,252)] cursor-pointer p-2 font-medium mt-auto text-white rounded-md w-full ${filled ? '' : 'disabled:bg-gray-400'}`} 
          disabled={!filled}
          onClick={handleSignup}
          >Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
