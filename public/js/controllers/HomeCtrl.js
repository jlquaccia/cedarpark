angular
  .module('cedarpark')
  .controller('HomeCtrl', ['$scope', '$http', '$document', function ($scope, $http, $document) {
    // instagram
    $http.get('/api/cedar-park-ig')
      .then(
        function (response) {
          response = JSON.parse(response.data);
          $scope.cedarParkIG = response.data.user.edge_owner_to_timeline_media.edges;
          console.log(response);
        }
      );

    // scroll events
    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();

      // show/hide scroll to top button when necessary
      if (scrollPos > 0) {
        $('#home .to-top').css('transform', 'translateY(0)');
      } else {
        $('#home .to-top').css('transform', 'translateY(70px)');
      }
    });

    $scope.toTheTop = function () {
      $('html, body').animate({
        scrollTop: 0
      }, 750);
    };

    $(document).ready(function () {
      (function() {
        // Initialize
        var bLazy = new Blazy({
          src: 'data-blazy'
        });
      })();
    });
  }]);