import { useEffect, useState } from 'react'
// import Select from 'react-select';
import axios from 'axios'
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';

interface Word {
  id: string;
  title: string;
  text: string;
}

// Select Button options when it will be add
// const options = [
//   { value: 'Colections', label: 'Colections' },
//   { value: 'My contents', label: 'My contents' },
//   { value: 'All', label: 'All' },      
// ]
// const customStyles = {
//   control: (provided: any, state: any) => ({
//       ...provided,
//       border: 0,
//       color: 'black',
//       margin: '2px',
//       borderRadius: '5px',
//       backgroundColor: 'white',
//       boxShadow: 'none'
//   }),
//   option: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isSelect ? '#003DA5' : '#ffffff',
//       color: 'black'
//   })
// };

function Posts() {;
    const [posts, setPosts] = useState<Word[]>([]);
    // const [selectOption, setSelectOptions] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / 8);    
     
  // Create a new array containing only the items that should be displayed on the current page
  const indexOfLastItem = currentPage * 8;
  const indexOfFirstItem = indexOfLastItem - 8;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  // Event handler for the "Previous Page" button
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Event handler for the "Next Page" button
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };


  // Filter for user content or default content
  // const handleFilter = () => {
  //   setSelectOptions(selectOption)
  // }

// Desible prev/next icons
  const isFirstPage = currentPage === 1;
  const previousPageClassNames = classNames({
    'icon-disabled': isFirstPage
  });

  const isLastPage = currentPage === totalPages;
  const nextPageClassNames = classNames({
    'icon-disabled': isLastPage
  });

  // Rendered CurrentItems
const renderedPosts = currentItems.map((p) => {   
        return <Link key={p.id} to={`post/${p.id}`} className="flex flex-col shadow-md h-20 w-11/12 justify-center items-center cursor-pointer text-center rounded-lg border-solid border-2 border-blue-flag hover:border-white hover:bg-blue-flag sm:text-2xl text-lg text-blue-flag hover:text-white">{`${p.title.slice(0, 40)}...`}</Link>
})


useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://dutchway.onrender.com/api/getposts`, {withCredentials: true}) 
        setPosts(res.data)
      }
      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return ( <div className="flex flex-col h-screen w-screen justify-start items-center" >
    {/* <div className="flex flex-row h-1/12 mt-4 justify-end items-center w-11/12">
      <Select className=" autofocus:outline-none" defaultValue={selectOption} value={selectOption} styles={customStyles} onChange={handleFilter} options={options} />
    </div> */}

    <div className="flex flex-col justify-center items-center w-screen h-10/12 gap-5 mt-8" >{renderedPosts}</div>

    <div className=" flex flex-row justify-center items-center h-2/12 gap-10 mt-10" >
    <BiFirstPage className={` ${previousPageClassNames} text-4xl text-blue-flag`} onClick={handlePreviousPage} />
<BiLastPage className={` ${nextPageClassNames} text-4xl text-blue-flag`}onClick={handleNextPage}/>
  
  </div>
  </div>
  )
}

export default Posts