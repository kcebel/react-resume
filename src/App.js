import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.scss';
import {Home} from "./home/Home";

function App() {

  const [resumeData, setState] = useState({})

  useEffect( () => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(setState)
      .catch(console.error)
  }, [])

  if (resumeData.home) {
    return (
      <Home name={resumeData.home.name}/>
    );
  }

  return (
    <div className="text-centered p-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

}

export default App;
