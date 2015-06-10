gituserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/users'

  // 'https://api.github.com/search/users?access_params=736ec2b220d58eefcaaa306b189c798e4981ceb5'
  // var queryUrl2 = 'https://api.github.com/search/users?access_params=736ec2b220d58eefcaaa306b189c798e4981ceb5'

  // "https://api.github.com/users?"

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl + "/" + searchTerm,
        method: 'GET',
      });
    }
  }

  //   query2: function(searchTerm) {
  //     return $http({
  //       url: queryUrl2
  //       method: 'GET'
  //     })
  //   }
  // }

}]);