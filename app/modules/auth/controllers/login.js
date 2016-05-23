'use strict';
(function() {
    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', 'loginService', 'localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, loginService, localStorageServiceWrapper) {
    	$scope.error = '';
        $scope.authenticate = function() {
        	$scope.authenticUser = loginService.authenticateUser($scope.email, $scope.password);
        	if(typeof $scope.authenticUser !== 'undefined') {
        		localStorageServiceWrapper.set("user", $scope.authenticUser);
                localStorageServiceWrapper.set("authenticated", true);gulp
        		$state.transitionTo('base.dashboard');
        	} else {
        		$scope.error = "User not found.";
        	}
        }
    }
})();
