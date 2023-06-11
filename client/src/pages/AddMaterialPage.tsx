import { useState } from 'react'
import axios from 'axios'
import {RxVideo} from 'react-icons/rx';
import {BiBookBookmark} from 'react-icons/bi';

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
  let newPost = { title: textTitle, text: textContent, category: 'mycontent'}
  await axios.post('http://localhost:3000/contentpost', newPost)
  setTextTitle('')
  setTextContent('')
}


const addVideo = async (event: any) => {
  event.preventDefault()

  const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = videoUrl.match(youtubeRegex);
  const id = match && match[2] ? match[2] : null;
  
  let embedUrl = `https://www.youtube.com/embed/${id}`;
  let thumbnail = `https://img.youtube.com/vi/${id}/0.jpg`

  let newVideo = { title: videoTitle, text: videoContent, url: embedUrl, thumbnail: thumbnail }
  await axios.post('http://localhost:3000/contentvideo', newVideo)
  setVideoContent('')
  setTitleVideo('')
  setVideoUrl('')
}



  return (
    <div>

<div className=" flex justify-center items-center h-screen w-screen" >

{
  initialView && (
<div className="flex flex-row justify-center items-center gap-10 " >
<div onClick={() => { setInitialView(false); setTextAddView(true) }}  className=" flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-red-flag"> <BiBookBookmark className="text-8xl text-red-flag" /> <h1 className="text-xl text-red-flag" > ADD TEXT</h1> </div>
<div onClick={() => { setInitialView(false); setVideoAddView(true) }} className="flex flex-col mx-auto shadow-md h-52 w-52 justify-center items-center cursor-pointer hover:shadow-blue-flag" ><RxVideo className="text-8xl text-blue-flag" /> <h1 className="text-xl text-blue-flag" >ADD VIDEO</h1> </div>
</div>
  )
}






{textAddView && (<form className="flex flex-col justify-start items-start shadow-lg w-screen " >

  <h1 className="text-2xl text-blue-flag" >Title</h1>
  <input className=" w-full h-9 " value={textTitle} onChange={handleTitleChange}  />
  
  <h1 className="text-2xl text-blue-flag mt-10" >Content</h1>
  <textarea maxLength={1200} className=" w-full " value={textContent} onChange={handleContentChange} ></textarea>
  
  <button className=" ml-2 text-2xl bg-blue-flag text-white rounded-sm px-2 py-1 mt-10 mb-5 " onClick={addPost} >Post</button>
  
  </form>)}




{videoAddView && (<form className="flex flex-col justify-start items-start shadow-lg w-screen " >

  <h1 className="text-2xl text-blue-flag" >Title</h1>
  <input className=" w-full h-9 " value={videoTitle} onChange={(e) => {setTitleVideo(e.target.value)}}  />

  <h1 className="text-2xl text-blue-flag" >Url</h1>
  <input className=" w-full h-9 " value={videoUrl} onChange={(e) => {setVideoUrl(e.target.value)}}  />
  
  <h1 className="text-2xl text-blue-flag mt-10" >Video Content</h1>
  <textarea maxLength={1200} className=" w-full " value={videoContent} onChange={(e) => {setVideoContent(e.target.value)}} ></textarea>
  
  <button className=" ml-2 text-2xl bg-blue-flag text-white rounded-sm px-2 py-1 mt-10 mb-5 " onClick={addVideo} >Post</button>
  
  </form>)}

</div>
    </div>
  )
}

export default AddMaterialPage