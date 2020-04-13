import React from "react";
import "./App.css";
import EmployeeList from "./component/EmployeeList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-6">
          <h1 className="text-center" style={style}>
            React Employee Application
          </h1>
          <Switch>
            <Route path="/" exact component={EmployeeList} />
            <Route path="/employees" component={EmployeeList} />
            <Route path="/add-employee" component={AddEmployee} />
            <Route path="/edit-employee" component={EditEmployee} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
const style = {
  color: "red",
  margin: "10px",
};
export default App;
