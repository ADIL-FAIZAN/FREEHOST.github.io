
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from'./components/TextForm';
import Alert from './components/Alert';
import Home from './components/Home';
import Info from './components/Info';
//import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {

const[alert,setAlert]=useState("null");

const showAlert=(message,type)=>{

setAlert({

msg:message,
type:type

  })
  
}
  return (

    <>
   <Navbar/>
   <TextForm/>
   <About/>
    {/*<BrowserRouter>*/}
    
    {/*<Routes>*/}


{/*< Route element={<Info/>} path="/info"/>
<Route element={<TextForm/>} path="/textform"/>
<Route element={<About/>} path="/about"/>*/}


   {/* <Routes/>*/}
   {/* </BrowserRouter>*/}
    

    
    
    
    
    </>




  );
}

export default App;
