'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    }).state('Create Blog', {
      url: '/create',
      templateUrl: '/templates/blogCreate.html',
      controller: 'BlogCreateController',
      controllerAs: 'vm'
    })


    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
