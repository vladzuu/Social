import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const commentData = [
   { comment: 'My first comment!', like: '34' },
   { comment: 'Its comment', like: '12' },
   { comment: 'Hi? anybody', like: '41' },
   { comment: 'What what what what?', like: '23' },
   { comment: "ok, ok, ok, ok!", like: '5' }
];

const dialogData = [
   { id: 1, name: 'person1' },
   { id: 2, name: 'person2' },
   { id: 3, name: 'person3' },
   { id: 4, name: 'person4' },
   { id: 5, name: 'person5' }
];
const messageData = [
   { id: 1, message: 'first' },
   { id: 2, message: 'double' },
   { id: 3, message: 'blalblas' }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App dialogData={dialogData} messageData={messageData} commentData={commentData} />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
