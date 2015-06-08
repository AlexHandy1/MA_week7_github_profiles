gituserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var searchResource = $resource('https://api.github.com/search/users')
  var token = '736ec2b220d58eefcaaa306b189c798e4981ceb5'
  var self = this

  self.doSearch = function(){
    self.searchResult = searchResource.get(
      {q: self.searchTerm,
      access_token: token}
      );
    }
}]);