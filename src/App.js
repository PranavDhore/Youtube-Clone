import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainYoutube from './pages/MainYoutube';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainYoutube />} />
      </Routes>
      

    </BrowserRouter>
    
  );
}

export default App;
