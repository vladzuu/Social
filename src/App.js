import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HeaderConnect from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/ContainerProfile';
import Footer from './components/Footer/Footer';
import Messenger from './components/Messenger/Messenger';
import Music from './components/Music/Music';
import UserElement from './components/Friends/containerFindUser';
import UserSelect from './components/Friends/containerUser';
import Login from './components/Login/login';


function App(props) {
   return (

      <div className="Wrapper">
         <HeaderConnect />
         <Navbar />
         <div className='main'>
            <Routes>
               <Route path='profile' element={
                  <Profile />} />

               <Route path='messenger/*' element={
                  <Messenger />} />
               <Route path='music' element={<Music />} />
               <Route path='findUser' element={<UserElement />} />
               <Route path='findUser/id/:userId' element={<UserSelect />} />
               <Route path='login' element={<Login />} />
            </Routes>
         </div>
         <Footer />
      </div>
   );
}

export default App;
