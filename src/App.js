

import { Routes,Route } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import WeeklyView from './components/weeklyview';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title="habit tracker";
  },[])
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/week-view" element={<WeeklyView/>}/>
    
   </Routes>

   </>
    
  );
}

export default App;
