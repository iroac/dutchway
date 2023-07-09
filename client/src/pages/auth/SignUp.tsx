

function SignUp() {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center bg-no-repeat bg-center bg-daily-gradient'>
        <img src='/dutchwaylogo-removebg.png' alt='dutchway logo' className=' mb-5 w-60 h-auto'  />
        <form className='flex flex-col w-4/12 h-11/12 rounded-md bg-white border-solid border-blue-flag border-4 p-8 pb-4 gap-3 shadow-lg shadow-blue-flag ' >
            <label className='text-2xl text-blue-flag' htmlFor='fname' >First Name</label>
            <input type='text' placeholder='John' id="fname" className=' w-auto focus:border-red-flag focus:outline-none ' />

            <label className='text-2xl text-blue-flag' htmlFor='lname'>Last Name</label>
            <input type='text'  placeholder='Wick' className=' w-auto focus:border-red-flag focus:outline-none ' id='lname' />
            
            <label className='text-2xl text-blue-flag' htmlFor='mail'>E-mail</label>
            <input type='email' placeholder='jonh@gmail.com' id='mail' className=' w-auto focus:border-red-flag focus:outline-none ' />

            <label className='text-2xl text-blue-flag' htmlFor='pass'>Password</label>
            <input type='password' id='pass' className=' w-auto focus:border-red-flag focus:outline-none '/>

            <div className='flex flex-col justify-center items-center h-fit w-full mt-4' >
            <button className=' bg-red-flag text-2xl rounded-lg text-white px-2 py-1 ' >Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp