angular.module('employee.service', [])
    .factory('employeeService', ['$http', employeeService]);

function employeeService($http) {
    userList = {
            "userDetails": [{
                "id": 1,
                "name": "Prasanna",
                "age": 27,
                "gender": "Male",
                "email": "champ@gmail.com",
                "password": "champ123",
                "education": "B.E (Computers)"
            },{
                "id": 2,
                "name": "Ayush",
                "age": 27,
                "gender": "Male",
                "email": "ayush@gmail.com",
                "password": "ayush123",
                "education": "B.E (Computers)"
            }, {
                "id": 3,
                "name": "Bobo",
                "age": 27,
                "gender": "Female",
                "email": "bobo@gmail.com",
                "password": "bobo123",
                "education": "B.E (Computers)"
            }, {
                "id": 4,
                "name": "Baby",
                "age": 29,
                "gender": "Female",
                "email": "baby@gmail.com",
                "password": "baby123",
                "education": "B.E (Computers)"
            }, {
                "id": 5,
                "name": "Nilesh",
                "age": 27,
                "gender": "Male",
                "email": "nilesh@gmail.com",
                "password": "nilesh123",
                "education": "B.E (Computers)"
            }, {
                "id": 6,
                "name": "Amol",
                "age": 27,
                "gender": "Male",
                "email": "amol@gmail.com",
                "password": "amol123",
                "education": "B.E (Computers)"
            }, {
                "id": 7,
                "name": "Ganesh",
                "age": 27,
                "gender": "Male",
                "email": "ganesh@gmail.com",
                "password": "ganesh123",
                "education": "B.E (Computers)"
            }]
        };
    var service = {};
    service.getUserList = getUserList;
    service.searchUser = searchUser;
    service.initEmployee = initEmployee;
    service.addEmployee = addEmployee;
    service.getAllEmails = getAllEmails;
    service.getUserById = getUserById;
    service.updateEmployee = updateEmployee;
    service.deleteEmployee = deleteEmployee;
    return service;

    function getUserList() {
        return userList;
    }

    function searchUser(email, password) {
        var userList = getUserList().userDetails;
        return userList.find(function(d) {
            return (d.email === email && d.password == password);
        });
    }

    function getUserById(id) {
        var userList = getUserList().userDetails;
        return userList.find(function(d) {
            return d.id == id;
        });
    }

    function initEmployee() {
        return {
            name : "",
            age : "",
            education : "",
            gender : "Male",
            email : "",
            password : ""
        };
    }

    function addEmployee(employee) {
        console.log(employee);
        var userList = getUserList().userDetails;
        employee.id = userList.length;
        userList[employee.id] = employee;
        return true;
    }

    function updateEmployee(employee) {
        var userList = getUserList().userDetails;
        userList.splice(employee.id - 1, 1, employee);
        return true;
    }

    function deleteEmployee(employeeId) {
        var user = getUserById(employeeId);
        var userList = getUserList().userDetails;
        return userList.splice(userList.indexOf(user), 1);
    }

    function getAllEmails() {
        var userList = getUserList().userDetails;
        return userList.map(function(d) {
            return d.email;
        });
    }
    //END
};
