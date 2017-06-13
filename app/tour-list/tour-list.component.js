'use strict';

  angular.
    module('myApp').
    component('tourList', {
      templateUrl: 'tour-list/tour-list.template.html',
      controller: function TourListController($http) {
        var self = this;
        $http.get('tours/tours.json').then(function(response) {
          self.tours = response.data;
        });
      }
    });
