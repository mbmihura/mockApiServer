'use strict';

angular.module('mockItApp').
       factory('Mock',['$resource', function ($resource) {
           return $resource(
               "/api/buckets/:bucketId/mocks/:mockId",
               {bucketId: '@bucketId',mockId: "@mockId" },
               { update: {method:"PUT", bucketId: '@bucketId',mockId: "@mockId"} }    
          );
      }]);