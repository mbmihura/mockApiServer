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
      // /create/new -> busckets can't be named 'new'
      .when('/mocks/:bucketId/', {
        templateUrl: 'mocks/list.html',
        controller: 'MocksListInBucketCtrl'
      })
      .when('/mocks/:bucketId/view/:mockId', {
        templateUrl: 'mocks/details.html',
        controller: 'MockDetailsInBucketCtrl'
      })
      .when('/mocks/:bucketId/new', {
        templateUrl: 'mocks/details.html',
        controller: 'MockCreateInBucketCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });


