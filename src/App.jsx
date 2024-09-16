import TinyMCE from './components/TinyMCE';
import Test from './components/axiosTest';

import './App.css';
import { useState } from 'react';

export default function App() {
  const [displayEditor, setDisplayEditor] = useState(false);
  const changestate = function(){
    displayEditor ? setDisplayEditor(false): setDisplayEditor(true);
  }
  return (
    <>
      <button onClick={changestate}>Write New Blog</button>
      {
        displayEditor ? <TinyMCE></TinyMCE>: null
      }
    </>
  );
}