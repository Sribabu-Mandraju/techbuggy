import React from 'react'
import Home from '../componets/home/Home'
import Subscription from '../componets/subscription/Subscription.jsx'

const SubscriptionPage = () => {
  return (
    <>
        <Home children={<Subscription />} />
    </>
  )
}

export default SubscriptionPage
