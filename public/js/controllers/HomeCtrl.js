angular
  .module('cedarpark')
  .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/api/cedar-park-ig')
      .then(
        function (response) {
          response = JSON.parse(response.data);
          $scope.cedarParkIG = response.items;
          console.log(response);
        }
      );
  }]);