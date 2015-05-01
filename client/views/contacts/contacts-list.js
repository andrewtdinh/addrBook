'use strict';

angular.module('addressBook')
.controller('ContactsListCtrl', function(Contact, $rootScope, $scope, $state, User, $firebaseArray){
  User.init();

  $rootScope.afUser.$loaded().then(function(){
    $rootScope.afContacts.$watch(generateList);
  });

  $scope.displayDetails = function(contact, index){
    console.log('Inside displayDetails');
    Contact.displayContact(contact, index);

  };

  $scope.edit = function(contact, index){
    Contact.edit(contact, index);
  };

  $scope.delete = function(contact, index){
    Contact.delete(contact, index);
  };

  // $scope.afUser.$loaded(function(){
  //   $scope.albums = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  //
  // });
  //
  // $scope.removeAlbum = function(albumName, index){
  //   Album.removeAlbum(albumName, index);
  //
  //   $scope.afUser.$loaded(function(){
  //     $scope.albums = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  //   });
  //
  // };
  function  generateList(){
    $scope.contacts = $rootScope.afContacts;
  }

});
