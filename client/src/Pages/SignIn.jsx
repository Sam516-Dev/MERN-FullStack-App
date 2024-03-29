import React from 'react'

const SignIn = () => {
  return (
    <div className='p-3 max-w-lg mx-auto bg-indigo-300 mt-9 rounded-md py-16 px-6'>
      <h1 className='text-3xl text-center font-bold mb-8 text-indigo-950 '> Sign Up </h1>
      <form className='flex flex-col gap-6'>
        <input type='text' placeholder='username' className='text-indigo-950  outline-none font-medium border p-3 rounded-lg' id="username" />
        <input type='email' placeholder='email' className='text-indigo-950  outline-none font-medium border p-3 rounded-lg' id="email" />
        <input type='password' placeholder='password' className=' text-indigo-950 outline-none font-medium border p-3 rounded-lg' id="password" />

      </form>
    </div>
  )
}

export default SignIn
