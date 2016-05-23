angular.module('save.directive', [])
    .directive("save", ['$timeout', save]);

function save($timeout) {
	return {
		link: function (scope, element, attr) {
            element.bind('click',function (event) {
                scope.saveBtnTxt = 'Saving...';
                scope.isDisabled = true;
                $timeout(function(){
                    scope.isDisabled = false;
                    console.log('Delayed');
                }, 3000);     
            });
        }
	};			
}