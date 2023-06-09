import {BiBookBookmark} from 'react-icons/bi';
import {RxVideo} from 'react-icons/rx';
import { Link } from "react-router-dom";

function App() {
  return (<div className="flex flex-col justify-start items-center h-screen w-screen" >
      <div className="flex flex-col justify-center items-center h-1/12 w-screen" >
        <div className='flex flex-row justify-center items-center'>
        <h1 className="text-4xl text-blue-flag mt-10 mb-4" >DAILY PLAN</h1>
        <img src="/utils/svg/startsticker.gif" className='h-16 w-16' />
        </div>

        <div className='flex flex-row justify-center items-center w-screen gap-2' >
        <div className="h-2 rounded-full bg-slate-200 w-8/12" ></div>
        <h1 className="text-blue-flag" >0/3</h1>
        </div>
      </div>


      <div className="flex flex-col w-11/12 h-11/12 gap-10 mt-10">
        <div className="flex flex-row w-full h-48 justify-start items-center px-2 shadow-lg" >
<BiBookBookmark className="text-8xl h-36 w-3/12 ml-4 text-red-flag" />
<Link to='/posts' className='flex flex-col h-32 ml-12 w-8/12 items-start'> 
<h1 className='text-blue-flag text-2xl'>TASK 1</h1> 
<h1 className='text-blue-flag text-lg' >READ TEXT MATERIAL</h1>
</Link>
<div className='flex justify-end w-1/12 h-full items-start' >
<input className='form-checkbox mt-9 mr-5 h-6 w-6 rounded-full border border-solid text-red-flag ' type='checkbox'  />
</div>
        </div>

        
        <div className="flex flex-row w-full h-48 justify-start items-center px-2 shadow-lg" >
        <img src='/utils/svg/timetolearn.png'  className=' h-36 w-4/12 ml-4 items-center ' />
<Link to='/lessons' className='flex flex-col h-32 ml-12 w-8/12 items-start'> 
<h1 className='text-blue-flag text-2xl'>TASK 2</h1> 
<h1 className='text-blue-flag text-lg' >COMPLETE THE DAILY LESSON</h1>
</Link>
<div className='flex justify-end w-1/12 h-full items-start' >
<input className='form-checkbox mt-9 mr-5 h-6 w-6 rounded-full border border-solid text-red-flag ' type='checkbox'  />
</div>
        </div>


        <div className="flex flex-row w-full h-48 justify-start items-center px-2 shadow-lg" >
        <RxVideo className="text-8xl h-36 w-4/12 ml-4 text-red-flag" />
        <Link to='/videos' className='flex flex-col h-32 ml-12 w-8/12 items-start'> 
<h1 className='text-blue-flag text-2xl'>TASK 3</h1> 
<h1 className='text-blue-flag text-lg' >COMPLETE THE DAILY LESSON</h1>
</Link>
<div className='flex justify-end w-1/12 h-full items-start' >
<input className='form-checkbox mt-9 mr-5 h-6 w-6 rounded-full border border-solid text-red-flag ' type='checkbox'  />
</div>
        </div>

   


      </div>

    </div>
  )
}

export default App;
 