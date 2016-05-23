(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', '$location', 'employeeService', dashboardController]);

    function dashboardController($scope, $state, $location, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.orderByField = 'name';

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
            if(result[0].id === employeeId) {
                $state.reload();
            }
        }

        $scope.handleDblClick = function(employeeId) {
            $location.url('user/edit/'+ employeeId);
        }

        $scope.toggleActive = function(index) {
            $scope.selected = ($scope.selected == index) ? undefined : index;
        }
    }

})();
