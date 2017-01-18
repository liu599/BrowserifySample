module.exports = function ($scope, usersService) {

    $scope.title = 'Home';
    $scope.users = usersService.getData();

};