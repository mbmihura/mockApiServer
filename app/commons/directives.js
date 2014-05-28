'use strict';

angular.module('mockItApp')
  
  .directive('mkHttpVerbLabel', function() {
    return {
      restrict: 'E',
      scope: {
        verb: '=verb'
      },
      templateUrl: 'commons/http-verb-label.html'
    }
  })
  
  .directive('mkMockStatusDropdown', function() {
    return {
      restrict: 'E',
      scope: {
        status: '=status'
      },
      templateUrl: 'commons/mock-status-dropdown.html'
    }
  });