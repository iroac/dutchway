import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';

interface Video {
  id: string;
  title: string;
  text: string;
  url: string;
  thumbnail: string;
}

function Videos() {
  const [video, setVideo] = useState<Video[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(video.length / 8);    
  
    // Create a new array containing only the items that should be displayed on the current page
    const indexOfLastItem = currentPage * 8;
    const indexOfFirstItem = indexOfLastItem - 8;
    const currentItems = video.slice(indexOfFirstItem, indexOfLastItem);
  
    // Event handler for the "Previous Page" button
    const handlePreviousPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    // Event handler for the "Next Page" button
    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
  
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
  const renderedvideo = currentItems.map((p) => {   
          return (<div className="flex flex-col group shadow-md justify-cente h-44 w-48 items-center cursor-pointer rounded-lg border-solid border-4 bg-blue-flag border-blue-flag hover:bg-white " >
           <div className="flex flex-grow justify-start items-center w-full h-3/4 overflow-hidden" ><img src={p.thumbnail} className="w-full h-44" /></div>
            <Link key={p.id} to={`video/${p.id}`} className="w-full h-1/4 flex justify-center items-center flex-col text-center text-md text-white group-hover:text-blue-flag">{`${p.title.slice(0, 40)}...`}</Link>
          </div>)              
  })
  
  
  useEffect(() => {
      const fetchData = async () => {
          const res = await axios.get(`http://localhost:3000/contentvideo/`)
          setVideo(res.data)
        }
        fetchData()
  }, [])
    return ( <div className="flex flex-col h-screen w-screen justify-start items-center">
      <div className="flex flex-wrap justify-center items-center w-screen h-10/12 gap-5 mt-8" >{renderedvideo}</div>
      <div className=" flex flex-row justify-center items-center gap-10 mt-10" >
      <BiFirstPage className={` ${previousPageClassNames} text-4xl text-blue-flag  `} onClick={handlePreviousPage} />
  <BiLastPage className={` ${nextPageClassNames} text-4xl text-red-flag  `}onClick={handleNextPage}/>
    </div>
    </div>
    )
  }

export default Videos