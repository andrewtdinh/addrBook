'use strict';

angular.module('addressBook')
.controller('ContactsNewCtrl', function($rootScope, $scope, $state, Contact){

  $scope.save = function(contact){
    Contact.save(contact)
    .then(function(){
      $scope.contact = {};
      $state.go('contacts.list');
    });
  };

  $scope.convertPhoto = function(photo){
    var preview = document.querySelector('img');
    // var preview = $scope.photoPreview;
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      // Album.addPhoto(reader.result, $scope.name);
      $scope.photo = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  };
});
