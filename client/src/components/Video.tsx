import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

function Video() {
    const { videoId } = useParams();
    const [video, setVideo] = useState<Video | any>({});
    interface Video {
        id: string;
        title: string;
        text: string;
        url: string;
      }




    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:3000/contentvideo/${videoId}`)
          setVideo(res.data)
        }
        fetchData()
      }, [videoId])

  return (
    <div>
        <h1>{video.title}</h1>
        <iframe src={video.url} height="200" width="300" title={video.title}></iframe>
        <div>
            <p>{video.text}</p>
        </div>
    </div>
  )
}

export default Video