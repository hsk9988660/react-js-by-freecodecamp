import React from 'react';
import ReactDOM from 'react-dom';
// import Form from './form  and todolist ';



import './index.css';
// import Prope from './prop drilling';
// import Input from './multiple input';
// import Multiple from './multiple inputs';

import reportWebVitals from './reportWebVitals';
// import UseC from './usecontex/usecontext';
import UseF from './useFetch/useFetch';

// import UseR from './usereducer';
// import Usef from './usereducer';
// import Use from './usereducer2';
// // import Circuit from './shortcircuit';
// import Ternary from './Ternary';
//import Condition from './useeffect/conditionrendering';
//import { Clean } from './useeffect/cleanup';
//import { FetchData } from './useeffect/fetchdata';


ReactDOM.render(
 
    <UseF/>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
