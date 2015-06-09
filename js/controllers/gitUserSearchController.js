gituserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this

  self.doSearch = function(){
      var counter = 0
      self.logins = []
      Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(response.data.items[counter].login);
        self.logins.push(response.data.items[counter].login)
        console.log(self.logins)
        counter +=1;
      })
      Search.queryTwo(self.logins)
      .then(function(response) {
        self.extraInfo = response.data;
        console.log(response.data);
      })
    };
}]);