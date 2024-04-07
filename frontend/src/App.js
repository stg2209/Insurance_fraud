import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ClaimPage from './routes/ClaimPage';
import AdminPage from './routes/AdminPage';
import AdminHomepage from './routes/AdminHomepage';
import NotFraudReports from './routes/NotFraudReports';
import Add_customer from './routes/Add_customer';
import AllReports from './routes/AllReports';
import { useEffect, useState } from 'react';


function App() {
  const [backend_data,set_backend_data]=useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response=>response.json()
      ).then(
        data=>{
          set_backend_data(data)
          console.log(backend_data)
        }
      )

  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ClaimPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/allreports' element={<AllReports/>}/>
        <Route path='/notfraudreports' element={<NotFraudReports/>}/>
        <Route path='/add_customer' element={<Add_customer/>}/>
        <Route path='/adminhomepage' element={<AdminHomepage/>}/>
      </Routes>
    </div>
  );
}
export default App;
