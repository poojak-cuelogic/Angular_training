'use strict';
(function() {

    angular
        .module('auth')
        .config(['$stateProvider', '$httpProvider', stateProvider]);

    function stateProvider($stateProvider, $httpProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    '@': {
                        templateUrl: 'app/modules/auth/views/login.html',
                        controller: 'loginController'
                    }
                }
            });
        $httpProvider.interceptors.push('apiInterceptor');
    }

})();
