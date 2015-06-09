gituserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this

  self.doSearch = function(){
      Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(response.data.items[0])
      })
    };
}]);