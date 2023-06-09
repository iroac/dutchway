import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

const pageSize = 1000;
interface Word {
  id: string;
  title: string;
  text: string;
}

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState<Word | any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  function handlePageChange(pageNum: number) {
    setCurrentPage(pageNum);
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageText: string = post.text?.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/contentpost/${postId}`)
      setPost(res.data)
      setNumPages(Math.ceil(res.data.text.length / pageSize));
    }
    fetchData()
  }, [postId])
  return (
    <div className="flex flex-col w-screen h-screen justify-start items-start p-4 " >

    {currentPage === 1 ? <h1 className="text-center text-4xl text-blue-flag my-6 h-1/12 " >{post.title}</h1> : ''}  
      
      
        <div className="flex flex-col h-11/12 w-11/12 justifiy-start items-start" >
        <p className="text-xl text-left leading-9 mx-4" >{currentPageText}</p>
        </div>

        <div className="flex flex-row w-screen justify-center h-1/12 items-end mt-auto" >
        {numPages > 1 &&
          Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
            <button className=" text-xl text-blue-flag hover:text-red-flag"  key={pageNum} onClick={() => handlePageChange(pageNum)}>
              {pageNum}
            </button>
          ))}
          </div>
      
    </div>
  )
}

export default Post