//select directive triggers change event on keyup
curConvApp.directive("select", function() {
    return {
      restrict: "E",
      require: "?ngModel",
      scope: false,
      link: function (scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }
        element.bind("keyup", function() {
          element.triggerHandler("change");
        })
      }
    }
  })