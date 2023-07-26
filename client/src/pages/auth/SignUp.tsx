import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const navigate = useNavigate()

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
   const res = await axios.post('https://dutchway.onrender.com/api/signup', { email, password, f_name: fName, l_name: lName, wordsLearned: '[]', currentlyWords: '[[101, 0], [1, 0], [2, 0], [102, 0]]'  })
   if(res) {
    navigate('/login')
   }
}

const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
const handleFNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFName(e.target.value);
  };
const handleLNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLName(e.target.value);
  };

  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center bg-no-repeat bg-center bg-daily-gradient'>
        <img src='/dutchwaylogo-removebg.png' alt='dutchway logo' className=' mb-5 w-60 h-auto'  />
        <form onSubmit={handleSubmit} className='flex flex-col w-4/12 h-11/12 rounded-md bg-white border-solid border-blue-flag border-4 p-8 pb-4 gap-3 shadow-lg shadow-blue-flag ' >
            <label className='text-2xl text-blue-flag' htmlFor='fname' >First Name</label>
            <input type='text' placeholder='John' value={fName} onChange={handleFNameChange} id="fname" className=' w-auto focus:border-red-flag focus:outline-none ' />

            <label className='text-2xl text-blue-flag' htmlFor='lname'>Last Name</label>
            <input type='text'  placeholder='Wick' value={lName} onChange={handleLNameChange} className=' w-auto focus:border-red-flag focus:outline-none ' id='lname' />
            
            <label className='text-2xl text-blue-flag' htmlFor='mail'>E-mail</label>
            <input type='email' placeholder='jonh@gmail.com' value={email} onChange={handleEmailChange} id='mail' className=' w-auto focus:border-red-flag focus:outline-none ' />

            <label className='text-2xl text-blue-flag' htmlFor='pass'>Password</label>
            <input type='password' id='pass' value={password} onChange={handlePasswordChange} className=' w-auto focus:border-red-flag focus:outline-none '/>

            <div className='flex flex-col justify-center items-center h-fit w-full mt-4' >
            <button type='submit' className=' bg-red-flag text-2xl rounded-lg text-white px-2 py-1 ' >Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp