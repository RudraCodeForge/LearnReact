import { useState } from 'react';
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
import FatchingData from './components/FatchingData';
import React_Router from './components/React_Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import USELOADERDATA from './components/USELOADERDATA';
import Actions from './components/Actions';
import REDUX from './components/Redux';
const App = () =>{
  const [activeComponent, setActiveComponent] = useState('Working');

  const topics = [
    { id: 'Working', name: 'React Fundamentals', component: <Working/>, icon: '⚛️' },
    { id: 'Fregement', name: 'Fragments', component: <Fregement/>, icon: '🧩' },
    { id: 'Maps', name: 'Lists & Maps', component: <Maps/>, icon: '📋' },
    { id: 'Condition', name: 'Conditional Rendering', component: <Condition/>, icon: '🔀' },
    { id: 'REACT_PROPS', name: 'Props', component: <REACT_PROPS/>, icon: '📦' },
    { id: 'UseChildren', name: 'Children Props', component: <UseChildren/>, icon: '👶' },
    { id: 'Events', name: 'Event Handling', component: <Events/>, icon: '🎯' },
    { id: 'Parant', name: 'Function Passing', component: <Parant/>, icon: '🔗' },
    { id: 'STATES', name: 'State Management', component: <STATES/>, icon: '🎛️' },
    { id: 'Form', name: 'Forms', component: <Form/>, icon: '📝' },
    { id: 'Context_Api', name: 'Context API', component: <Context_Api/>, icon: '🌐' },
    { id: 'REDUCER_APP', name: 'useReducer Hook', component: <REDUCER_APP/>, icon: '🔄' },
    { id: 'Dynamic_Css', name: 'Dynamic CSS', component: <Dynamic_Css/>, icon: '🎨' },
    { id: 'FatchingData', name: 'Data Fetching', component: <FatchingData/>, icon: '📡' },
    { id: 'React_Router', name: 'React Router', component: <React_Router/>, icon: '🛣️' },
    { id: 'USELOADERDATA', name: 'useLoaderData Hook', component: <USELOADERDATA/>, icon:'🔁'},
    { id: 'Actions', name: 'useActionData Hook', component: <Actions/>, icon:'🔁'},
    { id: 'REDUX', name: 'Redux', component: <REDUX/>, icon:'♻️'}
  ];

  const currentTopic = topics.find(topic => topic.id === activeComponent);

  return(
    <div className="min-vh-100 bg-light">
      {/* Navigation Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <i className="bi bi-mortarboard-fill me-2"></i>
            React Learning Hub
          </span>
          <div className="d-flex align-items-center text-white">
            <i className="bi bi-code-slash me-2"></i>
            <span className="small">{topics.length} Topics Available</span>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 bg-white shadow-sm" style={{ minHeight: 'calc(100vh - 56px)' }}>
            <div className="p-3">
              <h5 className="text-primary mb-3">
                <i className="bi bi-list-ul me-2"></i>
                Learning Topics
              </h5>
              <div className="list-group list-group-flush">
                {topics.map(topic => (
                  <button
                    key={topic.id}
                    className={`list-group-item list-group-item-action border-0 rounded mb-2 ${activeComponent === topic.id ? 'active' : ''}`}
                    onClick={() => setActiveComponent(topic.id)}
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-3" style={{ fontSize: '1.2em' }}>{topic.icon}</span>
                      <div>
                        <div className="fw-semibold">{topic.name}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 col-md-8">
            <div className="p-4">
              {/* Topic Header */}
              <div className="d-flex align-items-center mb-4">
                <span className="me-3" style={{ fontSize: '2rem' }}>{currentTopic?.icon}</span>
                <div>
                  <h2 className="mb-1 text-primary">{currentTopic?.name}</h2>
                  <p className="text-muted mb-0">Interactive learning example</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-white rounded-3 shadow-sm p-4">
                {currentTopic?.component}
              </div>

              {/* Progress Footer */}
              <div className="mt-4 p-3 bg-primary bg-opacity-10 rounded-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <small className="text-muted">
                      Topic {topics.findIndex(t => t.id === activeComponent) + 1} of {topics.length}
                    </small>
                  </div>
                  <div>
                    <button 
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() => {
                        const currentIndex = topics.findIndex(t => t.id === activeComponent);
                        if (currentIndex > 0) {
                          setActiveComponent(topics[currentIndex - 1].id);
                        }
                      }}
                      disabled={topics.findIndex(t => t.id === activeComponent) === 0}
                    >
                      <i className="bi bi-arrow-left me-1"></i>Previous
                    </button>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        const currentIndex = topics.findIndex(t => t.id === activeComponent);
                        if (currentIndex < topics.length - 1) {
                          setActiveComponent(topics[currentIndex + 1].id);
                        }
                      }}
                      disabled={topics.findIndex(t => t.id === activeComponent) === topics.length - 1}
                    >
                      Next<i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
