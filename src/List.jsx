import React from "react";
function Len() {
  return (
    <ol>
      <li>h</li>
      <li>he</li>
      <li>hel</li>
    </ol>
  );
}
export default Len;
/*<h1>{Heak()}</h1>
    <h1>{rel}</h1>
    <Heading></Heading>
    <h1>hello sir,<span style={cssstyle}>{hi}</span></h1>
    <h1 className="headi"> hell {Math.random}</h1>
    <h1 contentEditable>go go</h1>
    <h1 style={ { color:'#fa9191'}}>{`go go ${a}`}</h1>
    <h1 style={dd}>{`current date = ${d}`}</h1>
    <h2>go {5*6}</h2>
    <p>go to hell {a}</p>
    <ol>
        <li>1</li>
        <li>1</li>
        
    </ol>
    
    const a1="good morning"
  const a2="good afternoon"
  const a3="good eveining"
  const t=new Date().getHours();
  let hi='';
  const cssstyle={};

  if(t>=12){
    hi=a1;
    cssstyle.color="blue";
  };
  if(t<=7){
    hi=a2;
    cssstyle.color="red";
  };<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello sir,<span style={cssstyle}>{hi}</span></h1>
        <Len></Len>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      //import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//var React = require("react");
//var ReactDOM = require("react-dom");
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Heading, { rel, Heak } from "./Heading";
//app.jsx file
import App from "./App";
//import *as hell from "./Heading";
// if you dont want to write  Heading ,{rel,Heak} then use * as any word
// then you have to write that name after *as and.then component for ex {hell.rel}
//import App from "./App"; when you want to us app.js

const a = "achin";
const d = new Date().toLocaleDateString();
const dd = { color: "#fa9191" };

const a1 = "good morning";
const a2 = "good afternoon";
const a3 = "good eveining";
const t = new Date().getHours();
let hi = "";
const cssstyle = {};

if (t >= 12) {
  hi = a1;
  cssstyle.color = "blue";
}
if (t <= 7) {
  hi = a2;
  cssstyle.color = "red";
}
//by using js {} we can do direct calculation and save variable
// jsx literals {`${variable}`}----its same as string ` its called backdi
//contentEditable is attribut of html but if you want to use in react then use ;;camlecase;; -- fist word is small and 2 word 1 character is capital
// inline css add in{{write css code}}
// inline css const dd like python dictionary here we pass veriable
// if you are adding App or App.js file then after write h1,p1 and so on not gonna work
// noe i add h1 and if in app.js then show
///*<App></App> call app.js write
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

     */
