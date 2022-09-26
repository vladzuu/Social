import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerender = (state) => {
   root.render(
      <React.StrictMode>
         <App state={state}
            store={store}
            updatePostChange={store.dispatch.bind(store)}
            getState={store.getState.bind(store)}
            dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
   )
}

rerender(store.getState());



store.subscribe(() => {
   let state = store.getState();
   rerender(state);
});

reportWebVitals();
