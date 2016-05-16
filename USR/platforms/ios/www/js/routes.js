angular.module('starter.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })
    // List of years for which daily thoughts are available
    .state('dailyThoughts', {
        url: '/dailyThoughts',
        templateUrl: 'dailyThoughts.html',
        controller: function ($scope) {
            $scope.years = [{ 'name': '2016' },
                            { 'name': '2015' },
                            { 'name': '2014' }
            ];
        }
    })

    // List of months for which daily thoughts are available for the selected year
    .state('todMonth', {
        url: '/dailyThoughts/:year',
        templateUrl: 'thoughtsMonth.html',
        controller: function ($scope, $stateParams) {
            var yearParam = {};
            yearParam['name'] = $stateParams.year;
            $scope.year = yearParam;
            $scope.months = [
                            { 'name': 'December' },
                            { 'name': 'November' },
                            { 'name': 'October' }
            ];
        }
    })

    // List of dates with titles for which daily thoughts are available for the selected year and month
    .state('todDate', {
        url: '/dailyThoughts/:month?year',
        templateUrl: 'thoughtsDay.html',
        controller: function ($scope, $stateParams) {

            var yearParam = {};
            yearParam['name'] = $stateParams.year;
            $scope.year = yearParam;

            var monthParam = {};
            monthParam['name'] = $stateParams.month;
            $scope.month = monthParam;

            $scope.heading = $stateParams.month + " " + $stateParams.year;

            $scope.dates = [
                            { 'name': '01', 'title': 'Day 1' },
                            { 'name': '02', 'title': 'Day 2' },
                            { 'name': '03', 'title': 'Day 3' },
                            { 'name': '04', 'title': 'Day 4' },
                            { 'name': '05', 'title': 'Day 5' }
            ];
        }
    });

});