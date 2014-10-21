 'use strict';

 var datepicker = angular.module('angularDatepicker', []);

 datepicker.directive('datepicker', function() {
  return {
    link: function(scope, el, attr) {
      $(el).datepicker({
         dateFormat: 'yy-mm-dd',
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