

function Login() {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center bg-no-repeat bg-center bg-daily-gradient'  >
        <img src='/dutchwaylogo-removebg.png' alt='dutchway logo' className=' mb-5 w-60 h-auto'  />
    <form className='flex flex-col w-4/12 h-11/12 rounded-md bg-white border-solid border-blue-flag border-4 p-6 pb-4 gap-3 shadow-lg shadow-blue-flag ' >
        <label className='text-2xl text-blue-flag' htmlFor='mail'>E-mail</label>
        <input type='email' id='mail' placeholder='joao@gmail.com' className=' text-lg w-auto focus:border-red-flag focus:ring-red-flag focus:outline-none ' />

        <label className='text-2xl text-blue-flag' htmlFor='pass'>Password</label>
        <input type='password' id='pass' className=' text-lg w-auto focus:border-red-flag focus:ring-red-flag focus:outline-none '/>

        <div className='flex flex-col justify-center items-start h-fit w-full mt-2' >
        <button className=' bg-blue-flag text-2xl rounded-lg text-white px-2 py-1 ' >Login</button>
        </div>
    </form>
</div>
  )
}

export default Login