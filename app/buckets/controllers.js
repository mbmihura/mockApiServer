'use strict';

angular.module('mockItApp')
  .controller('BucketsListCtrl', function ($scope) {
    $scope.msg = "TODO: Display user's buckets list.";
  });

angular.module('mockItApp')
  .controller('BucketDetailsCtrl', function ($scope, $routeParams) {
    $scope.msg = "TODO: Display user's buckets list.";
    $scope.bucketId = $routeParams.bucketId;
  });

