import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3012/api/login', { email, password }, { withCredentials: true })
            console.log(res)
            navigate('/')
        } catch (err) {
            console.log(err)
        } 
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };


  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center bg-no-repeat bg-center bg-daily-gradient'  >
        <img src='/dutchwaylogo-removebg.png' alt='dutchway logo' className=' mb-5 w-60 h-auto'  />
    <form onSubmit={handleSubmit} className='flex flex-col w-4/12 h-11/12 rounded-md bg-white border-solid border-blue-flag border-4 p-6 pb-4 gap-3 shadow-lg shadow-blue-flag ' >
        <label className='text-2xl text-blue-flag' htmlFor='mail'>E-mail</label>
        <input type='email' id='mail' value={email} onChange={handleEmailChange} placeholder='joao@gmail.com' className=' text-lg w-auto focus:border-red-flag focus:ring-red-flag focus:outline-none ' />

        <label className='text-2xl text-blue-flag' htmlFor='pass'>Password</label>
        <input type='password' id='pass' value={password} onChange={handlePasswordChange} className=' text-lg w-auto focus:border-red-flag focus:ring-red-flag focus:outline-none '/>

        <div className='flex flex-col justify-center items-start h-fit w-full mt-2' >
        <button type='submit' className=' bg-blue-flag text-2xl rounded-lg text-white px-2 py-1 ' >Login</button>
        </div>
    </form>
</div>
  )
}

export default Login