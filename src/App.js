import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import AboutUs from "./Components/AboutUs";
import { FirebaseAuthProvider } from "./store/auth-context";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Tnc from "./Components/Tnc";
import Subject from "./Components/Subject";
import Seven from "./Components/Class/Seven";
import Six from "./Components/Class/Six";
import Eight from "./Components/Class/Eight";
import Nine from "./Components/Class/Nine";
import Tenth from "./Components/Class/Tenth";
import Twelfth from "./Components/Class/Twelfth";
import Pricing from "./Components/Pricing";



function App() {
  
  return (
    <FirebaseAuthProvider>
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Content />} />
            <Route path="/tnc" element={<Tnc/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Pricing" element={<Pricing/>}/>
            <Route path="/Subject" element={<Subject/>}/>
            <Route path="/Six" element={<Six/>}/>
            <Route path="/Seven" element={<Seven/>}/>
            <Route path="/Eight" element={<Eight/>}/>
            <Route path="/Nine" element={<Nine/>}/>
            <Route path="/Tenth" element={<Tenth/>}/>
            <Route path="/Twelfth" element={<Twelfth/>}/>
          </Routes>
          <Footer/> 
        </Router>
    </FirebaseAuthProvider>
    )
  }
export default App