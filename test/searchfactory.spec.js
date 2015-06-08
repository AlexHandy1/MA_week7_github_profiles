describe('factory: Search', function(){
  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  var token = '736ec2b220d58eefcaaa306b189c798e4981ceb5';
  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_params=" + token + "q=hello")
        .respond(
            {items: items}
        )
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function(){
    search.query('hello')
    .then(function(response){
      expect(response.data).toEqual(items)
  });

});