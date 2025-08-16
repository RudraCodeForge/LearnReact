import Fregement from './components/Fregement';
import Maps from './components/Maps';
import Condition from './components/Condition';
import REACT_PROPS from './components/props/REACT_PROPS'
import UseChildren from './components/Children/UseChildren';
import Events from './components/Events';
import Parant from './components/Passing_Function/Parant';
import STATES from './components/states/STATES';
import Working from './components/Working';
import './App.css';
import Form from './components/Form';

import Dynamic_Css from './components/DYNAMIC_CSS/Dynamic_Css';
const App = () =>{
  return(
    <>
      <Fregement/>  
      <Maps/>
      <Condition/>
      <REACT_PROPS/>
      <Dynamic_Css/>
      <UseChildren/>
      <Events/>
      <Parant/>
      <STATES/>
      <Working/>
      <Form/>
    </>
  )
}
export default App;
