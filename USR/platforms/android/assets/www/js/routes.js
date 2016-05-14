angular.module('starter.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })

    .state('dailyThoughts', {
        url: '/dailyThoughts',
        templateUrl: 'dailyThoughts.html',
        controller: function ($scope) {
            $scope.years = [{ 'name': '2016' },
                            { 'name': '2015'},
                            { 'name': '2014' }
                            ];
        }
    })

    .state('month', {
        url: '/dailyThoughts/:year',
        templateUrl: 'thoughtsMonth.html',
        controller: function ($scope, $stateParams) {
            $scope.year = $stateParams.year;
            $scope.months = [
                            {'name': 'December'},
                            {'name': 'November'},
                            { 'name': 'October' }
                            ];
        }
    });

});