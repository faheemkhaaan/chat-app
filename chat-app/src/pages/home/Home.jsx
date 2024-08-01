import React from 'react'
import Sidebar from '../../componets/sidebar/Sidebar'
import MessageContianer from '../../componets/messages/MessageContianer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContianer/>
    </div>
  )
}

export default Home