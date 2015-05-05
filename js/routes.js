var NBAPlayoffBracket = angular.module('NBAPlayoffBracket', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/product', {
          templateUrl: '/views/product.html',
          controller: 'ProductController'
        })
        .otherwise({
          redirectTo: '/product'
        });
    }]);