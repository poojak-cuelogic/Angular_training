(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'employeeService', dashboardController]);

    function dashboardController($scope, $state, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.orderByField = 'name';
        $scope.reverseSort = false;

        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = employeeService.getUserList().userDetails;
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        }

        $scope.deleteEmployee = function(employeeId) {
            var result = employeeService.deleteEmployee(employeeId);
            console.log($state);
            if(result[0].id === employeeId) {
                $state.reload();
            }
        }
    }

})();
