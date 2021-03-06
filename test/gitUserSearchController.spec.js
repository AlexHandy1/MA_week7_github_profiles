describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it ("initializes with an empty search result and term", function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function (){
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_params='736ec2b220d58eefcaaa306b189c798e4981ceb5" + "q=hello")
        .respond(
            {items: items}
        )
  }))

    afterEach(function(){
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

      it('displays search results', function(){
        ctrl.searchTerm = "hello";
        ctrl.doSearch();
        httpBackend.flush();
        expect(ctrl.searchResult.items).toEqual(items);
      });
  });
});