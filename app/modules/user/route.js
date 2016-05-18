'use strict';
(function() {
    angular
        .module('user')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {
        $stateProvider
        .state('base.user', {
            url: '/user/add',
            views: {
                'content': {
                    templateUrl: 'app/modules/user/views/add.html',
                    controller: 'userController'
                }
            }
        })
        .state('base.userEdit', {
            url: '/user/edit/:id',
            views: {
                'content': {
                    templateUrl: 'app/modules/user/views/add.html',
                    controller: 'userController'
                }
            }
        });
    }

})();
