gituserSearch.factory('Search', ['$http', function($http) {
  var token = '736ec2b220d58eefcaaa306b189c798e4981ceb5'
  var queryUrl = 'https://api.github.com/search/users?access_params=' + token

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
  }
}]);