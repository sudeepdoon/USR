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
        controller: 'todMonthController'
    })

    // List of dates with titles for which daily thoughts are available for the selected year and month
    .state('todDate', {
        url: '/dailyThoughts/:month?year,monthID',
        templateUrl: 'thoughtsDay.html',
        controller: 'todDateController'
    })

});