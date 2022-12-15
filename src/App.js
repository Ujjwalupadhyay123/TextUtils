//import logo from './logo.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [darkModeColor, setdarkModeColor] = useState('black')

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = darkModeColor;
      showAlert("Dark Mode Enabled" ,"success")
      document.title='TextUtils(DarkMode)-Home'

      //to make the website header little flashy which blinks b/w the bellow two titles
      // setInterval(() => {
      //   document.title='Hello There'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils'
      // }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success")
      document.title='TextUtils(LightMode)-Home'
    }
  }


  //function used to set the background darkmode color
  const setColor=(event)=>{
     if(event.target.value==='red'){
      setdarkModeColor('#990033');
      //console.log("red");
     }
     else if(event.target.value==='green'){
      setdarkModeColor('#336600')
      //console.log("green")
     }
     else if(event.target.value==='blue'){
      setdarkModeColor('#000066')
      //console.log("blue")
     }
  }

  return (
   <>
   <Router>
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} darkModeColor={darkModeColor} setColor={setColor} />
   <Alert alert={alert} />
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About mode={mode} darkModeColor={darkModeColor}/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Details " mode={mode} darkModeColor={darkModeColor}/>}></Route>
   </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
