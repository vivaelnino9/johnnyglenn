'use strict';

  angular.
    module('myApp').
    component('tourList', {
      template:
          '<ul>' +
            '<li ng-repeat="tour in $ctrl.tours">' +
              '<p>{{tour.date}}&nbsp;|&nbsp;{{tour.time}}&nbsp;|&nbsp;{{tour.venue}}&nbsp;|&nbsp;{{tour.city}}</p>' +
              // '<p>{{tour.time}}</p>' +
              // '<p>{{tour.venue}}</p>' +
              // '<p>{{tour.city}}</p>' +
            '</li>' +
          '</ul>',
      controller: function TourListController() {
        this.tours = [
            {
                date: "June 10th",
                time: "9pm",
                venue: "House of Blues (Restaurant)",
                city: "Boston, MA"
            },
            {
                date: "June 22nd",
                time: "5:30pm",
                venue: "Goorin Bros. Hat Shop",
                city: "Boston, MA"
            },
            {
                date: "June 29th",
                time: "4pm",
                venue: "House of Blues (Foundation Room)",
                city: "Boston, MA"
            },
            {
                date: "July 5th",
                time: "8pm",
                venue: "PA's Lounge",
                city: "Cambridge, MA"
            },
            {
                date: "July 13th",
                time: "5:30pm",
                venue: "Goorin Bros. Hat Shop",
                city: "Boston, MA"
            },
            {
                date: "July 20th",
                time: "11:30am",
                venue: "House of Blues (Foundation Room)",
                city: "Boston, MA"
            },
            {
                date: "July 29th",
                time: "9pm",
                venue: "House of Blues (Restaurant)",
                city: "Boston, MA"
            },
            {
                date: "August 17th",
                time: "5:30pm",
                venue: "Goorin Bros. Hat Shop",
                city: "Boston, MA"
            },
            {
                date: "September 16th",
                time: "TBD",
                venue: "Heritage Music Festival",
                city: "Boston, MA"
            }
        ];
      }
    });
