'use strict';

angular.module('addressBook')
.factory('User', function($rootScope, $firebaseArray, $firebaseObject){

  function User(){
  }
  
  User.init = function(){
    var data = $rootScope.activeUser;
    $rootScope.displayName = getDisplayName(data);
    $rootScope.fbUser = $rootScope.fbRoot.child('users/' + data.uid);
    $rootScope.afUser = $firebaseObject($rootScope.fbUser);
    $rootScope.afUser.$loaded().then(function(){
      $rootScope.fbContacts = $rootScope.fbUser.child('contacts');
      $rootScope.afContacts = $firebaseArray($rootScope.fbContacts);
    });
  };

  User.oauth = function(provider){
    console.log(provider);
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  function getDisplayName(data) {
    switch(data.provider){
      case 'password':
        return data.password.email;
      case 'twitter':
        return data.twitter.username;
      case 'google':
        return data.google.displayName;
      case 'github':
        return data.github.displayName;
    }
  }

  return User;
});
