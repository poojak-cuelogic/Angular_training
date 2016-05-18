describe('Employee service test cases', function() {

    beforeEach(module('employee.service'));

    var testEmployeeService;

    it('should contain an employeeService service', inject(function(employeeService, _$httpBackend_) {
        testDashboardService = employeeService;
        expect(employeeService).toBeDefined();
    }));

});
