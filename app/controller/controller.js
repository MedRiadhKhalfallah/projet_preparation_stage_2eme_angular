angular.module('myApp')
        .controller('PostsCtrl', function ($scope, PostFactory) {
            $scope.loading = true;
            $scope.posts = PostFactory.getPosts().then(function (posts) {
                $scope.loading = false;
                $scope.posts = posts;
            }, function (msg) {
                alert(msg);
            })
        })
        .controller('UsersCtrl', function ($scope, PostFactory) {
            PostFactory.listeusers().then(function (users) {
                $scope.users = users;
            }, function (msg) {
                alert(msg);
            })
            $scope.adduser=function (){
                console.log("here");
                var datauser={
                /*User:{
                    nom: $("#UserNom").val(), 
                    prenom: $("#UserPrenom").val(),
                    age: $("#UserAge").val(),
                    adresse: $("#UserAdresse").val()
                }*/
                User:{
                    nom: $scope.UserNom, 
                    prenom: $scope.UserPrenom,
                    age: $scope.UserAge,
                    adresse: $scope.UserAdresse
                }
            };
            PostFactory.adduser(datauser).then(function (user) {
                //$scope.users = users;
                console.log(user)
            }, function (msg) {
                alert(msg);
            })
            }
            
        })
        .controller('CommentsCtrl', function ($scope, PostFactory, $routeParams) {

            $scope.loading = true;
            $scope.newComment = {};
            var post = PostFactory.getPost($routeParams.id).then(function (post) {
                $scope.loading = false;
                $scope.title = post.name;
                $scope.comments = post.comments;
            }, function (msg) {
                alert(msg);
            })

            $scope.addComment = function () {
                $scope.comments.push($scope.newComment);
                // post.add($scope.newComment);
                $scope.newComment = {};
            }

        });