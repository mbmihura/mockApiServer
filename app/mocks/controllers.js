'use strict';

angular.module('mockItApp')
  .controller('MocksListInBucketCtrl', function ($scope, $routeParams, Mock) {
    $scope.endpointsMocks = Mock.query({bucketId: $routeParams.bucketId});
  });

angular.module('mockItApp')
  .controller('MockDetailsInBucketCtrl', function ($scope, $routeParams) {
    $scope.msg = "TODO: Display mock's details in the user's buckets.";
    $scope.bucketId = $routeParams.bucketId;
    $scope.mockId = $routeParams.mockId;
  });

angular.module('mockItApp')
  .controller('MockCreateInBucketCtrl', function ($scope, $routeParams) {
    $scope.msg = "TODO: Create a mock in a bucket.";
    $scope.bucketId = $routeParams.bucketId;
    $scope.mockId = "New Mock";
  });


