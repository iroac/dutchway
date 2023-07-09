

function SignUp() {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center bg-no-repeat bg-center bg-daily-gradient'>
        <form className='flex flex-col w-6/12 h-11/12 rounded-md bg-white border-solid border-blue-flag border-4 p-10 gap-3 shadow-lg shadow-blue-flag ' >
            <label className='text-2xl text-blue-flag' htmlFor='fname' >First Name</label>
            <input type='text' id="fname" className=' w-auto ring-blue-flag ring-1 focus:border-red-flag focus:ring-red-flag focus:ring-2 focus:outline-none ' />

            <label className='text-2xl text-blue-flag' htmlFor='lname'>Last Name</label>
            <input type='text' className=' w-auto ring-blue-flag ring-1 focus:border-red-flag focus:ring-red-flag focus:ring-2 focus:outline-none ' id='lname' />
            
            <label className='text-2xl text-blue-flag' htmlFor='mail'>E-mail</label>
            <input type='email' id='mail' className=' w-auto ring-blue-flag ring-1 focus:border-red-flag focus:ring-red-flag focus:ring-2 focus:outline-none ' />

            <label className='text-2xl text-blue-flag' htmlFor='pass'>Password</label>
            <input type='password' id='pass' className=' w-auto ring-blue-flag ring-1 focus:border-red-flag focus:ring-red-flag focus:ring-2 focus:outline-none '/>

            <div className='flex flex-col justify-center items-center h-fit w-full mt-4' >
            <button className=' bg-red-flag text-2xl rounded-lg text-white p-2 ' >Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp