import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StartPage from './StartPage';
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: 'us-east-1',
    secretAccessKey: 'reqFzh5NHNuyjclGZ5IL1symt046+HLPEvCL4zrN',
    accessKeyId: 'AKIA5YBWJE27NJHAHVW2'
}

AWS.config.update(configuration)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StartPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
