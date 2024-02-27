import React from 'react'

const ChatInput = () => {
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative'>
        <textarea rows={1} className='border-0 bg-transparent outline-none w-11/12' />



        <img src="./public/send.png" alt='send-btn' width={20} className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125 active:translate-x-1' />
    </div>
  )
}

export default ChatInput