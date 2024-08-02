import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emoji'

function Conversations() {
  const {loading,conversations} = useGetConversations()
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx)=>{
           return <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIndx={idx === conversation.length - 1}/>
        })
      }
        {
          loading ? <span className='loading loading-spinner'></span> : null
        }
    </div>
  )
}

export default Conversations



// function Conversations() {
//     return (
//       <div className='py-2 flex flex-col overflow-auto'>
//           <Conversation/>
//           <Conversation/>
//           <Conversation/>
//           <Conversation/>
//           <Conversation/>
//       </div>
//     )
//   }
  
//   export default Conversations