import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
      <div className=" flex flex-row justify-center items-center shadow-md w-full h-10" >
        <div className=" grow-0 " >
        <Link to='/' >  <img className="w-32 h-auto " src='/dutchwaylogo.png' /> </Link>
        </div>
        <div className="flex flex-row gap-10 grow justify-center items-center pt-1 " >
            <Link to='/grammar' className=" text-blue-flag ">GRAMMAR</Link>
            <Link to='/lessons' className=" text-blue-flag ">LESSONS</Link>
            <Link to='/dictionary' className=" text-blue-flag ">DICTIONARY</Link>
            <Link to='/material' className=" text-blue-flag ">MATERIAL</Link>
    </div>
    <FaRegUserCircle className="text-red-flag text-2xl " />
      </div>
        </div>
      );
}

export default NavBar