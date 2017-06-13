'use strict';

  angular.
    module('myApp').
    component('photoList', {
      templateUrl: 'photo-list/photo-list.template.html',
      controller: function PhotoListController($http) {
        var self = this;
        $http.get('photos/photos.json').then(function(response) {
          self.photos = response.data;
        });
      }
    });
