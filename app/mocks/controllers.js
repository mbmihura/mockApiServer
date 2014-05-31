'use strict';

angular.module('mockItApp')
  .controller('MocksListInBucketCtrl', function ($scope, $routeParams, Mock) {
    $scope.currentBucketId = $routeParams.bucketId;
    $scope.endpointsMocks = Mock.query({bucketId: $scope.currentBucketId});
  });

angular.module('mockItApp')
  .controller('EditMockInBucketCtrl', function ($scope, $routeParams, $window, Mock) {
    $scope.originalMock = Mock.get({ mockId: $routeParams.mockId, bucketId: $routeParams.bucketId}, function(){
        $scope.reset();
      });

    $scope.save = function(mock){
      $scope.requestBeenSend = true;
      var r = mock.$update().then(function(date){
        $scope.originalMock = angular.copy(mock);
        
        // TODO: Display succes notification
        console.log(date);
      }).catch(function(error){
        // TODO: Display error notification with retry link if there was a time out.
        console.log(error);
      }).finally(function(data){
        $scope.requestBeenSend = false;
      });
    };

    $scope.isUnchanged = function(mock) {
      return angular.equals(mock, $scope.originalMock);
    };

    $scope.reset = function(){
      $scope.mock = angular.copy($scope.originalMock);
    };
    
    $scope.cancel = function(){
      $window.history.back();
    }; 
});

angular.module('mockItApp')
  .controller('MockCreateInBucketCtrl', function ($scope, $routeParams) {
    $scope.msg = "TODO: Create a mock in a bucket.";
    $scope.bucketId = $routeParams.bucketId;
    $scope.mockId = "New Mock";
  });


