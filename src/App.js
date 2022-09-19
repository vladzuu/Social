import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
                  <Route path='profile' element={<Profile commentData={props.state.commentData} />} />
                  <Route path='messenger/*' element={<Messenger messageData={props.state.messageData} dialogData={props.state.dialogData} />} />
                  <Route path='music' element={<Music />} />
               </Routes>

            </div>
            <Footer />

         </div>
      </BrowserRouter>
   );
}

export default App;
