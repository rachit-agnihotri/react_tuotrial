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
import Counter2 from './components/Counter2';
import ClickCountertwo from './components/ClickCountertwo';
import ComponentD from './components/Context/ComponentD';
import { UserProvider } from './components/Context/userContext';
import Hookcounter from './hooks/Hookcounter';
import Hookcounterobject from './hooks/Hookcounterobject';
import Hookcounterone from './hooks/Hookcounterone';
import Hookmouse from './hooks/Hookmouse';
import Mousecontainer from './hooks/Mousecontainer';
import HookuseRedux from './hooks/HookuseRedux';
import Countertwo_useredux from './hooks/CounterTwo_useredux';
import Counterthree_usereducer from './hooks/Counterthree_usereducer';
import Focus_useref from './hooks/Focus_useref';
import Timer_useref from './hooks/Timer_useref';
function App() {
  return (
    <div className="App"> 
      <Timer_useref/>    
    </div>
  );
}

export default App;
