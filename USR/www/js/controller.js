angular.module('starter.controllers', [])

.controller('dailyThoughtsController', ['$scope', '$http', 'tftdYearCache',
     function ($scope, $http, tftdYearCache) {
         console.log("In the controller");

         var cache = tftdYearCache.get('data');
         if (cache) {
             $scope.years = cache;
         }
         else {
             console.log("In else");
             $http.get('http://localhost:90/USR-Server/WebServices/dailyThoughts/years/')
               .success(function (data) {
                   console.log("Getting data");
                   $scope.years = data;

                   tftdYearCache.put('data', data);
               }
            );
         }
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
