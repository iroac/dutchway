import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState<Word[]>([]);
interface Word {
        _id: string;
        title: string;
        text: string;
      }

const renderedPost = post.map((p) => {

    if (p._id == postId) {
        return <div key={p._id} >
        <h1>{p.title}</h1>
        <p>{p.text}</p>
                </div>
    }
})


useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:3000/contentpost/`)
        setPost(res.data)
      }
      fetchData()
}, [])

  return (
    <div>{renderedPost}</div>
  )
}

export default Post