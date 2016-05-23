angular.module('auth')
	   .factory('apiInterceptor', ['$rootScope', '$location', 'localStorageServiceWrapper', apiInterceptor]);

function apiInterceptor($rootScope, $location, localStorageServiceWrapper) {
	var access_token = localStorageServiceWrapper.get('authenticated');
	return {
	    'request' :function(config) {
	    	if(access_token === true) {
	    		config.headers.authorization = access_token;
	    	}
			return config;
		},
		'responseError' : function(rejection) {
		    if (rejection.status === 403) {
		        $location.url('/dashboard');      
		    }
			return rejection;	
		}
	};
}