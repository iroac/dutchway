import { Link } from 'react-router-dom';

function GrammarPage() {
  return (
    <div className={'flex flex-col h-screen w-screen justify-start items-center mt-10'} >
      <h1 className={'text-4xl text-blue-flag'}>Verb Tenses</h1>


<div className={'flex flex-row w-11/12 justify-center items-center gap-5 sm:gap-20 mt-8'} >
  <div className='flex flex-col justify-center items-center w-1/3 ' >
<Link to="/grammar/past" style={{backgroundImage: `url(/utils/svg/past.jpg)`}} className={'flex rounded-full text-2xl sm:w-40 sm:h-40 h-24 w-24 text-white items-center justify-center bg-contain bg-no-repeat bg-center border-solid border-4 border-blue-flag hover:border-2'}></Link>
<h1 className="text-blue-flag text-2xl" >PAST</h1>
</div> 

  <div className='flex flex-col justify-center items-center w-1/3 ' >
<Link to="/grammar/present" style={{backgroundImage: `url(/utils/svg/present.jpg)`}} className={' flex rounded-full text-2xl sm:w-40 sm:h-40 h-24 w-24 text-white items-center justify-center bg-contain bg-no-repeat bg-center border-solid border-4 border-red-flag hover:border-2 '}></Link>
<h1 className="text-red-flag text-2xl" >PRESENT</h1>
</div>

  <div className='flex flex-col justify-center items-center w-1/3 ' >
<Link to="/grammar/future" style={{backgroundImage: `url(/utils/svg/future.jpg)`}} className={' flex rounded-full text-2xl sm:w-40 sm:h-40 h-24 w-24 text-white items-center justify-center bg-contain bg-no-repeat bg-center border-solid border-4 border-blue-flag hover:border-2'}></Link>
<h1 className="text-blue-flag text-2xl" >FUTURE</h1>
</div> 
</div>

<hr className='border-2 border-blue-flag w-11/12 mt-10'/>
<h1 className={'text-4xl text-blue-flag mt-10'}>Structure</h1>
<div className={'flex flex-row w-full justify-center items-center mt-10'} >
<Link to='/grammar/structure/adjectives' className={' flex items-center justify-center w-1/3 '}> <div className="flex sm:text-2xl text-1xl rounded-full sm:w-40 sm:h-40 h-24 w-24 text-white bg-blue-flag items-center justify-center">ADJECTIVES</div> </Link>
<Link to='/grammar/structure/modalverbs' className={' flex items-center justify-center w-1/3 '}> <div  className="flex sm:text-2xl text-1xl rounded-full sm:w-40 sm:h-40 h-24 w-24 text-white bg-blue-flag items-center justify-center text-center " >MODAL VERBS</div> </Link>
<Link to='/grammar/structure/articles' className={' flex  items-center justify-center w-1/3'}><div className="flex sm:text-2xl text-1xl rounded-full sm:w-40 sm:h-40 h-24 w-24 text-white bg-blue-flag items-center  justify-center">ARTICLES</div></Link>
</div>
    </div> 
  )
}

export default GrammarPage