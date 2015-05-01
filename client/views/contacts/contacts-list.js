'use strict';

angular.module('addressBook')
.controller('ContactsListCtrl', function($rootScope, $scope, $state, User, $firebaseArray){
  User.init();

  $rootScope.afUser.$loaded().then(function(){
    $rootScope.afContacts.$watch(generateList);
  });

  

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
