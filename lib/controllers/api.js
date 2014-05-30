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