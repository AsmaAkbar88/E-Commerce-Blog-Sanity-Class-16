'use client'

import React, { useState } from 'react'
import { stylefont } from '../UI/fonts';

const CommentsSec = () => {
const [comments, setComments] = useState<string[]>([]);
const [comment, setComment] = useState<string>("");

const add_Comment = () => {
    if(comment.trim() === "") return ;
    setComments([...comments, comment]);
    setComment("");
};

  return (
    <div >
      
        <h1 className={`${stylefont.className}  text-4xl font-bold mt-8`}>Comments</h1>
        <ul> {comments.map((c, index) => (
            <li key={index}>{c}</li>
        ))}

        </ul>

        <textarea value={comment} 
        onChange={(e) => setComment(e.target.value)}
        placeholder='Write Your Comments Here'
        className='border border-blue-900 mt-4'>

        </textarea><br />
        <button onClick={add_Comment} className='
         bg-black text-white rounded-full  py-3  px-6 mt-4 hover:bg-white
          hover:text-black border-2 border-black
        ' >Add Comments</button>
    
    </div>
  )
}

export default CommentsSec
