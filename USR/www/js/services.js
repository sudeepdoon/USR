angular.module('starter.services', [])

.factory('tftdYearCache', function($cacheFactory) {
        return $cacheFactory('data');
})
