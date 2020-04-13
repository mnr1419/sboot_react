import React from "react";
import ApiService from "../service/ApiService";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      salary: "",
      empAddress: "",
      message: null,
    };
    this.saveEmployee = this.saveEmployee.bind(this);
  }
  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      empName: this.state.empName,
      salary: this.state.salary,
      empAddress: this.state.empAddress,
    };
    ApiService.addEmployee(employee).then((res) => {
      this.setState({ message: "Employee added successfully." });
      this.props.history.push("/employees");
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <h2 className="text-center">Add Employee</h2>
        <form>
          <div className="form-group">
            <label>Employee Name</label>
            <input
              type="text"
              placeholder="empName"
              name="empName"
              className="form-control"
              value={this.state.empName}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Employee Salary</label>
            <input
              type="number"
              placeholder="salary"
              name="salary"
              className="form-control"
              value={this.state.salary}
              onChange={this.onChange}
            ></input>
          </div>

          <div className="form-group">
            <label>Employee Address</label>
            <input
              type="textarea"
              placeholder="empAddress"
              name="empAddress"
              className="form-control"
              value={this.state.empAddress}
              onChange={this.onChange}
            ></input>
          </div>
          <button className="btn btn-success" onClick={this.saveEmployee}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default AddEmployee;
