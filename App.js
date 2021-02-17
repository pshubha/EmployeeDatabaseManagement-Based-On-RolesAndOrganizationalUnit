import logo from './logo.svg';
import './App.css';
import Login from './Project/Login';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import WebPageMain from './Project/WebPageMain';
import Employee from './Project/Employee';
import Roles from './Project/Roles';
import Organization from './Project/Organization';
import AddOrganization from './Project/AddOrganization';
import AddRoles from './Project/AddRoles';
import AddEmployee from './Project/AddEmployee';
import CrudMainEmp from './Project/CrudMain';
import CrudMainRole from './Project/CrudMainRole';
import CrudMainOrg from './Project/CrudMainOrg';


function App() {
  
  return (
    <div className="App" >
    <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/main' exact component={WebPageMain}/>
        <Route path='/employee' component={CrudMainEmp}/>
        <Route path='/roles' component={CrudMainRole} />
        <Route path='/organization' component={CrudMainOrg} />
        <Route path='/addOrganization' component={AddOrganization} />
        <Route path='/addRole' component={AddRoles} />
        <Route path='/addEmployee' component={AddEmployee} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
