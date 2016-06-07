angular.module('starter.controllers', [])

/*
.controller('dailyThoughtsController', ['$scope', '$http', 'tftdYearCache',
     function ($scope, $http, tftdYearCache) {

         var cache = tftdYearCache.get('tftdYearCache');
         if (cache) {
             $scope.years = cache;
         }
         else {
             $http.get('http://localhost:90/USR-Server/WebServices/dailyThoughts/years/')
               .success(function (data) {
                   $scope.years = data;
                   tftdYearCache.put('tftdYearCache', data);
               }
            );
         }
     }
])
*/
 // Same controller as above but without caching.. will have to think about caching technique 
    .controller('dailyThoughtsController', ['$scope', '$http',
     function ($scope, $http) {
        $http.get('http://localhost:90/USR-Server/WebServices/dailyThoughts/years/')
        .success(function (data) {
                $scope.years = data;
                }
            );
        }  
    ])

/*There is no caching here.. there should be something */
.controller('todMonthController', ['$scope', '$stateParams', '$http', 
     function ($scope, $stateParams, $http) {

         var yearParam = {};
         yearParam['name'] = $stateParams.year;
         $scope.year = yearParam;

        $url = 'http://localhost:90/USR-Server/WebServices/dailyThoughts/months/' + $stateParams.year + '/';
        $http.get($url)
        .success(function (data) {
            $scope.months = data;
           }
       );
     }
])

/*There is no caching here.. there should be something */
.controller('todDateController', ['$scope', '$stateParams', '$http',
     function ($scope, $stateParams, $http) {

         var yearParam = {};
         yearParam['name'] = $stateParams.year;
         $scope.year = yearParam;

         var monthParam = {};
         monthParam['name'] = $stateParams.month;
         $scope.month = monthParam;

         $scope.heading = $stateParams.month + " " + $stateParams.year;

         $url = 'http://localhost:90/USR-Server/WebServices/dailyThoughts/dates/' + $stateParams.year + '/' + $stateParams.monthID + '/';

         $http.get($url)
         .success(function (data) {
             $scope.dates = data;
         }
        );

         /* For now going with iframe 
         $scope.openInAppBrowser = function ($url) {
             // Open in app browser
             window.open($url, '_blank');
         };
         */
     }
])

.controller('viewDailyThoughtController', ['$scope', '$stateParams','$sce',
     function ($scope, $stateParams, $sce) {

        $scope.title = $stateParams.title;
        $scope.url = $sce.trustAsResourceUrl($stateParams.url);
    }
])

.controller('weeklyLessonsController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('http://localhost:90/USR-Server/WebServices/weeklyLessons/series/')
        .success(function (data) {
            $scope.series = data;
        }
            );
    }
])


.controller('wlSeriesController', ['$scope', '$stateParams', '$http',
     function ($scope, $stateParams, $http) {

         var seriesParam = {};
         seriesParam['seriesID'] = $stateParams.seriesID;
         seriesParam['seriesTitle'] = $stateParams.seriesTitle;
         $scope.series = seriesParam;

         $url = 'http://localhost:90/USR-Server/WebServices/weeklyLessons/lessons/' + $stateParams.seriesID + '/';
         $http.get($url)
         .success(function (data) {
             $scope.lessons = data;
         }
        );
     }
])

.controller('viewWeeklyLessonController', ['$scope', '$stateParams', '$sce',
     function ($scope, $stateParams, $sce) {

         $scope.title = $stateParams.title;
         $scope.url = $sce.trustAsResourceUrl($stateParams.url);
     }
])

.controller('scheduleController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('http://localhost:90/USR-Server/WebServices/schedule/')
        .success(function (data) {
            $scope.schedule = data;
              }
            );
    }
])


/*
// Displays a list of articles in the river
myApp.controller('MyMain', ['$scope', '$http', 'myCache',
 function ($scope, $http, myCache) {
     $http.get('http://www.example.com/path/to/api/endpoint', {cache: myCache})
       .success(function(data) {
         $scope.variable = data;
       }
    );
  }
 }

]);
*/
