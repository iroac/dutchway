import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
  <div className=" flex flex-row justify-center items-center shadow-md w-full h-10" >
    <div className=" grow-0 " >
      <img className="w-32 h-auto " src='/dutchwaylogo.png' />
    </div>
    <div className="flex flex-row gap-10 grow justify-center items-center " >
<h1 className=" text-blue-flag " > GRAMMAR </h1>
<h1 className=" text-blue-flag " > LESSONS </h1>
<h1 className=" text-blue-flag " > DICTIONARY </h1>
<h1 className=" text-blue-flag " > MATERIAL </h1>
</div>
<FaRegUserCircle className="text-red-flag text-2xl " />
  </div>
    </div>
  );
}

export default App;
 