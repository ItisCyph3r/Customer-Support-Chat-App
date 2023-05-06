import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../src/conponents/Welcome'
import { Home } from './pages/home';
import Client from './conponents/client';





function App() {
  return (
    <>
      {/* <div className="App">
        <Home /> 
      </div> */}

      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/chats" element={<Home />} /> */}
        <Route path="/chat/:chatId" element={<Client />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
