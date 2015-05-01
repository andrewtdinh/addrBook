'use strict';

angular.module('addressBook')
.controller('ContactsNewCtrl', function($rootScope, $scope, $state){

  // $scope.add = function(album){
  //   Album.add(album)
  //   .then(function(){
  //     $scope.album.name = '';
  //     $state.go('albums.list');
  //   });
  // };

  $scope.convertPhoto = function(photo){
    var preview = document.querySelector('img');
    // var preview = $scope.photoPreview;
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      // Album.addPhoto(reader.result, $scope.name);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
    $scope.contact.photo = null;
    $state.go('contacts.new');
  };

  // function getPhotos(){
  //   var fbPhotos = $rootScope.fbUser.child('albums/' + $state.params.album+ '/photos');
  //   var afPhotos = $firebaseArray(fbPhotos);
  //   return afPhotos;
  // }

});
