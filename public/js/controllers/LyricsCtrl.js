angular
  .module('cedarpark')
  .controller('LyricsCtrl', ['$scope', function ($scope) {
    // Blazy Image Loading
    $(document).ready(function () {
      (function() {
        // Initialize
        var bLazy = new Blazy({
          src: 'data-blazy'
        });
      })();
    });

    $('html, body').animate({
      scrollTop: 0
    }, 0);

    $scope.toTheTop = function () {
      $('html, body').animate({
        scrollTop: 0
      }, 750);
    };
  }]);
