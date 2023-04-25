import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';

const pageSize = 200;

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState<Word | any>({});
  interface Word {
    id: string;
    title: string;
    text: string;
  }




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
    <div>
      <h1>{post.title}</h1>
      <div>
        <p>{currentPageText}</p>
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