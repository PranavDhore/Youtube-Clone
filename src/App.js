import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainYoutube from './pages/MainYoutube';
import VideoDetails from './pages/VideoDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainYoutube />} />
        <Route path='/watch/:videoId' element={<VideoDetails />} />
      </Routes>
      

    </BrowserRouter>
    
  );
}

export default App;
