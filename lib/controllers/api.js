'use strict';

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};

exports.demo1_userInfo = function(req, res) {
  res.json({
        bucketId: 'demo1',
        mockId: 'userInfo',
        name: 'User Info',
        verb: 'GET',
        url: '/user/3453453',
        contentType: '*/*',
        accept: '*/*',
        status: 'started',
        response: {
          status: 200,
          body: "Yeah!"
        }
    });
};

exports.demo1_mocks = function(req, res) {
  res.json([{
      name: 'User Info',
      verb: 'GET',
      url: '/user/3453453',
      contentType: '*/*',
      accept: '*/*',
      status: 'started'
    },{
      name: 'Add Comment',
      verb: 'POST',
      url: '/comment/3453453',
      contentType: '*/*',
      accept: '*/*',
      status: 'started'
    },{
      name: 'Create Product',
      verb: 'PUT',
      url: '/product/we3',
      contentType: '*/*',
      accept: '*/*',
      status: 'started'
    },{
      name: 'Delete Product',
      verb: 'DELETE',
      url: '/product/s3',
      contentType: '*/*',
      accept: '*/*',
      status: 'started'
    },{
      name: 'Lorem',
      verb: 'HEAD',
      url: '/checkIn',
      contentType: '*/*',
      accept: '*/*',
      status: 'started'
    },{
      name: 'Lorem',
      verb: 'OPTIONS',
      url: '/checkIn',
      contentType: '*/*',
      accept: '*/*',
      status: 'starting...'
    },{
      name: 'Category',
      verb: 'PATCH',
      url: '/category/1',
      contentType: '*/*',
      accept: '*/*',
      status: 'stopped'
    }]);
};