import React from 'react'
import NewsLetterComponents from '@/components/NewsLetterComponents'

const page = () => {
  return (
    <div className='bg-white flex flex-col justify-between min-h-screen pt-10'>
      <div className='lg:px-0'>
        <NewsLetterComponents />
      </div>
    </div>
  )
}

export default page
