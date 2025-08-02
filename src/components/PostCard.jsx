import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
         <img
  src={appwriteService.getFilePreview(featuredImage, 300, 200, 75)}
  alt={title}
  className="rounded-lg w-full h-48 object-contain bg-white mx-auto"
/>

        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
