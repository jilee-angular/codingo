/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app = angular.module('codingo', ['ngStamplay', 'ui.router', 'ui.materialize']).run(function ($stamplay, UserStatus, $rootScope) {
	  Stamplay.init('codingo');
	  Stripe.setPublishableKey('pk_live_ukAmcMqroatAcXzjIteOXGYw');
	}).config(function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('home', {
	    url: '/home',
	    views: {
	      '': {
	        templateUrl: '/ng-app/main/lessons.html',
	        controller: 'LessonsCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('login', {
	    url: '/login',
	    views: {
	      '': {
	        templateUrl: '/ng-app/partials/login.html',
	        controller: 'LoginCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('password', {
	    url: '/password',
	    views: {
	      '': {
	        templateUrl: '/ng-app/partials/_password.html',
	        controller: 'LoginCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('registration', {
	    url: '/registration',
	    views: {
	      '': {
	        templateUrl: '/ng-app/partials/registration.html',
	        params: 'index',
	        controller: 'RegistrationCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('pricing', {
	    url: '/pricing',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/pricing.html'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('profile', {
	    url: '/profile',
	    views: {
	      '': {
	        templateUrl: '/ng-app/user/profile.html',
	        controller: 'ProfileCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('subscriptions', {
	    url: '/subscriptions',
	    views: {
	      '': {
	        templateUrl: '/ng-app/subscription/subscriptions.html',
	        controller: 'SubscriptionsCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('about', {
	    url: '/about',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/about.html',
	        controller: 'AboutCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('blog', {
	    url: '/blog',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/blog.html',
	        controller: 'BlogCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('blogdetail', {
	    url: '/blog/:id',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/blog.html',
	        controller: 'BlogDetailCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('service', {
	    url: '/service',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/service.html'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('faq', {
	    url: '/faq',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/faq.html'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('contact', {
	    url: '/contact',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/contact.html',
	        controller: 'ContactCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('policies', {
	    url: '/policies',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/policies.html'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('terms', {
	    url: '/terms',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/terms.html',
	        controller: 'TermsCtrl'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('comingsoon', {
	    url: '/comingsoon',
	    views: {
	      '': {
	        templateUrl: '/ng-app/pages/comingsoon.html'
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  }).state('lessonDetail', {
	    url: '/lesson/:lessonId',
	    views: {
	      '': {
	        templateUrl: '/ng-app/main/lesson_show.html',
	        controller: 'LessonCtrl',
	        resolve: {
	          qId: function ($stateParams) {
	            return $stateParams;
	          }
	        }
	      },
	      'header': {
	        templateUrl: '/ng-app/partials/header.html',
	        controller: 'NavbarCtrl'
	      }
	    }
	  });

	  $urlRouterProvider.otherwise('/home');
	});

	__webpack_require__(1)(app);
	__webpack_require__(2)(app);
	__webpack_require__(3)(app);
	__webpack_require__(4)(app);
	__webpack_require__(5)(app);
	__webpack_require__(6)(app);
	__webpack_require__(7)(app);
	__webpack_require__(8)(app);
	__webpack_require__(9)(app);
	__webpack_require__(10)(app);
	__webpack_require__(11)(app);
	__webpack_require__(12)(app);
	__webpack_require__(13)(app);
	__webpack_require__(14)(app);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.controller('NavbarCtrl', ['$scope', '$location', 'UserStatus', '$rootScope', '$stamplay', function NavbarController($scope, $location, UserStatus, $rootScope, $stamplay) {
	    $scope.spinner = false;
	    $scope.currentTabIndex = 0;
	    $scope.subscribed = false;
	    var user_id;

	    $scope.logout = function () {
	      UserStatus.logout().then(function (res) {
	        $scope.logged = false;
	      });
	    };

	    //method for setting active class in navbar
	    $scope.routeIs = function (routeName) {
	      var index = $location.absUrl().split("/").pop();
	      return index === routeName;
	    };

	    $scope.showTab = function (tabIndex) {
	      $scope.currentTabIndex = tabIndex;
	    };

	    // Set User for Header
	    UserStatus.getUser().then(function (res) {
	      var user = res.user;
	      user_id = res.user._id;
	      if (user._id !== undefined) {
	        $scope.$apply(function () {
	          $scope.logged = true;
	          $scope.displayName = user.displayName;
	          $scope.email = user.email;
	          // Globally set user
	          $rootScope.user = user;
	          $rootScope.user.logged = true;
	          $rootScope.logged = true;
	          if (user.profileImg !== '') {
	            $scope.picture = user.profileImg;
	          } else {
	            $rootScope.picture = './ng-app/assets/images/person.png';
	          }
	        });
	        UserStatus.setUser(user.displayName, user.profileImg, user._id, user.email, true);
	      }
	      return UserStatus.getSubscriptions(user._id, 'monthly_discount_subscription');
	    }).then(function (subscription) {
	      UserStatus.updateUser(user_id, { 'subscriptions': subscription });
	      var status = subscription.data[0].status;
	      if (status === 'active') {
	        $scope.subscribed = true;
	      }
	      if (user_id !== undefined) {
	        $scope.$apply(function () {
	          $rootScope.subscriptions = subscription;
	        }, function (err) {});
	      }
	    });
	  }]);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.factory('UserStatus', ['$http', '$stamplay', '$rootScope', '$q', function ($http, $stamplay, $rootScope, $q) {

	    var user = {};
	    var user_id = user._id;

	    return {
	      loginUser: function (data) {
	        return Stamplay.User.login(data);
	      },
	      registerUser: function (data) {
	        return Stamplay.User.signup(data);
	      },
	      logout: function () {
	        return Stamplay.User.logout();
	      },
	      getUserModel: function () {
	        return Stamplay.User();
	      },

	      // Getter and Setter method
	      getUser: function () {
	        return Stamplay.User.currentUser();
	      },
	      updateUser: function (user_id, data) {
	        return Stamplay.User.update(user_id, data);
	      },
	      setUser: function (displayName, picture, _id, email, logged) {
	        user = {
	          displayName: displayName,
	          picture: picture,
	          _id: _id,
	          email: email,
	          logged: logged
	        };
	      },
	      deleteUser: function (user_id) {
	        return Stamplay.User.remove(user_id);
	      },
	      resetPassword: function (data) {
	        return Stamplay.User.resetPassword(data);
	      },
	      // card and subscription
	      createCard: function (user_id, token) {
	        return Stamplay.Stripe.createCreditCard(user_id, token);
	      },
	      updateCard: function (user_id, token) {
	        return Stamplay.Stripe.updateCreditCard(user_id, token);
	      },
	      getCard: function (user_id) {
	        return Stamplay.Stripe.getCreditCard(user_id);
	      },
	      getSubscriptions: function (user_id, options) {
	        return Stamplay.Stripe.getSubscriptions(user_id, options);
	      },
	      subscribe: function (user_id, planId) {
	        return Stamplay.Stripe.createSubscription(user_id, planId);
	      },
	      unsubscribe: function (user_id, subscriptionId, options) {
	        return Stamplay.Stripe.deleteSubscription(user_id, subscriptionId, options);
	      }
	    };
	  }]);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.controller('LessonsCtrl', function ($scope, $rootScope, $stamplay, Lesson, UserStatus, AnchorSmoothScroll, $location) {
	    $scope.lessons = [];
	    $scope.footer = true;

	    var initialise = function () {
	      loadLessons();
	      getUser();
	    };

	    var getUser = function () {
	      UserStatus.getUser().then(function (res) {});
	    };

	    var loadLessons = function () {
	      Lesson.all().then(function (lessons) {
	        lessons.data.forEach(function (returnData, index) {
	          if (returnData.level === 0) {
	            lessons.data[index].level = '초급';
	          } else if (returnData.level === 1) {
	            lessons.data[index].level = '중급';
	          } else {
	            lessons.data[index].level = '상급';
	          }
	        });
	        $scope.lessons = lessons.data;
	      });
	    };

	    $scope.gotoLesson = function (eID) {
	      $location.hash('lesson');
	      AnchorSmoothScroll.scrollTo(eID);
	    };

	    initialise();
	  });

	  app.controller('LessonCtrl', function ($scope, $stateParams, Lesson, Video, $sce) {

	    $scope.showDescription = function (tabIndex) {
	      $scope.currentTabIndex = tabIndex;
	      $scope.videoObj.wistia = null;
	      $scope.textInstruction = $scope.filteredVideos[tabIndex];
	    };

	    $scope.showTab = function (tabIndex) {

	      $scope.textInstruction = null;
	      $scope.currentTabIndex = tabIndex;
	      $scope.videoObj = $scope.filteredVideos[tabIndex];
	      $scope.videoLink = [{ url: $sce.trustAsResourceUrl('//fast.wistia.net/embed/iframe/' + $scope.videoObj.wistia) }];

	      window._wq = window._wq || [];
	      _wq.push({ "_all": function (video) {
	          video.play();
	        } });

	      // video next and previous buttons
	      if ($scope.filteredVideos[tabIndex + 1] === undefined) {
	        $scope.allowNextBtn = false;
	      } else {
	        $scope.allowNextBtn = true;
	      }
	      if ($scope.filteredVideos[tabIndex - 1] === undefined) {
	        $scope.allowPreviousBtn = false;
	      } else {
	        $scope.allowPreviousBtn = true;
	      }
	    };

	    $scope.nextVideo = function (index) {

	      // if there is next filteredVideo obj
	      if ($scope.filteredVideos[index + 1]) {
	        $scope.videoObj = $scope.filteredVideos[index + 1];

	        // if next section is textInst
	        if ($scope.videoObj.wistia === "" || $scope.videoObj.wistia === null) {
	          $scope.showDescription(index + 1);
	        }
	        // if next section is video
	        if ($scope.videoObj.wistia !== "" && $scope.videoObj.wistia !== null) {

	          $scope.videoLink = [{ url: $sce.trustAsResourceUrl('//fast.wistia.net/embed/iframe/' + $scope.videoObj.wistia) }];
	          $scope.textInstruction = null;
	        }
	      }
	      // if the next next section is not a video nor textInstruction
	      if ($scope.filteredVideos[index + 2] === undefined) {
	        $scope.allowNextBtn = false;
	      }
	      $scope.allowPreviousBtn = true;
	    };

	    $scope.previousVideo = function (index) {
	      $scope.allowNextBtn = true;
	      // if there is previous filteredVideo
	      if ($scope.filteredVideos[index - 1]) {
	        $scope.videoObj = $scope.filteredVideos[index - 1];
	        // if prev section is textInst
	        if ($scope.videoObj.wistia === "" || $scope.videoObj.wistia === null) {
	          $scope.showDescription(index - 1);
	        }
	        // if prev section is video
	        if ($scope.videoObj.wistia !== "" && $scope.videoObj.wistia !== null) {
	          $scope.videoLink = [{ url: $sce.trustAsResourceUrl('//fast.wistia.net/embed/iframe/' + $scope.videoObj.wistia) }];
	          $scope.allowPreviousBtn = true;
	          $scope.textInstruction = null;
	        }
	      }
	      // if prev prev section is not a video nor textInst
	      if ($scope.filteredVideos[index - 2] === undefined) {
	        $scope.allowPreviousBtn = false;
	      }
	    };

	    var initialise = function () {
	      $scope.spinner = true;
	      $scope.currentTabIndex = 0;
	      $scope.lessonId = $stateParams.lessonId;
	      $scope.videoId = $stateParams;
	      $scope.allowNextBtn = true;
	      $scope.allowPreviousBtn = false;

	      var videos = [];
	      var lessonObj = [];

	      Lesson.get($stateParams.lessonId).then(function (data) {
	        $scope.premium = data.data[0].premium;
	        $scope.lessonObj = data.data[0];
	      });

	      var query = {
	        page: 1,
	        per_page: 250
	      };

	      Video.query(query).then(function (data) {
	        var obj = data.data;
	        videos = obj.filter(function (val) {
	          return val.lesson_id == $stateParams.lessonId;
	        });
	        $scope.filteredVideos = videos;

	        // initial video
	        $scope.videoObj = $scope.filteredVideos[0];
	        $scope.videoLink = [{ url: $sce.trustAsResourceUrl('//fast.wistia.net/embed/iframe/' + $scope.videoObj.wistia) }];
	        $scope.spinner = false;
	      });
	    };

	    initialise();
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.factory('Lesson', function ($q, $stamplay, $http) {
	    function all() {
	      var def = $q.defer();

	      Stamplay.Object("lesson").get({}, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });
	      return def.promise;
	    };

	    function get(id) {
	      var def = $q.defer();

	      Stamplay.Object('lesson').get({ _id: id }, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });

	      return def.promise;
	    };

	    return {
	      all: all,
	      get: get
	    };
	  });
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function (app) {

	  app.controller('LoginCtrl', ['$scope', '$state', 'UserStatus', 'GlobalVariable', '$stamplay', '$window', function LoginController($scope, $state, UserStatus, GlobalVariable, $stamplay, $window) {
	    $scope.spinner = false;
	    //setting regexp for email field
	    $scope.EMAIL = GlobalVariable.email;

	    //login function  
	    $scope.login = function (login) {
	      $scope.spinner = true;
	      var userInput = {
	        email: login.email,
	        password: login.password
	      };
	      UserStatus.loginUser(userInput).then(function (res) {
	        $scope.spinner = false;
	        $state.go('home');
	      }, function (err) {
	        $scope.error = "이메일 또는 비밀번호 입력이 잘못됐습니다";
	        $scope.$apply(function () {
	          $scope.spinner = false;
	        });
	      });
	    };

	    // retrieve password
	    $scope.sendEmail = function (reset) {
	      $scope.spinner = true;

	      var emailAndNewPassword = {
	        email: reset.email,
	        newPassword: reset.password
	      };

	      if (emailAndNewPassword !== undefined) {
	        Stamplay.User.resetPassword(emailAndNewPassword).then(function (res) {
	          $scope.successMsg = "비밀번호 재설정 이메일이 보내졌습니다. 보내진 이메일에 링크를 클릭하여 변경을 확인해주시기 바랍니다.";
	          Materialize.toast($scope.successMsg, 8000);
	          $scope.spinner = false;
	          $state.go('home');
	        }, function (err) {
	          $scope.$apply(function () {
	            $scope.spinner = false;
	          });
	          $scope.error = '죄송합니다. 이메일을 확인해주세요.';
	        });
	      };
	    };
	  }]);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.controller('RegistrationCtrl', ['$scope', 'UserStatus', 'GlobalVariable', 'Validator', '$state', function RegistrationCtrl($scope, UserStatus, GlobalVariable, Validator, $state) {
	    $scope.spinner = false;

	    //setting regexp for email field
	    $scope.EMAIL = GlobalVariable.email;
	    //register function
	    $scope.register = function (signup) {
	      $scope.spinner = true;
	      if (signup.email && signup.password && signup.displayName) {
	        var user = {
	          email: signup.email,
	          password: signup.password,
	          displayName: signup.displayName
	        };
	        var validate = {
	          email: signup.email
	        };
	        //first step verify email is not already used
	        Validator.validateEmail(validate).success(function (data, status) {
	          //second step register user
	          UserStatus.registerUser(user).then(function () {
	            $scope.spinner = false;
	            $scope.successMsg = "코딩고 회원님되신 것을 축하드립니다!";
	            Materialize.toast($scope.successMsg, 2000);
	            $state.go('home');
	          }, function () {
	            $scope.spinner = false;
	            $scope.error = '회원가입이 실패했습니다';
	          });
	        }).error(function (data, status) {
	          $scope.error = '이미 사용된 이메일 또는 사용가능하지 않은 이메일입니다';
	          $scope.spinner = false;
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.controller('AboutCtrl', function ($scope) {

	    $scope.footer = true;

	    $scope.aboutInfo = [{ subTitle: '쉬운 교육', icon: 'videocam', info: ['프로그래밍에대한 지식이 없더라도 누구나 영상을 따라 쉽게 코딩을 배울 수 있습니다.'], classInfo: 'col s12 m5 offset-m1' }, { subTitle: '신속한 개발', icon: 'trending_up', info: ['본인이 원하는 것을 직접 해결한다면 개발이 신속해지고 범실도 줄일 수 있습니다.'], classInfo: 'col s12 m5' }, { subTitle: '문제 해결', icon: 'question_answer', info: ['코딩과 스타트업은 문제를 해결하는 것이 핵심입니다. 문제를 빨리 해결할 수 있는 환경이 있다는 것은 소프트웨어 개발에 큰 도움이 될 것입니다.'], classInfo: 'col s12 m5 offset-m1' }, { subTitle: '저렴한 비용', icon: 'payment', info: ['부담을 최소화한 비용으로 누구나 편하게 코딩을 배울 수 있습니다.'], classInfo: 'col s12 m5' }];
	  }).controller('ContactCtrl', function ($scope, UserStatus) {}).controller('TermsCtrl', function ($scope) {}).controller('BlogCtrl', function ($scope, Blog) {
	    var initialize = function () {
	      loadBlogs();
	      $scope.spinner = true;
	    };

	    var loadBlogs = function () {
	      Blog.all().then(function (blogs) {
	        $scope.blogData = blogs.data;
	        $scope.blog = $scope.blogData.slice(-1)[0];
	        $scope.activeMenu = $scope.blog.id;
	        $scope.spinner = false;
	      });
	    };

	    $scope.titleArray = [];
	    if ($scope.blogData != undefined) {
	      for (var i = 0; i < $scope.blogData.length; i++) {
	        $scope.titleArray.push($scope.blogData[i].title);
	      }
	    }

	    initialize();
	  }).controller('BlogDetailCtrl', function ($scope, $stateParams, Blog) {
	    var initialize = function () {
	      loadBlog();
	      loadBlogTitles();
	      $scope.spinner = true;
	    };

	    var loadBlog = function () {
	      Blog.get($stateParams.id).then(function (blog) {
	        $scope.blog = blog.data[0];
	        $scope.spinner = false;
	      });
	    };

	    $scope.titleArray = [];
	    var loadBlogTitles = function () {
	      Blog.all().then(function (blogs) {
	        $scope.blogData = blogs.data;
	        if ($scope.blogData != undefined) {
	          for (var i = 0; i < $scope.blogData.length; i++) {
	            $scope.titleArray.push($scope.blogData[i].title);
	          }
	        }
	      });
	    };

	    $scope.activeMenu = $stateParams.id;

	    initialize();
	  });
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  // Profile Page
	  app.controller('ProfileCtrl', function ($scope, UserStatus, $state, $rootScope) {
	    var initialize = function () {
	      var user_id;
	      var subscriptionId;
	      $scope.spinner = false;
	      $scope.currentTabIndex = 0;
	      $scope.spinner = false;
	    };

	    $scope.showTab = function (tabIndex) {
	      $scope.currentTabIndex = tabIndex;
	    };
	    $scope.changeProfile = function (user) {
	      $scope.spinner = true;

	      var userData = {
	        displayName: user.displayName
	      };

	      UserStatus.updateUser(user._id, userData).then(function (res) {
	        $scope.$apply(function () {
	          $scope.spinner = false;
	          $scope.user.displayName = res.displayName;
	        });

	        $scope.successMsg = "사용자명이 변경되었습니다";
	        Materialize.toast($scope.successMsg, 2000);
	      }, function (err) {
	        $scope.spinner = false;
	        $scope.error = err;
	      });
	    };

	    $scope.cancelSubscription = function () {
	      $scope.spinner = true;
	      UserStatus.getUser().then(function (res) {
	        user_id = res.user._id;
	        return UserStatus.getSubscriptions(user_id, '');
	      }, function (err) {
	        $scope.error = err;
	        $scope.spinner = false;
	      }).then(function (getSubs) {
	        subscriptionId = getSubs.data[0].id;
	        return UserStatus.unsubscribe(user_id, subscriptionId, {});
	      }, function (err) {
	        $scope.spinner = false;
	      }).then(function (cancellation) {
	        $scope.$apply(function () {
	          $rootScope.subscriptions = undefined;
	          $rootScope.subscribed = false;
	          UserStatus.updateUser(user_id, { 'subscribed': false }).then(function (res) {
	            $scope.successMsg = "Pro 회원권을 안전하게 취소하였습니다";
	            Materialize.toast($scope.successMsg, 3000);
	            $scope.spinner = false;
	            $state.go('home');
	          }, function (err) {
	            $scope.error = err;
	            $scope.spinner = false;
	          });
	        }, function (err) {
	          $scope.error = err;
	          $scope.spinner = false;
	        });
	      }, function (err) {
	        $scope.error = err;
	        $scope.spinner = false;
	      });
	    };

	    $scope.deleteUser = function () {
	      $scope.spinner = true;
	      UserStatus.getUser().then(function (res) {
	        user_id = res.user._id;
	        this.user_id = user_id;
	        return UserStatus.deleteUser(user_id);
	      }, function (err) {
	        $scope.error = err;
	        $scope.spinner = false;
	      }).then(function (res) {
	        $scope.spinner = false;
	        return UserStatus.logout();
	      }, function (err) {
	        $scope.error = err;
	        $scope.spinner = false;
	      });
	    };

	    $scope.changePassword = function (password) {
	      if (password.change !== password.confirm) {
	        $scope.error = "입력한 비밀번호를 확인해주세요";
	      }
	      if (password.change === password.confirm) {
	        UserStatus.getUser().then(function (res) {
	          var emailAndNewPassword = {
	            email: res.user.email,
	            newPassword: password.change
	          };

	          Stamplay.User.resetPassword(emailAndNewPassword).then(function (res) {
	            $scope.successMsg = "비밀번호 재설정 이메일이 보내졌습니다. 보내진 이메일에 링크를 클릭하여 변경을 확인해주시기 바랍니다.";
	            Materialize.toast($scope.successMsg, 8000);
	            $state.go('home');
	          }, function (err) {
	            $scope.error = err;
	          });
	        });
	      }
	    };

	    initialize();
	  });
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.controller('SubscriptionsCtrl', function ($scope, $stamplay, UserStatus, $state, $rootScope, GlobalVariable, Validator) {

	    var currentUser;
	    var userId;
	    var storedCard;

	    $scope.spinner = false;
	    $scope.monthly_sub = false;

	    $scope.currentTabIndex = 0;
	    $scope.card = {};

	    $scope.months = [{ 'month': '만기달', value: '' }, { 'month': '01', value: 1 }, { 'month': '02', value: 2 }, { 'month': '03', value: 3 }, { 'month': '04', value: 4 }, { 'month': '05', value: 5 }, { 'month': '06', value: 6 }, { 'month': '07', value: 7 }, { 'month': '08', value: 8 }, { 'month': '09', value: 9 }, { 'month': '10', value: 10 }, { 'month': '11', value: 11 }, { 'month': '12', value: 12 }];
	    $scope.card.exp_month = $scope.months[0];

	    $scope.years = [{ 'year': '만기년도', value: '' }, { 'year': 2016, value: 2016 }, { 'year': 2017, value: 2017 }, { 'year': 2018, value: 2018 }, { 'year': 2019, value: 2019 }, { 'year': 2020, value: 2020 }, { 'year': 2021, value: 2021 }, { 'year': 2022, value: 2022 }, { 'year': 2023, value: 2023 }, { 'year': 2024, value: 2024 }, { 'year': 2025, value: 2025 }, { 'year': 2026, value: 2026 }, { 'year': 2027, value: 2027 }, { 'year': 2028, value: 2028 }, { 'year': 2029, value: 2029 }, { 'year': 2030, value: 2030 }];
	    $scope.card.exp_year = $scope.years[0];

	    $scope.showTab = function (tabIndex) {
	      $scope.currentTabIndex = tabIndex;
	    };

	    $scope.checked = function (check) {
	      $scope.monthly_sub = !$scope.monthly_sub;
	    };

	    $scope.getUser = function () {
	      UserStatus.getUser().then(function (res) {
	        // Set cuerrentUser and userId
	        currentUser = res;
	        userId = res.user._id;
	        return UserStatus.getCard(userId);
	      }, function (err) {
	        $scope.error = err;
	      }).then(function (resCard) {
	        storedCard = resCard;
	      }, function (err) {});
	    };

	    $scope.getUser();

	    $scope.subscribeMembership = function (card) {
	      $scope.error = false;
	      $scope.spinner = true;

	      var cardObj = {
	        number: card.number,
	        cvc: card.cvc,
	        exp_month: card.exp_month.value,
	        exp_year: card.exp_year.value
	      };

	      // price checked
	      if ($scope.monthly_sub === true) {

	        // card exists
	        if (storedCard.card_id) {
	          Stripe.card.createToken(cardObj, function (status, response) {
	            if (response.object !== 'token') {
	              $scope.spinner = false;
	              $scope.$apply(function () {
	                $scope.error = "카드정보가 옳지 않습니다: " + response.error.message;
	              });
	            } else {
	              var token = response.id;
	              UserStatus.updateCard(userId, token).then(function (resUpdated) {
	                return UserStatus.subscribe(userId, 'monthly_discount_subscription');
	              }, function (err) {
	                $scope.spinner = false;
	              }).then(function (subscription) {
	                $scope.$apply(function () {
	                  $rootScope.subscriptions = subscription;
	                  $rootScope.subscribe = true;
	                  UserStatus.updateUser(userId, { 'subscribed': true }).then(function () {
	                    $scope.successMsg = "Pro회원가입을 축하합니다. ";
	                    Materialize.toast($scope.successMsg, 2000);
	                    $state.go('home');
	                    $scope.spinner = false;
	                  }, function (err) {
	                    $scope.error = err;
	                    $scope.spinner = false;
	                  });
	                });
	              }, function (err) {
	                $scope.spinner = false;
	              });
	            }
	          });
	        }

	        // if card is new
	        if (storedCard.card_id === undefined) {
	          Stripe.card.createToken(cardObj, function (status, response) {
	            if (response.object !== 'token') {
	              $scope.spinner = false;
	              $scope.$apply(function () {
	                $scope.error = "카드정보가 옳지 않습니다: " + response.error.message;
	              });
	            } else {
	              var token = response.id;
	              UserStatus.createCard(userId, token).then(function (resCard) {
	                $scope.$apply(function () {
	                  $scope.user.hasCard = true;
	                  $rootScope.user.hasCard = true;
	                });
	                UserStatus.updateUser(userId, { 'hasCard': true });
	                return UserStatus.subscribe(userId, 'monthly_discount_subscription');
	              }, function (err) {
	                $scope.spinner = false;
	              }).then(function (subscription) {
	                if (subscription !== undefined) {
	                  $scope.$apply(function () {
	                    $rootScope.subscription = subscription;
	                    $rootScope.subscribe = true;
	                    UserStatus.updateUser(userId, { 'subscribed': true }).then(function () {
	                      $scope.successMsg = "Pro회원가입을 축하합니다!";
	                      Materialize.toast($scope.successMsg, 2000);
	                      $scope.spinner = false;
	                      $state.go('home');
	                    }, function (err) {
	                      $scope.spinner = false;
	                      $scope.error = err;
	                    });
	                  });
	                } else {
	                  $scope.$apply(function () {
	                    $scope.error = "카드정보가 옳지 않습니다: " + response.error.message;
	                    $scope.spinner = false;
	                  });
	                }
	              }, function (err) {
	                $scope.spinner = false;
	              });
	            }
	          });
	        }
	      } else {
	        $scope.error = "가격을 체크해주시기 바랍니다 ";
	        $scope.spinner = false;
	      }
	    };

	    // setting regexp for email field
	    $scope.EMAIL = GlobalVariable.email;

	    $scope.register = function (signup) {
	      $scope.spinner = true;
	      if (signup.email && signup.password && signup.displayName) {
	        var user = {
	          email: signup.email,
	          password: signup.password,
	          displayName: signup.displayName
	        };
	        var validate = {
	          email: signup.email
	        };
	        Validator.validateEmail(validate).success(function (data, status) {
	          UserStatus.registerUser(user).then(function () {
	            $scope.$apply(function () {
	              $scope.logged = true;
	            });
	            $scope.spinner = false;
	          }, function () {
	            $scope.error = "회원가입에 실패했습니다";
	            $scope.spinner = false;
	          });
	        }).error(function (data, status) {
	          $scope.error = "이미 사용된 이메일 또는 사용가능하지 않은 이메일입니다";
	          $scope.spinner = false;
	        });
	      }
	    };

	    //login function  
	    $scope.login = function (login) {
	      $scope.spinner = true;
	      var user = {
	        email: login.email,
	        password: login.password
	      };
	      UserStatus.loginUser(user).then(function () {
	        $scope.$apply(function () {
	          $scope.logged = true;
	          $scope.spinner = false;
	        });
	      }, function () {
	        $scope.error = data;
	        $scope.$apply(function () {
	          $scope.spinner = false;
	        });
	      });
	    };
	  });
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.factory('Video', function ($q, $stamplay, $http) {
	    function all() {
	      var def = $q.defer();

	      Stamplay.Object("video").get({}, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });
	      return def.promise;
	    }

	    function get(id) {
	      var def = $q.defer();

	      Stamplay.Object('video').get({}, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });
	      return def.promise;
	    }

	    function query(obj) {
	      var def = $q.defer();

	      Stamplay.Object('video').get(obj, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });
	      return def.promise;
	    }

	    return {
	      all: all,
	      get: get,
	      query: query
	    };
	  });
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.factory('GlobalVariable', function () {
	    return {
	      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	      hideModal: function (selector) {
	        $(selector).modal('hide');
	      },
	      showModal: function (selector) {
	        $(selector).modal('show');
	      }
	    };
	  });
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.factory('Validator', ['$http', function ($http) {
	    return {
	      validateEmail: function (validate) {
	        return $http({
	          method: 'POST',
	          data: validate,
	          url: '/api/auth/v1/validate/email'
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function (app) {
	    app.service('AnchorSmoothScroll', function () {

	        this.scrollTo = function (eID) {

	            var startY = currentYPosition();
	            var stopY = elmYPosition(eID);
	            var distance = stopY > startY ? stopY - startY : startY - stopY;
	            if (distance < 100) {
	                scrollTo(0, stopY);return;
	            }
	            var speed = Math.round(distance / 100);
	            if (speed >= 20) speed = 20;
	            var step = Math.round(distance / 100);
	            var leapY = stopY > startY ? startY + step : startY - step;
	            var timer = 0;
	            if (stopY > startY) {
	                for (var i = startY; i < stopY; i += step) {
	                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
	                    leapY += step;if (leapY > stopY) leapY = stopY;timer++;
	                }return;
	            }
	            for (var i = startY; i > stopY; i -= step) {
	                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
	                leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
	            }

	            function currentYPosition() {
	                // Firefox, Chrome, Opera, Safari
	                if (self.pageYOffset) return self.pageYOffset;
	                // Internet Explorer 6 - standards mode
	                if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
	                // Internet Explorer 6, 7 and 8
	                if (document.body.scrollTop) return document.body.scrollTop;
	                return 0;
	            }

	            function elmYPosition(eID) {
	                var elm = document.getElementById(eID);
	                var y = elm.offsetTop;
	                var node = elm;
	                while (node.offsetParent && node.offsetParent != document.body) {
	                    node = node.offsetParent;
	                    y += node.offsetTop;
	                }return y;
	            }
	        };
	    });
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function (app) {
	  app.factory('Blog', function ($q, $stamplay, $http) {
	    function all() {
	      var def = $q.defer();

	      Stamplay.Object("blog").get({}, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });
	      return def.promise;
	    };

	    function get(id) {
	      var def = $q.defer();

	      Stamplay.Object('blog').get({ _id: id }, function (err, res) {
	        if (err) return err;
	        def.resolve(res);
	      });

	      return def.promise;
	    };

	    return {
	      all: all,
	      get: get
	    };
	  });
	};

/***/ }
/******/ ]);