import React from 'react'

const ChatMessage = () => {
  return (
    <div className={`flex ${
        true?"justify-start":"justify-end"}`}>
<div className={`p-1 ${true?"rounded-md" :"px-5 rounded-full"} bg-[#191c29] text-white`}>
    {true &&  <img className="w-[12rem] h-[17rem] object-cover rounded-md" alt=""  src='https://cdn.pixabay.com/photo/2024/07/31/21/16/ai-generated-8935605_640.png'/>}
    <p className={`${true?"py-2":"py-1"}`} >message</p>
</div>

    </div>
  )
}

export default ChatMessage