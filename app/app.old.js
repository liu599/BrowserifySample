// 核心文件 app.js

(function () {

      var app = angular.module('myApp', ['ngRoute']);

      // 下面这个需要依赖angular-route模块
      app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home',
            {
              templateUrl: 'app/partials/home.html',
              controller: 'HomeController'
            })
            .otherwise(
            {
              redirectTo: '/home'
            })
      }]);

      app.controller('HomeController', ['$scope', 'usersService', function($scope, usersService){
            $scope.title = 'Home';
            $scope.users = usersService.getData();
      }]);

      app.factory('usersService', function () {
            var service = {
              getData: function(){
                return [{name: 'feenan', info: 'fe'}, {name: 'tina', info: 'financy'}];
              }
            }
            return service;
      });

}());