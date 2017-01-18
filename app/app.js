// 加载所有的依赖
window.jQuery = require('../node_modules/jquery/dist/jquery.min.js');
require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-route/angular-route.min.js');

// 获取控制器与服务的依赖
var homeController = require('./controllers/homeController.js');
var usersService = require('./services/usersService.js');

// module up (myApp is name)
var myApp = angular.module('myApp', ['ngRoute']);

// routes and such
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home',
    {
      templateUrl: 'app/partials/home.html',
      controller: 'HomeController'
    })
    .otherwise(
    {
      redirectTo: '/home'
    });
}]);

// create factories
myApp.factory('usersService', usersService);

// create controllers
myApp.controller('HomeController', ['$scope', 'usersService', homeController]);