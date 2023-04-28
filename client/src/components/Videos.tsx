import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';

function Videos() {
  const [video, setVideo] = useState<Video[]>([]);
  interface Video {
          id: string;
          title: string;
          text: string;
          url: string;
        }
  
        const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(video.length / 3);    
  
    // Create a new array containing only the items that should be displayed on the current page
    const indexOfLastItem = currentPage * 3;
    const indexOfFirstItem = indexOfLastItem - 3;
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
          return <div key={p.id} >
              <Link to={`video/${p.id}`} className=" flex flex-col mx-auto shadow-md h-20 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-xl text-blue-flag" >{`${p.title.slice(0, 40)}...`}</h1> </Link>
                  </div>
  })
  
  
  useEffect(() => {
      const fetchData = async () => {
          const res = await axios.get(`http://localhost:3000/contentvideo/`)
          setVideo(res.data)
        }
        fetchData()
  }, [])
    return ( <div>
      <div>{renderedvideo}</div>
      <div className=" flex flex-row justify-center items-center gap-10 " >
      <BiFirstPage className={` ${previousPageClassNames} text-4xl text-blue-flag  `} onClick={handlePreviousPage} />
  <BiLastPage className={` ${nextPageClassNames} text-4xl text-red-flag  `}onClick={handleNextPage}/>
    
    </div>
    </div>
    )
  }

export default Videos