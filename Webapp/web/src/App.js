import './App.css'
import React, {useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import SignupPage from "./NotLoggedIn/SignupPage/SignupPage";
import SigninPage from './NotLoggedIn/LoginPage/SigninPage';
import LoggedIn from './LoggedIn/LoggedIn'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)


  if (isLoggedIn) return <LoggedIn/>

  return (
      <>
        <div className='app'>
          <Routes>
            <Route path="/" element={<SigninPage />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </>
  );
}
export default App;
