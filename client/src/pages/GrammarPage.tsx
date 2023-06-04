import { Link } from 'react-router-dom';

function GrammarPage() {
  return (
    <div className={'flex flex-col h-screen w-screen justify-start items-center mt-20'} >
      <h1 className={'text-4xl text-blue-flag'}>Verb Tenses</h1>
<div className={'flex flex-row w-full justify-center items-center gap-20 mt-10'} >
<Link to="/grammar/past" className={' flex rounded-full text-3xl w-40 h-40 text-white bg-red-flag items-center justify-center'}>PAST</Link>
<Link to="/grammar/present" className={' flex rounded-full text-3xl w-40 h-40 text-white bg-red-flag items-center justify-center'}>PRESENT</Link>
<Link to="/grammar/future" className={' flex rounded-full text-3xl w-40 h-40 text-white bg-red-flag items-center justify-center'}>FUTURE</Link>
</div>
<hr className='border-2 border-blue-flag w-11/12 mt-10'/>
<h1 className={'text-4xl text-blue-flag mt-10'}>Structure</h1>
<div className={'flex flex-row w-full justify-center items-center gap-20 mt-10'} >
<Link to='/grammar/adjectives' className={' flex rounded-full text-2xl w-40 h-40 text-white bg-blue-flag items-center justify-center'}>ADJECTIVES</Link>
<Link to='/grammar/modalverbs' className={' flex rounded-full text-1xl w-40 h-40 text-white bg-blue-flag items-center justify-center'}>MODAL VERBS</Link>
<Link to='/grammar/articles' className={' flex rounded-full text-2xl w-40 h-40 text-white bg-blue-flag items-center justify-center'}>ARTICLES</Link>
</div>
    </div> 
  )
}

export default GrammarPage