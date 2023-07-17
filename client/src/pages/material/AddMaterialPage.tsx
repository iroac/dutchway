import { useState } from 'react'
import axios from 'axios'
import {RxVideo} from 'react-icons/rx';
import {BiBookBookmark} from 'react-icons/bi';
import { toast } from 'react-toastify';

function AddMaterialPage() {
const [textContent, setTextContent] = useState<string>('')
const [textTitle, setTextTitle] = useState<string>('')
const [videoTitle, setTitleVideo] = useState<string>('')
const [videoContent, setVideoContent] = useState<string>('')
const [videoUrl, setVideoUrl] = useState<string>('')
const [textAddView, setTextAddView] = useState<Boolean>(false)
const [videoAddView, setVideoAddView] = useState<Boolean>(false)
const [initialView, setInitialView] = useState<Boolean>(true)



const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
 setTextContent(event.target.value)
}

const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 setTextTitle(event.target.value)
}

const addPost = async (event: any) => {
  event.preventDefault()

  if(textTitle.length > 100) {
    toast.error('Long title length, try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTextTitle('') 
    } else {
  let newPost = { title: textTitle, text: textContent, category: 'mycontent'}
  let res = await axios.post('http://localhost:3012/api/addpost/', newPost,  {withCredentials: true})
  if(res) {
    toast.success('Text add successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  } 
  setTextTitle('')
  setTextContent('') 
  setTextAddView(false)
  setInitialView(true)
}}


const addVideo = async (event: any) => {
  event.preventDefault()

  if(videoTitle.length > 100) {
    toast.error('Long title length, try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTitleVideo('')
    } else {
      const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
      const match = videoUrl.match(youtubeRegex);
      const id = match && match[2] ? match[2] : null;
      
      let embedUrl = `https://www.youtube.com/embed/${id}`;
      let thumbnail = `https://img.youtube.com/vi/${id}/0.jpg`
    
      let newVideo = { title: videoTitle, text: videoContent, url: embedUrl, thumbnail: thumbnail }
      let res = await axios.post('http://localhost:3012/api/addvideo/', newVideo,  {withCredentials: true})
      if(res) {
        toast.success('Video add successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      setVideoContent('')
      setTitleVideo('')
      setVideoUrl('')
      setVideoAddView(false)
      setInitialView(true)
    }
}



  return (
    <div>

<div className={`flex justify-center items-center h-screen w-screen`} >

{
  initialView && (
<div className="flex flex-row justify-center items-center gap-10 " >
<div onClick={() => { setInitialView(false); setTextAddView(true) }}  className=" flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-red-flag"> <BiBookBookmark className="text-8xl text-red-flag" /> <h1 className="text-xl text-red-flag" > ADD TEXT</h1> </div>
<div onClick={() => { setInitialView(false); setVideoAddView(true) }} className="flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-blue-flag" ><RxVideo className="text-8xl text-blue-flag" /> <h1 className="text-xl text-blue-flag" >ADD VIDEO</h1> </div>
</div>
  )
}






{textAddView && (<form className="flex flex-col justify-start items-start shadow-lg w-11/12 border-2 rounded-lg border-blue-flag border-solid px-4 pt-5 pb-2" >

  <h1 className="text-2xl text-blue-flag" >Title</h1>
  <input className=" w-full h-9 border-2 border-solid border-blue-flag " value={textTitle} onChange={handleTitleChange}  />
  
  <h1 className="text-2xl text-blue-flag mt-8" >Content</h1>
  <textarea maxLength={1200} className=" w-full border-2 border-solid border-blue-flag " value={textContent} onChange={handleContentChange} ></textarea>
  
  <div className='flex flex-row w-full h-fit justify-end items-center' >
  <button className="text-2xl bg-blue-flag text-white rounded-sm px-2 py-1 mt-8" onClick={addPost} >Post</button>
  </div>
  
  </form>)}




{videoAddView && (<form className="flex flex-col justify-start items-start shadow-lg w-11/12 border-2 rounded-lg border-blue-flag border-solid px-4 pt-5 pb-2" >

  <h1 className="text-2xl text-blue-flag" >Title</h1>
  <input className=" w-full h-9 border-2 border-solid border-blue-flag " value={videoTitle} onChange={(e) => {setTitleVideo(e.target.value)}}  />

  <h1 className="text-2xl text-blue-flag mt-5" >Url</h1>
  <input className=" w-full h-9 border-2 border-solid border-blue-flag " value={videoUrl} onChange={(e) => {setVideoUrl(e.target.value)}}  />
  
  <h1 className="text-2xl text-blue-flag mt-5" >Video Content</h1>
  <textarea maxLength={1200} className=" w-full h-20 border-2 border-solid border-blue-flag " value={videoContent} onChange={(e) => {setVideoContent(e.target.value)}} ></textarea>
  
  <div className='flex flex-row w-full h-fit justify-end items-center' >
  <button className="text-2xl bg-blue-flag text-white rounded-sm px-2 py-1 mt-8" onClick={addVideo} >Post</button>
  </div>
  
  </form>)}

</div>
    </div>
  )
}

export default AddMaterialPage