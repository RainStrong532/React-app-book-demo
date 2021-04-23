import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import React from 'react';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Routes/>
    </div>
  )};
}

export default App;
