'use strict';

angular.module('addressBook')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('contacts', {url: '/contacts', templateUrl: '/views/contacts/contacts.html', abstract: true})
  .state('contacts.list', {url: '', templateUrl: '/views/contacts/contacts-list.html', controller: 'ContactsListCtrl'})
  .state('contacts.new', {url: '/new', templateUrl: '/views/contacts/contacts-new.html', controller: 'ContactsNewCtrl'})
  .state('contacts.show', {url: '/{name}/{bday}', templateUrl: '/views/contacts/contacts-show.html', controller: 'ContactsShowCtrl'});
});
