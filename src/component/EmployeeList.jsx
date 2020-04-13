import React from "react";
import ApiService from "../service/ApiService";
import { Table } from "react-bootstrap";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.getEmployeesDetails = this.getEmployeesDetails.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
  }
  componentDidMount() {
    this.getEmployeesDetails();
  }
  getEmployeesDetails = () => {
    ApiService.fetchEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  };
  deleteEmployee = (empId) => {
    ApiService.deleteEmployee(empId).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.empId !== empId
        ),
      });
    });
  };
  editEmployee(empId) {
    window.localStorage.setItem("empId", empId);
    this.props.history.push("/edit-employee");
  }
  addEmployee() {
    window.localStorage.removeItem("empId");
    this.props.history.push("/add-employee");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee Details</h2>
        <button className="btn btn-danger" onClick={() => this.addEmployee()}>
          {" "}
          Add User
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Employee Salary</th>
              <th>Employee Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.salary}</td>
                <td>{emp.empAddress}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.deleteEmployee(emp.empId)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => this.editEmployee(emp.empId)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default EmployeeList;
