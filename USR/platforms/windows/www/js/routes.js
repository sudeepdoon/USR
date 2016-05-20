angular.module('starter.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'home.html',
    })
    // List of years for which daily thoughts are available
    .state('dailyThoughts', {
        url: '/dailyThoughts',
        templateUrl: 'dailyThoughts.html',
        controller: 'dailyThoughtsController'
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
                            { 'name': '01', 'title': 'Day 1', 'URL': 'http://www.sda-archives.com/tftd/tftd/2016/mar/tftd_033116.html' },
                            { 'name': '02', 'title': 'Day 2', 'URL': 'http://www.sda-archives.com/tftd/tftd/2016/mar/tftd_033116.html' },
                            { 'name': '03', 'title': 'Day 3', 'URL': 'http://www.sda-archives.com/tftd/tftd/2016/mar/tftd_033116.html' },
                            { 'name': '04', 'title': 'Day 4', 'URL': 'http://www.sda-archives.com/tftd/tftd/2016/mar/tftd_033116.html' },
                            { 'name': '05', 'title': 'Day 5', 'URL': 'http://www.sda-archives.com/tftd/tftd/2016/mar/tftd_033116.html' }
            ];

            $scope.openInAppBrowser = function ($url) {
                // Open in app browser
                window.open($url, '_blank');
            };
        }
    });

});