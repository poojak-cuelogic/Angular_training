'use strict';
(function() {

    angular
        .module('base')
        .controller('baseController', ['$scope', '$state', 'menuService', 'localStorageServiceWrapper', 'loginService', baseController]);

    function baseController($scope, $state, menuService, localStorageServiceWrapper, loginService) {
        console.log("Inside Base controller");
        //calling API and get menus
        $scope.getMenus = menuService.getSidebarMenuList().userMenu;
        $scope.userName = localStorageServiceWrapper.get("user").name;

        $scope.logout = function() {
            loginService.logout();
            $state.transitionTo('login');
        }
    }

})();
