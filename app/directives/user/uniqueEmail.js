angular.module('uniqueEmail.directive', [])
    .directive("uniqueEmail", ['$q', '$timeout', 'employeeService', uniqueEmail]);

function uniqueEmail($q, $timeout, employeeService) {
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
		  	var emails = employeeService.getAllEmails();

		  	ctrl.$asyncValidators.uniqueEmail = function(modelValue, viewValue) {
			    if (ctrl.$isEmpty(modelValue)) {
			      // consider empty model valid
			      return $q.when();
			    }

			    var def = $q.defer();

			    $timeout(function() {
			      // Mock a delayed response
			      if (emails.indexOf(modelValue) === -1) {
			        // The username is available
			        def.resolve();
			      } else {
			        def.reject();
			      }

			    }, 2000);

			    return def.promise;
		  	};
		}
	};			
}