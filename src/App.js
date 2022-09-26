import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Messenger from './components/Messenger/Messenger';
import Music from './components/Music/Music';

function App(props) {
   return (
      <BrowserRouter>
         <div className="Wrapper">
            <Header />
            <Navbar />
            <div className='main'>
               <Routes>
                  <Route path='profile' element={
                     <Profile
                        commentData={props.getState().profileReduce.commentData}
                        newPost={props.getState().profileReduce.newPost}
                        dispatch={props.dispatch} />} />


                  <Route path='messenger/*' element={
                     <Messenger
                        messageData={props.getState().messageData}
                        dialogData={props.getState().dialogData} />} />
                  <Route path='music' element={<Music />} />
               </Routes>

            </div>
            <Footer />

         </div>
      </BrowserRouter>
   );
}

export default App;
