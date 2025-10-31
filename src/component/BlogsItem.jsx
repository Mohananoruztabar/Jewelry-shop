import React from 'react'

function BlogsItem(props) {
  return (
    <div className='gap-10'>
        <div className='border w-[400px] border-trans h-[600px]'>
            <figure className='overflow-hidden '>
                <img className='h-[300px] hover:scale-105 object-cover hover:duration-700 ease-initial' src={props.img} alt="" />
            </figure>
            <div className='px-5'>
                <h6 className='text-gray-400 mt-5'>{props.title}</h6>
                <h2 className='text-2xl font-bold mt-1'>{props.name}</h2>
                <p className=' mt-4'>{props.description}</p>
                <button className='text-pink hover:text-black mt-4 mb-10'>Read more <i className="ri-arrow-right-long-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default BlogsItem