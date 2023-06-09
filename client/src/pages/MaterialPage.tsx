import {RxVideo} from 'react-icons/rx';
import {BiBookBookmark} from 'react-icons/bi';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import { Link } from "react-router-dom";

function MaterialPage() {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen " > 
<Link to="/posts" className=" flex flex-col mx-auto group shadow-md h-52 w-52 justify-center items-center cursor-pointer rounded-xl  hover:shadow-red-flag hover:bg-red-flag text-xl text-red-flag hover:text-white hover:rounded-2xl"> <BiBookBookmark className="text-8xl text-red-flag group-hover:text-white" />TEXT</Link>
<Link to="/videos" className="flex flex-col mx-auto group shadow-md h-52 w-52 justify-center items-center cursor-pointer rounded-xl hover:shadow-blue-flag hover:bg-blue-flag text-xl text-blue-flag hover:text-white hover:rounded-2xl " ><RxVideo className="text-8xl text-blue-flag group-hover:text-white" /> VIDEOS </Link>
<Link to="/addmaterial" className=" flex flex-col mx-auto group shadow-md h-52 w-52 justify-center items-center cursor-pointer rounded-xl hover:shadow-red-flag hover:bg-red-flag text-xl text-red-flag hover:text-white hover:rounded-2xl" > <AiOutlineAppstoreAdd className="text-8xl text-red-flag group-hover:text-white" />ADD</Link>
    </div>
  )
}

export default MaterialPage