import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './componets/home/Home'
import Login from './componets/login/Login'
import Home2 from './pages/Home2';
import MySubjectPage from './pages/MySubjectPage';
import SubscriptionPage from './pages/SubscriptionPage';
import MessagesPage from './pages/MessagesPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home2 />} />
        <Route path="/my-subject" element={<MySubjectPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </>
  )
}

export default App
