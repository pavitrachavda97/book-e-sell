import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Registration/Register';
import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;