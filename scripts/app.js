Stamplay.init('codingo');

var app = angular.module('codingo', [
  'ngStamplay',
  'ngRoute'
  ]);

app.config(function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'lessons/lessons.html',
      controller: 'LessonsCtrl'
    })
})

app.controller('LessonsCtrl', function($scope, $rootScope, $stamplay, Lesson){
  $scope.lessons = [];
  
  var loadLessons = function(){
    Lesson.all().then(function(lessons){
      var lessonsObject = lessons;
      for(var key in lessonsObject) {
        var valueObj = {
          title: lessonsObject[key].get('title'),
          description: lessonsObject[key].get('description')
        };
        $scope.lessons.push(valueObj);
      }
    })
  };

  loadLessons();
});

app.factory('Lesson', function($q, $stamplay){
  function all() {
    var deferred = $q.defer();

    var LessonCollection = new Stamplay.Cobject('lesson').Collection;
    LessonCollection.fetch({populate: true}).then(function(){
      deferred.resolve(LessonCollection.instance);

    });

    return deferred.promise;
  }

  return {
    all: all
  }
});
