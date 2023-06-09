import { Link } from 'react-router-dom';

function GrammarPage() {
  return (
    <div className={'flex flex-col h-screen w-screen justify-start items-center mt-20'} >
      <h1 className={'text-4xl text-blue-flag'}>Verb Tenses</h1>
<div className={'flex flex-row w-full justify-center items-center gap-20 mt-10'} >

  <div className='flex flex-col justify-center items-center ' >
<Link to="/grammar/past" style={{backgroundImage: `url(/utils/svg/past.jpg)`}} className={'flex rounded-full text-3xl w-40 h-40 text-white items-center justify-center bg-contain bg-no-repeat bg-center border-solid border-4 border-blue-flag hover:border-2'}></Link>
<h1 className="text-blue-flag text-3xl" >PAST</h1>
</div> 

  <div className='flex flex-col justify-center items-center ' >
<Link to="/grammar/present" style={{backgroundImage: `url(/utils/svg/present.jpg)`}} className={' flex rounded-full text-3xl w-40 h-40 text-white items-center justify-center bg-contain bg-no-repeat bg-center border-solid border-4 border-red-flag hover:border-2 '}></Link>
<h1 className="text-red-flag text-3xl" >PRESENT</h1>
</div>

  <div className='flex flex-col justify-center items-center ' >
<Link to="/grammar/future" style={{backgroundImage: `url(/utils/svg/future.jpg)`}} className={' flex rounded-full text-3xl w-40 h-40 text-white items-center justify-center bg-contain bg-no-repeat bg-center border-solid border-4 border-blue-flag hover:border-2'}></Link>
<h1 className="text-blue-flag text-3xl" >FUTURE</h1>
</div> 


</div>
<hr className='border-2 border-blue-flag w-11/12 mt-10'/>
<h1 className={'text-4xl text-blue-flag mt-10'}>Structure</h1>
<div className={'flex flex-row w-full justify-center items-center gap-20 mt-10'} >
<Link to='/grammar/structure/adjectives' className={' flex rounded-full text-2xl w-40 h-40 text-white bg-blue-flag items-center justify-center'}>ADJECTIVES</Link>
<Link to='/grammar/structure/modalverbs' className={' flex rounded-full text-1xl w-40 h-40 text-white bg-blue-flag items-center justify-center'}>MODAL VERBS</Link>
<Link to='/grammar/structure/articles' className={' flex rounded-full text-2xl w-40 h-40 text-white bg-blue-flag items-center justify-center'}>ARTICLES</Link>
</div>
    </div> 
  )
}

export default GrammarPage