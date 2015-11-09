angular.module('bracketmt', [
  // 'bracketmt.services',
  'ui.router',
  'ngMaterial'
])
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('nav', {
      url: '/nav',
      templateUrl: 'app/nav/nav.html'
    })
    .state('nav.signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup.html'
    })
    .state('nav.signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html'
    });

  $urlRouterProvider.otherwise('/nav/signup');
});
