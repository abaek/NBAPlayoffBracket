var myRatings = angular.module('myRatings', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/product/:name?/:category?', {
          templateUrl: '/views/product.html',
          controller: 'ProductController'
        })
        .otherwise({
          redirectTo: '/product'
        });
    }]);