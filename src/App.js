import "./App.css";
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./component/News/News";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          {/*<Route path="/profile/:userId" element={<ProfileContainer />} />*/}
          <Route path="/news" element={<News />} />
          <Route path="/users/" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
