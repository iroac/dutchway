import {RxVideo} from 'react-icons/rx';
import {BiBookBookmark} from 'react-icons/bi';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import { Link } from "react-router-dom";

function MaterialPage() {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen " > 
<Link to="/posts" className=" flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-red-flag"> <BiBookBookmark className="text-8xl text-red-flag" /> <h1 className="text-xl text-red-flag" >TEXT</h1> </Link>
<Link to="/videomaterial" className="flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-blue-flag" ><RxVideo className="text-8xl text-blue-flag" /> <h1 className="text-xl text-blue-flag" >VIDEOS</h1> </Link>
<Link to="/addmaterial" className=" flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-red-flag" > <AiOutlineAppstoreAdd className="text-8xl text-red-flag" /> <h1 className="text-xl text-red-flag" >ADD</h1> </Link>
    </div>
  )
}

export default MaterialPage