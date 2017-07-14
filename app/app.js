'use strict';

// Declare app level module which depends on views, and components
function api_url(){
    return "http://localhost/Tests/";
};
angular.module('myApp', ['ngRoute']).
config(function ($routeProvider)
{
    $routeProvider.when('/',{templateUrl:'partials/home.html',controller:'PostsCtrl'})
                .when('/comments/:id',{templateUrl:'partials/comments.html',controller:'CommentsCtrl'})
                .when('/users',{templateUrl:'partials/testws.html',controller:'UsersCtrl'})
                .when('/users/add',{templateUrl:'partials/addws.html',controller:'UsersCtrl'})
                .otherwise({redirectTo:'/'});
});
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);
