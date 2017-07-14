angular.module('myApp')
        .factory('PostFactory', function ($http, $q) {
            var factory = {
                posts: false,
                getPosts: function () {
                    var deferred = $q.defer();
                    var url = api_url() + "users";
                    if (factory.posts !== false) {
                        deferred.resolve(factory.posts)
                    } else {
                        $http.get('posts.json')
                                .success(function (data, status) {
                                    factory.posts = data;

                                    deferred.resolve(factory.posts);
                                }).error(function (data, status) {
                            deferred.reject('impossible de recupere les doonees')
                        });
                    }

                    return deferred.promise
                },
                listeusers: function () {
                    var deferred = $q.defer();
                    var url = api_url() + "users/indexapi";
                    $http.post(url)
                            .success(function (data, status) {
                                factory.users = data.data;

                                deferred.resolve(factory.users);
                            }).error(function (data, status) {
                        deferred.reject('impossible de recupere les doonees')
                    });
                    return deferred.promise
                },
                adduser: function (datauser) {
                    var deferred = $q.defer();
                    var url = api_url() + "users/adduserapi";
                    $http.post(url,datauser)
                            .success(function (data, status) {
                                factory.users = data.data;

                                deferred.resolve(factory.users);
                            }).error(function (data, status) {
                        deferred.reject('impossible de recupere les doonees')
                    });
                    return deferred.promise
                },
                getPost: function (id) {
                    var deferred = $q.defer();
                    var post = {};
                    var posts = factory.getPosts().then(function (posts) {
                        angular.forEach(posts, function (value, key) {
                            if (value.id == id) {
                                post = value
                            }
                        });
                        deferred.resolve(post);
                    }, function (msg) {
                        deferred.reject(msg);
                    })

                    return deferred.promise;
                },
                add: function (comment) {
                    var deferred = $q.defer();


                    deferred.resolve();
                    return deferred.promise;
                }
            };
            return factory;
        })


