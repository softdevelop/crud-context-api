import React from 'react';
import './App.css';
// Components
import Posts from './components/Posts';
// States
import GlobalState from './context/global/GlobalState';

const App = () => {
  return (
    <GlobalState>
      <>
        <h1>Context API with axios</h1>
        <Posts />
      </>
    </GlobalState>
  )
}

export default App;
