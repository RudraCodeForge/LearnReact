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
import REDUCER_APP from './components/Reducer/REDUCER_APP';
import Form from './components/Form';
import Context_Api from './components/CONTEXT/Context_Api';
import Dynamic_Css from './components/DYNAMIC_CSS/Dynamic_Css';
import FatchingData from './components/FatchingData'

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
      <Context_Api/>
      <REDUCER_APP/>
      <FatchingData/>
    </>
  )
}
export default App;
