import {BiBookBookmark} from 'react-icons/bi';
import {RxVideo} from 'react-icons/rx';
import {MdRadioButtonUnchecked} from 'react-icons/md';
import {MdOutlineCheckCircleOutline} from 'react-icons/md';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

function App() {
const [currentDay, setCurrentDay] = useState(new Date().getDate());
const [doneTasks, setDoneTasks] = useState<boolean[]>([false,false,false])
const handleRadioClick = (index: number) => {
  let newValue = [ ...doneTasks ]
  newValue[index] = !newValue[index]
  setDoneTasks(newValue)
}

const sumTrueValues = doneTasks.reduce((sum, value) => {
  if (value === true) {
    return sum + 1;
  }
  return sum;
}, 0);

useEffect(() =>  {

  // const fetchdata = async () => {
  //   const datatest = await axios.get('http://localhost:3012/api/getwords/1')  
  //   datatest.data.phrases = JSON.parse(datatest.data.phrases)
  // console.log(datatest.data)  
  // }


  const interval = setInterval(() => {
    const newDay = new Date().getDate();
    if (newDay !== currentDay) {
      setDoneTasks([false,false,false])
      setCurrentDay(newDay);
    }
  }, 1000); // Check every second for day change

  // fetchdata()   
  return () => {
    clearInterval(interval); // Cleanup the interval on component unmount
  };
}, [currentDay]);
  return (<div className="flex flex-col justify-start items-center h-screen w-screen" >
      <div className="flex flex-col justify-center items-center h-1/12 w-screen" >
        <div className='flex flex-row justify-center items-center'>
        <h1 className="text-4xl text-blue-flag mt-10 mb-4" >DAILY PLAN</h1>
        <img src="/utils/svg/startsticker.gif" alt='start sticker' className='h-16 w-16' />
        </div>

        <div className='flex flex-row justify-center items-center w-screen gap-2' >
        <div className="flex justify-start items-center h-2 rounded-full bg-slate-200 w-8/12" >
{doneTasks[0] && <div className="h-2 rounded-l-full bg-blue-flag w-1/3"></div>}
{doneTasks[1] && <div className="h-2 bg-blue-flag w-1/3"></div>}
{doneTasks[2] && <div className="h-2 rounded-r-full bg-blue-flag w-1/3"></div>}
        </div>
        <h1 className="text-blue-flag" >{sumTrueValues}/3</h1>
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
{doneTasks[0] ? <MdOutlineCheckCircleOutline className="text-4xl mt-9 mr-5 text-blue-flag"  onClick={() => handleRadioClick(0)} /> : <MdRadioButtonUnchecked className="text-4xl mt-9 mr-5 text-blue-flag"   onClick={() => handleRadioClick(0)} />}
</div>
        </div>

        
        <div className="flex flex-row w-full h-48 justify-start items-center px-2 shadow-lg" >
       <div className="flex justify-center items-center h-36 w-3/12 ml-4"> <img src='/utils/svg/timetolearn.png' alt='time to learn'  className=' pl-2 h-36 w-36' /> </div>
<Link to='/lessons' className='flex flex-col h-32 ml-12 w-8/12 items-start'> 
<h1 className='text-blue-flag text-2xl'>TASK 2</h1> 
<h1 className='text-blue-flag text-lg' >COMPLETE THE DAILY LESSON</h1>
</Link> 
<div className='flex justify-end w-1/12 h-full items-start' >
{doneTasks[1] ? <MdOutlineCheckCircleOutline className="text-4xl mt-9 mr-5 text-blue-flag"  onClick={() => handleRadioClick(1)} /> : <MdRadioButtonUnchecked className="text-4xl mt-9 mr-5 text-blue-flag"   onClick={() => handleRadioClick(1)} />}
</div>
        </div>


        <div className="flex flex-row w-full h-48 justify-start items-center px-2 shadow-lg" >
        <RxVideo className="text-8xl h-36 w-3/12 ml-4 text-red-flag" />
        <Link to='/videos' className='flex flex-col h-32 ml-12 w-8/12 items-start'> 
<h1 className='text-blue-flag text-2xl'>TASK 3</h1> 
<h1 className='text-blue-flag text-lg' >COMPLETE THE DAILY LESSON</h1>
</Link>
<div className='flex justify-end w-1/12 h-full items-start' >
{doneTasks[2] ? <MdOutlineCheckCircleOutline className="text-4xl mt-9 mr-5 text-blue-flag"  onClick={() => handleRadioClick(2)} /> : <MdRadioButtonUnchecked className="text-4xl mt-9 mr-5 text-blue-flag"   onClick={() => handleRadioClick(2)} />}
</div>
        </div>
   


      </div>

    </div>
  )
}

export default App;
 