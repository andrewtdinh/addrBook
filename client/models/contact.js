'use strict';

angular.module('addressBook')
.factory('Contact', function($rootScope, $window, $firebaseArray, $state, $firebaseObject){

  function Contact(){
  }

  Contact.save = function(contact){
    var birthday;
    if (contact.bday){
      console.log('Has birthday!');
      birthday = contact.bday.getTime();
    }
    return $rootScope.afContacts.$add(contact);
  };

  Contact.displayContact = function(contact, index){
    var key = $rootScope.afContacts.$keyAt(index);
    console.log('key: ', key);
    $state.go('contacts.show', {key: key});
  };

  Contact.delete = function(contact, index){
    var key = $rootScope.afContacts.$keyAt(index);
    var fbContact = $rootScope.fbContacts.child('' + key);
    var afContact = $firebaseObject(fbContact);

    return afContact.$remove();
    console.log('key: ', key);
    console.log('fbContact: ', afContact);
  };
  //
  // Album.addInfo = function(album){
  //   var albumCopy = angular.copy(album);
  //   albumCopy.date = album.date.getTime();
  //   albumCopy.createdAt = $window.Firebase.ServerValue.TIMESTAMP;
  //   var fbAlbum = $rootScope.fbUser.child('albums/' + album.name);
  //   var afAlbum = $firebaseArray(fbAlbum);
  //   $rootScope.afUser.$loaded().then(function(){
  //     // console.log($rootScope.afUser.albums[album.name]);
  //     var key = Object.keys($rootScope.afUser.albums[album.name])[0];
  //     // $rootScope.afUser.albums.test[key]
  //     console.log($rootScope.afUser.albums[album.name][key].description);
  //     if ($rootScope.afUser.albums[album.name][key].description){
  //       console.info(albumCopy);
  //       $rootScope.afUser.albums[album.name][key] = albumCopy;
  //       console.log($rootScope.afUser.albums[album.name][key]);
  //       return $rootScope.afUser.$save();
  //     }
  //     else{
  //       return afAlbum.$add(albumCopy);
  //     }
  //   });
  //   // Object.keys($rootScope.afUser.albums.seattle)[0]
  // };
  //
  // Album.addPhoto = function(photoString, albumName){
  //   var fbPhotos = $rootScope.fbUser.child('albums/' + albumName + '/photos');
  //   var afPhotos = $firebaseArray(fbPhotos);
  //   return afPhotos.$add(photoString);
  //
  // };
  //
  // Album.removeAlbum = function(albumName, index){
  //   $rootScope.afUser.$loaded().then(function(){
  //     var fbAlbums = $rootScope.fbUser.child('albums');
  //     var afAlbums = $firebaseArray(fbAlbums);
  //     var modedNameStr = removeStrAlbum(albumName);
  //     $rootScope.afUser.names = modedNameStr;
  //     $rootScope.afUser.$save();
  //     // console.log(afAlbums[index]);
  //     afAlbums.$loaded().then(function(){
  //       afAlbums.$remove(afAlbums[index]);
  //     });
  //   });
  // };
  //
  // Album.deleteImg = function(photo, index){
  //   // var userAlbums = $rootScope.afUser.albums;
  //   // var photos = userAlbums[$state.params.album].photos;
  //   var fbPhotos = $rootScope.fbUser.child('albums/'+$state.params.album+'/photos');
  //   var afPhotos = $firebaseArray(fbPhotos);
  //   // afPhotos.$remove(Object.keys(photos)[index]);
  //   console.log('afPhotos: ', afPhotos);
  //   console.log('fbPhotos: ', fbPhotos);
  //   afPhotos.$loaded().then(function(){
  //     afPhotos.$remove(afPhotos[index]);
  //   });
  // };
  //
  // function removeStrAlbum(albumName){
  //   var names = $rootScope.afUser.names ? $rootScope.afUser.names.split(',') : [];
  //   // console.log('rootscope.afUser.index: ', names.indexOf(albumName));
  //   if (names.indexOf(albumName) !== -1){
  //     names.splice(names.indexOf(albumName), 1);
  //   }
  //   // console.log('names: ', names);
  //   return names.join(',');
  //
  // }

  return Contact;
});
