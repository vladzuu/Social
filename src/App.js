import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import store from './redux/redux-store';
import HeaderConnect from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Messenger from './components/Messenger/Messenger';
import Music from './components/Music/Music';
import UserElement from './components/Friends/containerFindUsers';
import UserSelect from './components/Friends/Users';
import Login from './components/Login/login';
import ContainerProfile from './components/Profile/ContainerProfileHook';
import PageNoFound from './components/NoFound/PageNoFound';
import News from './components/News/News';
import Setting from './components/Setting/Setting';



const App = (props) => {



  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <div className="Wrapper">
            <HeaderConnect />
            <Navbar />
            <div className='main-container'>
              <Routes>
                <Route path='profile' element={
                  <ContainerProfile />} />
                <Route path='messenger/*' element={
                  <Messenger />} />
                <Route path='music' element={<Music />} />
                <Route path='findUser' element={<UserElement />} />
                <Route path='findUser/id/:userId' element={<UserSelect />} />
                <Route path='login' element={<Login />} />
                <Route path='news' element={<News />} />
                <Route path='setting' element={<Setting />} />
                <Route path='/' element={<ContainerProfile />} />
                <Route path='*' element={<PageNoFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Provider >
      </React.StrictMode >
    </BrowserRouter >
  );
}

export default App;
