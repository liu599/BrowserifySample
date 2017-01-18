// 加载所有的依赖
window.jQuery = require('../node_modules/jquery/jquery.min.js');
require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-route/angular-route.min.js');

// 获取控制器与服务的依赖
var homeController = require('./controllers/homeController');
var usersService = require('./services/usersService');

// module up
var app = angular.module('app', [ 'ngRoute']);

// routes and such
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home',
    {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .otherwise(
    {
      redirectTo: '/home'
    });
}]);

// create factories
app.factory('usersService', usersService);

// create controllers
app.controller('HomeController', ['$scope', 'usersService', homeController]);