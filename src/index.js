import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerender = (store) => {
   root.render(
      <React.StrictMode>
         <App store={store} />
      </React.StrictMode>
   )
}

rerender(store);

store.observer(rerender);

reportWebVitals();
