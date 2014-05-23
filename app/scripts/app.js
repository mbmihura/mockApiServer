'use strict';

angular.module('mockItApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/buckets', {
        templateUrl: 'buckets/list.html',
        controller: 'BucketsListCtrl'
      })
      .when('/buckets/:bucketId/', {
        templateUrl: 'buckets/details.html',
        controller: 'BucketDetailsCtrl'
      })
      
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });

