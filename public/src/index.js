import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FHIR from "fhirclient";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const rootElement = document.getElementById("root");

const smartLaunch = () => {
  FHIR.oauth2
    .init({
      clientId: "244034f5-e0e7-41e3-99cd-806fc279f65e",
      scope: "launch/patient openid profile",
    })
    .then((client) => {
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

smartLaunch();