import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './componets/home/Home'
import Login from './componets/login/Login'
import Home2 from './pages/Home2';
import MySubjectPage from './pages/MySubjectPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home2 />} />
        <Route path="/my-subject" element={<MySubjectPage />} />
      </Routes>
    </>
  )
}

export default App
