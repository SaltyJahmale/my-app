describe('Controller: ChartBarController', function() {
  var controller, $httpBackend, chartbarController;
  var getDataUrl = 'http://localhost:8080/data/Living Room';


  var responseConfig = {
    headers: {
      location: 'http://localhost:11130/orderservice/orders/1'
    }
  };
  beforeEach(function () {
    module('myApp');
    inject(function($controller, $rootScope, _$httpBackend_ ) {
      controller = $controller('ChartBarController', { SensorData: {}});
      $httpBackend = _$httpBackend_;

    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get a 200 respond', function() {

    $httpBackend.expectGET(getDataUrl).respond(200, { id: 1 });

    $httpBackend.flush();

    expect(controller.order.id).toBe(1);
  });
});
