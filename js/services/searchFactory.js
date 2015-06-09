gituserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_params=736ec2b220d58eefcaaa306b189c798e4981ceb5'

  var userQueryUrl = 'https://api.github.com/users'

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      });
    }

    queryTwo: function(logins) {
      return $http({
        url: userQueryUrl + "/" + logins,
        method: 'GET',
      });
    }
  }
}]);