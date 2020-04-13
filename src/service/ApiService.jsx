import axios from "axios";
const USER_API_BASE_URL = "http://localhost:2222/spring-boot-app/employee";
class ApiService {
  fetchEmployees() {
    return axios.get(USER_API_BASE_URL);
  }

  fetchEmployeeByEmpId(empId) {
    return axios.get(USER_API_BASE_URL + "/" + empId);
  }

  deleteEmployee(empId) {
    return axios.delete(USER_API_BASE_URL + "/" + empId);
  }

  addEmployee(employee) {
    return axios.post(USER_API_BASE_URL, employee, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        accept: "application/json",
      },
    });
  }

  updateEmployee(employee) {
    return axios.put(USER_API_BASE_URL, employee);
  }
}

export default new ApiService();
