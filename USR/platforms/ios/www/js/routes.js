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

     //---------------------------------------- DAILY THOUGHTS ------------------------------
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


     //---------------------------------------- WEEKLY LESSONS ------------------------------

    .state('menu.weeklyLessons', {
        url: '/weeklyLessons',
        views: {
            'side-menu':
                {
                    templateUrl: 'weeklyLessons.html',
                    controller: 'weeklyLessonsController'
                }
        }
    })

    .state('menu.wlSeries', {
        url: '/weeklyLessons/:seriesID?seriesTitle',
        views: {
            'side-menu':
                {
                    templateUrl: 'wlSeries.html',
                    controller: 'wlSeriesController'
                }
        }
    })


    .state('menu.viewWeeklyLesson', {
        url: '/viewDailyThought/:title?url',
        views: {
            'side-menu':
                    {
                        templateUrl: 'viewWeeklyLesson.html',
                        controller: 'viewWeeklyLessonController'
                    }
        }
    })


    //---------------------------------------- SIDE MENU ------------------------------

    .state('menu.aboutUs', {
        url: '/aboutUs',
        views: {
            'side-menu':
                    {
                        templateUrl: 'aboutUs.html',
                    }
        }
    })

    .state('menu.schedule', {
        url: '/schedule',
        views: {
            'side-menu':
                    {
                        templateUrl: 'schedule.html',
                        controller: 'scheduleController'
                    }
        }
    })

    //---------------------------------------- STATIC CONTENT ------------------------------

    .state('menu.Teachings', {
        url: '/teachings',
        views: {
            'side-menu':
                    {
                        templateUrl: 'Teachings.html',
                    }
        }
    })

    .state('menu.MeatAndEnv', {
        url: '/meatAndEnv',
        views: {
            'side-menu':
                    {
                        templateUrl: 'MeatAndEnv.html',
                    }
        }
    })

    .state('menu.NoTea', {
        url: '/NoTea',
        views: {
            'side-menu':
                    {
                        templateUrl: 'NoTea.html',
                    }
        }
    })

    .state('menu.NoOnion', {
        url: '/NoOnion',
        views: {
            'side-menu':
                    {
                        templateUrl: 'NoOnion.html',
                    }
        }
    })

    .state('menu.HowToChant', {
        url: '/HowToChant',
        views: {
            'side-menu':
                    {
                        templateUrl: 'HowToChant.html',
                    }
        }
    })

    .state('menu.Tilak', {
        url: '/Tilak',
        views: {
            'side-menu':
                    {
                        templateUrl: 'Tilak.html',
                    }
        }
    })

    .state('menu.Shiva', {
        url: '/Shiva',
        views: {
            'side-menu':
                    {
                        templateUrl: 'Shiva.html',
                    }
        }
    })

    .state('menu.Guru', {
        url: '/Guru',
        views: {
            'side-menu':
                    {
                        templateUrl: 'Guru.html',
                    }
        }
    })

    .state('menu.Ekadasi', {
        url: '/Ekadasi',
        views: {
            'side-menu':
                    {
                        templateUrl: 'Ekadasi.html',
                    }
        }
    })

    .state('menu.Offering', {
        url: '/Offering',
        views: {
            'side-menu':
                    {
                        templateUrl: 'Offering.html',
                    }
        }
    })

    .state('menu.KCAtHome', {
        url: '/KCAtHome',
        views: {
            'side-menu':
                    {
                        templateUrl: 'KCAtHome.html',
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



});