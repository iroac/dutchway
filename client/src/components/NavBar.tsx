import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

function NavBar() {
    return (<div className="flex flex-row justify-center items-center shadow-md w-screen h-10" >
        <div className="flex justify-start items-center w-4/12 pr-5 pl-1" >
        <Link to='/' >  <img className=" w-28 h-auto " src='/dutchwaylogo.png' /> </Link>
        </div>
        <div className="flex flex-row gap-6 justify-center items-center pt-1 w-auto " >
            <Link to='/grammar' className=" text-blue-flag text-sm">GRAMMAR</Link>
            <Link to='/lessons' className=" text-blue-flag text-sm ">LESSONS</Link>
            <Link to='/dictionary' className=" text-blue-flag text-sm">DICTIONARY</Link>
            <Link to='/material' className=" text-blue-flag text-sm">MATERIAL</Link>
    </div>
    <div className="flex justify-end items-center w-4/12 pl-5 pr-1 ">
    <FaRegUserCircle className="text-red-flag text-1xl sm:text-2xl" />
    </div>
      </div>
      );
}

export default NavBar