'use strict';

describe('tourList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('myApp'));

  // Test the controller
  describe('TourListController', function() {

    it('should create a `tours` model with 9 tours', inject(function($componentController) {
      var ctrl = $componentController('tourList');

      expect(ctrl.tours.length).toBe(9);
    }));

  });

});
