angular.module('employee.service', [])
    .factory('employeeService', ['$http', employeeService]);

function employeeService($http) {
    userList = {
            "userDetails": [{
                "id": 1,
                "name": "Prasanna",
                "department": "Developer",
                "salary": 1000,
                "image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381",
                "email": "champ@gmail.com",
                "password": "champ123"
            },{
                "id": 1,
                "name": "Ayush",
                "department": "I.T",
                "salary": 1000,
                "image": "resource/images/IMG_3050.JPG",
                "email": "ayush@gmail.com",
                "password": "ayush123"
            }, {
                "id": 2,
                "name": "Bobo",
                "department": "Project manager",
                "salary": 100000,
                "image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg",
                "email": "bobo@gmail.com",
                "password": "bobo123"
            }, {
                "id": 3,
                "name": "Baby",
                "department": "developer",
                "salary": 2000,
                "image": "resource/images/404.png",
                "email": "baby@gmail.com",
                "password": "baby123"
            }, {
                "id": 4,
                "name": "Nilesh",
                "department": "Designer",
                "salary": 5500,
                "image": "resource/images/6309_1280x800.jpg",
                "email": "nilesh@gmail.com",
                "password": "nilesh123"
            }, {
                "id": 5,
                "name": "amol",
                "department": "Manager",
                "salary": 100500,
                "image": "resource/images/brand-avatar.jpg",
                "email": "amol@gmail.com",
                "password": "amol123"
            }, {
                "id": 6,
                "name": "ganesh",
                "department": "Accountant",
                "salary": 1000,
                "image": "resource/images/ipgeo.png",
                "email": "ganesh@gmail.com",
                "password": "ganesh123"
            }]
        };
    var service = {};

    service.getUserList = getUserList;
    service.searchUser = searchUser;

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

    //END
};
