import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;