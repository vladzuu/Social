import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerender = (state) => {
   root.render(
      <BrowserRouter>
         {/* <React.StrictMode> */}
         <Provider store={store}>
            <App />
         </Provider>
         {/* </React.StrictMode> */}
      </BrowserRouter>
   )
}

rerender(store.getState());



store.subscribe(() => {
   let state = store.getState();
   rerender(state);
});

reportWebVitals();
