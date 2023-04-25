import { useState } from 'react'
import axios from 'axios'

function AddMaterialPage() {
const [content, setContent] = useState<String>('')
const [title, setTitle] = useState<String>('')


const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
 setContent(event.target.value)
}


const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 setTitle(event.target.value)
}


const addPost = (event: any) => {
  event.preventDefault()
  let newPost = { title: title, text: content }
  axios.post('http://localhost:3000/contentpost', newPost)
}



  return (
    <div>

<form className="flex flex-col justify-start items-start " >

<h1 className="text-2xl text-blue-flag" >Title</h1>
<input className=" w-full h-9 " onChange={handleTitleChange}  />

<h1 className="text-2xl text-blue-flag mt-10" >Content</h1>
<textarea maxLength={1200} className=" w-full " onChange={handleContentChange} ></textarea>

<button className=" ml-2 text-2xl bg-blue-flag text-white rounded-sm px-2 py-1 mt-10 " onClick={addPost} >Post</button>

</form>

    </div>
  )
}

export default AddMaterialPage