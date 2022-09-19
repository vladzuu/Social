import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';

function App(props) {
   return (
      <BrowserRouter>
         <div className="Wrapper">
            <Header />
            <Navbar />
            <div className='main'>
               <Routes>
                  <Route path='profile' element={<Profile commentData={props.commentData} />} />
                  <Route path='/dialogs/*' element={<Dialogs messageData={props.messageData} dialogData={props.dialogData} />} />
                  <Route path='music' element={<Music />} />
               </Routes>

            </div>
            <Footer />

         </div>
      </BrowserRouter>
   );
}

export default App;
