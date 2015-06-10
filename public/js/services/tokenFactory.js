gituserSearch.factory('Token', ['$http', function($http) {
  var queryUrl = '/apitoken'

  return {
    query: function() {
      return $http({
        url: queryUrl,
        method: 'GET'
      });
    }
  }
}]);