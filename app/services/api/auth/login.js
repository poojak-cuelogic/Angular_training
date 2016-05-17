angular.module('login.service', [])
	   .factory('loginService', ['dashboardService', loginService]);

function loginService(dashboardService) {
	var service = {};
    service.authenticateUser = authenticateUser;
    return service;

	function authenticateUser(email, password) {
		var user = dashboardService.searchUser(email, password);
		return user;
	}
}