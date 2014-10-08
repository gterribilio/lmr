 'use strict';

 var datepicker = angular.module('angular-datepicker', []);

 datepicker.directive('datepicker', function() {
  return {
    link: function(scope, el, attr) {
      $(el).datepicker({
        onSelect: function(dateText) {
          //console.log(dateText);
          var expression = attr.ngModel + " = " + "'" + dateText + "'";
          scope.$apply(expression);
          //console.log(scope.startDate);
        }
      });
    }
  };
});