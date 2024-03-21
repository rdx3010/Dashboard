import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Dashboard from './components/dashboard';
import { HashRouter, Route,Routes, Switch } from 'react-router-dom';
import Patient from './components/Patient';


function App() {
  return (
    <>
    <HashRouter> 
    <div style={{display:'flex'}}>
    <div style={{width:"16%"}}>
      <Sidebar/>
      </div>
      <div style={{width:"84%"}}>
        <Header/>
      <Routes>
        <Route exact path="/" Component={Dashboard} />
        <Route path="/patient" Component={Patient} />
      </Routes>
      </div>
    </div>
  </HashRouter>
    </>
  );
}

export default App;
