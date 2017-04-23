angular
  .module('cedarpark')
  .factory('Placeholder', ['$http', function ($http) {
    return {
      get: function () {
        return $http.get('/api/placeholders');
      },
      create: function (placeholderData) {
        return $http.post('/api/placeholders', placeholderData);
      },
      delete: function (id) {
        return $http.delete('/api/placeholders/' + id);
      }
    };
  }]);