angular.module('login.service', [])
	   .factory('loginService', ['employeeService', 'localStorageServiceWrapper', loginService]);

function loginService(employeeService, localStorageServiceWrapper) {
	var service = {};
    service.authenticateUser = authenticateUser;
    service.logout = logout;
    return service;

	function authenticateUser(email, password) {
		var user = employeeService.searchUser(email, password);
		return user;
	}

	function logout() {
		localStorageServiceWrapper.set("user", null);
        localStorageServiceWrapper.set("authenticated", null);
	}
}