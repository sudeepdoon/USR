angular.module('starter.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/side-menu/home');

    $stateProvider

    .state('menu', {
        url: '/side-menu',
        templateUrl: 'sideMenu.html',
        abstract: true
    })

    .state('menu.home', {
        url: '/home',
        views :{
            'side-menu':
                    {
                    templateUrl: 'home.html',
                    }
                }
    })

    // List of years for which daily thoughts are available
    .state('menu.dailyThoughts', {
        url: '/dailyThoughts',
        views: {
            'side-menu':
                {
                    templateUrl: 'dailyThoughts.html',
                    controller: 'dailyThoughtsController'
                }
        }
    })

    // List of months for which daily thoughts are available for the selected year
    .state('menu.todMonth', {
        url: '/dailyThoughts/:year',
        views: {
            'side-menu':
                {
                    templateUrl: 'thoughtsMonth.html',
                    controller: 'todMonthController'
                }
        }
    })

    // List of dates with titles for which daily thoughts are available for the selected year and month
    .state('menu.todDate', {
        url: '/dailyThoughts/:month?year,monthID',
        views: {
            'side-menu':
                {
                    templateUrl: 'thoughtsDay.html',
                    controller: 'todDateController'
                }
        }
    })

    .state('menu.comingSoon', {
        url: '/comingSoon',
        views: {
            'side-menu':
                    {
                        templateUrl: 'comingSoon.html',
                    }
        }
    })

        .state('menu.viewDailyThought', {
            url: '/viewDailyThought/:title?url',
            views: {
                'side-menu':
                        {
                            templateUrl: 'viewDailyThought.html',
                            controller: 'viewDailyThoughtController'
                        }
            }
        })

});