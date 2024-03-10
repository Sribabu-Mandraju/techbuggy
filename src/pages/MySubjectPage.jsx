import React from 'react'
import Home from '../componets/home/Home'
import MySubject from '../componets/my-subject/MySubject'

const MySubjectPage = () => {
  return (
    <>
      <Home children={<MySubject />} />
    </>
  )
}

export default MySubjectPage
