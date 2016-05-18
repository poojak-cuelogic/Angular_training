'use strict';
(function() {
    angular
        .module('user')
        .controller('userController', ['$scope', '$state', '$stateParams', 'employeeService', userController]);

    function userController($scope, $state, $stateParams, employeeService) {
    	var employeeId = ($stateParams.id)? $stateParams.id: null;
    	$scope.initCreateView = function(){
    		if(employeeId !== null) {
    			$scope.setTitle = 'Edit Employee';
    			console.log(employeeService.getUserById(employeeId));
    			$scope.employee = employeeService.getUserById(employeeId);
    		} else {
	    		$scope.setTitle = 'Create Employee';
	    		$scope.employee = employeeService.initEmployee();
	    	}
    	}
        
        $scope.create = function(employee) {
        	var result;
        	if(employeeId !== null) {
	        	result = employeeService.updateEmployee(employee);
	        } else {
	        	result = employeeService.addEmployee(employee);
	        }
        	if(result === true) {
        		$state.transitionTo('base.dashboard');
        	}
        }
    }
})();
