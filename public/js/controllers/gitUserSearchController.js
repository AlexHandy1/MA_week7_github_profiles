gituserSearch.controller('GitUserSearchController', ['Search', 'Token',function(Search, Token) {
  var self = this

  self.doSearch = function(){
      Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = [response.data];
        console.log(response.data)
      })

      Token.query()
      .then(function(response) {
        console.log(response.data.token)
      })
    };
}]);