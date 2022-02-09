angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'christ/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'christ/home.html',
            controller:'homectrl'
    }).when('/course',
    {
        templateUrl:'christ/course.html',
        controller:'coursectrl'
    }).when('/student',
    {
        templateUrl:'christ/student.html',
        controller:'studentctrl'
    })
})
.controller('myctrl',function($scope, $http)
{
  
})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
//.controller("coursectrl",function($scope,$http)
//{
 //   $http.get('https://shubhajyotsna.github.io/Jason/customer.json')
// .success(function(response)
 //   {
  //      $scope.names=response.customer;
   // });
    //myapp.filter("myfilter",function()
     //{
    //return function(input)
    //{
      //  return input.substring(0,1).toUpperCase() + input.substring(1);
    //}
//});
//})

.controller("studentctrl",function($scope,$http)
{
    $http.get('https://shubhajyotsna.github.io/Jason/customer.json')
    .success(function(response)
    {
        $scope.names=response.customer;
    });
});
var app = angular.module('myApp', []);

angular.module('myApp').controller('coursectrl', function ($scope, $http) {
    $http.get('https://shubhajyotsna.github.io/Jason/customer.json')
    .success(function(response)
    {
        $scope.names=response.customer;
    });

    $scope.results = [];

    $scope.clickButton = function (enteredValue) {

        $scope.items = $scope.names.fname;
        $scope.text = 'You searched for:';

        angular.forEach($scope.items, function () {
            if (key === enteredValue) {
                $scope.results.push({
                    name: key,
                });
            }
        });

    };


    $scope.reset = function () {
        $scope.enteredValue = '';
        $scope.items = '';
    };


});


