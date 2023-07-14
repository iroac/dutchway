import axios from 'axios';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()

const handleLogout = async () => {
    try {
        const res = await axios.get('http://localhost:3012/api/logout', {withCredentials: true})
        console.log(res.data)
        navigate('/login')
    } catch(err) {
        console.log(err)
    }
}

    return (<div className="flex flex-row justify-center items-center shadow-md w-screen h-10" >
        <div className="flex justify-start items-center w-4/12 pr-5 pl-1" >
        <Link to='/' >  <img className=" w-28 h-auto " src='/dutchwaylogo.png' alt='dutch way logo' /> </Link>
        </div>
        <div className="flex flex-row gap-6 justify-center items-center pt-1 w-auto " >
            <Link to='/grammar' className=" text-blue-flag text-sm">GRAMMAR</Link>
            <Link to='/lessons' className=" text-blue-flag text-sm ">LESSONS</Link>
            <Link to='/dictionary' className=" text-blue-flag text-sm">DICTIONARY</Link>
            <Link to='/material' className=" text-blue-flag text-sm">MATERIAL</Link>
    </div>
    <div className="flex justify-end items-center w-4/12 pl-5 pr-1 ">
    <RiLogoutCircleLine onClick={handleLogout} className="text-red-flag text-1xl sm:text-2xl" />
    </div>
      </div>
      );
}

export default NavBar