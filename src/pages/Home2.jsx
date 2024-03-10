import React from 'react'
import Home from '../componets/home/Home'
import Login from '../componets/login/Login'
import Test from '../componets/Test'

const Home2 = () => {
    return (
        <div>
            <Home children={<Test />} />
        </div>
    )
}

export default Home2
