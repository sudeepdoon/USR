angular.module('starter.controllers', [])

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
