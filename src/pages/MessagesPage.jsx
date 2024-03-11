import React from 'react'
import Home from '../componets/home/Home'
import Messages from '../componets/messages/Messages'

const MessagesPage = () => {
  return (
    <>
        <Home children={<Messages />} />
    </>
  )
}

export default MessagesPage
