import React, { useState, useEffect } from 'react';
import Editor from './txtEditor.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import UseLocalStorage from '../hooks/UseLocalStorage'

function App() {
  const [html, setHtml] = UseLocalStorage ('html','')
  const [css, setCss] = UseLocalStorage('css','')
  const [javascript, setjavascript] = UseLocalStorage('javascript','')
  const [srcDoc,setSrcDoc]=useState('')
  const [open, setopen] =useState(false)
  useEffect(() => {
    const timeout = setTimeout(()  =>{
      setSrcDoc (
        `
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
        </html>
  
        `
      )
    },500)
    return () => clearTimeout(timeout)
  },[html,css,javascript])
  
  

  return (
    <>
     <div className="fileExplorer">
      <h4>FILE EXPLORER</h4>
            <ul type="none" >
              <li><button onclick={`htmltab ${!open?'setopen(open)':''}`}>index.html</button></li>
              <li><button onclick={`csstab ${!open?'setopen(open)':''}`}>index.css</button></li>
              <li><button onclick={`jstab ${!open?'setopen(open)':''}`}>index.js</button></li>
            </ul>
          </div>
    <div className="box top-box" >
    <Editor language="xml" displayName="Index.html" value={html} onChange={setHtml} id="htmltab"/>
      <Editor language="css" displayName="Index.css" value={css} onChange={setCss} id="csstab"/>
      <Editor language="javascript" displayName="Index.js" value={javascript} onChange={setjavascript} id="jstab"/>
    </div>
    <h3>OUTPUT SCREEN
       <FontAwesomeIcon icon={faArrowAltCircleDown}/>
    </h3>
    <div className="box" >
      
      <iframe
        srcDoc={srcDoc}
        title="result"
        sandbox="allow-scripts"
        frameBorder="2px solid black"
        width="100%"
        height="100%"
      />
    </div>
    
    </>
  );
}
function func(params) {
  
}

export default App;
