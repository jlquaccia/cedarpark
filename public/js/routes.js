angular
  .module('cedarpark')
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/views/home.html'
      })
      .state('lyrics', {
        url: '/lyrics',
        controller: 'LyricsCtrl as lyrics',
        templateUrl: '/views/lyrics.html'
      })
      .state('counterfeit', {
        url: '/counterfeit',
        controller: 'LyricsCtrl as lyrics',
        templateUrl: '/views/counterfeit.html'
      })
      .state('fake-matter', {
        url: '/fake-matter',
        controller: 'LyricsCtrl as lyrics',
        templateUrl: '/views/fake-matter.html'
      })
      .state('demo', {
        url: '/demo',
        controller: 'LyricsCtrl as lyrics',
        templateUrl: '/views/demo.html'
      });

    $urlRouterProvider
      .otherwise('/');
  }]);
