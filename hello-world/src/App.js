import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Form from './components/Form'
import Parent from './components/Parent';
import Lifecyclemounting from './components/Lifecyclemounting';
import Fragments from './components/Fragments';
import ClickCounter from './components/ClickCounter';
import Hovercounter from './components/Hovercounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name='rachit'/>
      <Hovercounter/>

    </div>
  );
}

export default App;
