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
          const res = await axios.get(`https://dutchway.onrender.com/api/getvideos/${videoId}`, {withCredentials: true})
          setVideo(res.data)
        }
        fetchData()
      }, [videoId])

  return (
    <div className='flex flex-col justify-start items-center w-screen h-screen ' >

      <div className="h-1/12 w-full mt-10" >
        <h1 className='text-4xl text-center text-blue-flag' >{video.title}</h1>
        </div>

        <div className='flex flex-col justify-center items-center h-1/12 w-full' >
        <iframe src={video.url} className=" my-10 w-11/12 h-96 " title={video.title}></iframe>
        </div>

        <div className='flex flex-col w-11/12 h-11/12 justify-start overflow-auto bg-slate-50 items-start hover:shadow-xl '>
            <p className="text-left text-lg p-4">{video.text}</p>
        </div>

    </div>
  )
}

export default Video