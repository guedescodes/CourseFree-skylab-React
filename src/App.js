import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles.css';
import Main from './pages/main';
import Header from './components/Header';
import Routes from './routes';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
