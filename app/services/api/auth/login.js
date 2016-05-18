angular.module('login.service', [])
	   .factory('loginService', ['employeeService', loginService]);

function loginService(employeeService) {
	var service = {};
    service.authenticateUser = authenticateUser;
    return service;

	function authenticateUser(email, password) {
		var user = employeeService.searchUser(email, password);
		return user;
	}
}