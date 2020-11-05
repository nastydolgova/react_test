import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';


const App = () => (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <SimpleForm></SimpleForm>
    </div>
  );

export default App;