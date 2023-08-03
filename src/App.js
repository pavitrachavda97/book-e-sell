import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routers>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routers>
      </div>
    </BrowserRouter>
  );
}

export default App;