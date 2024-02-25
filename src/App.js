import './App.css';
import React, { useState } from 'react';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs  from './component/Dialogs/Dialogs';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import News from './component/News/News';



const App = (props) => {
  return ( 
    <BrowserRouter>
     <div className ='app-wrapper'>
       <Header />
       <Navbar />
          <Routes>
          <Route  path="/dialogs" element={<Dialogs state={props.state.messagePage} />} />
            <Route path="/profile" element={ <Profile
             profilePage={props.state.profilePage} addPost={props.addPost}  />} />
            <Route path="/news" element={<News />}/>
          </Routes>
       </div>
       </BrowserRouter>
     )
};


export default App;
