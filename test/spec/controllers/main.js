'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoChallengeApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it("should have no items to start with", function(){
    expect(scope.todos.length).toBe(0);
  });

  it("should allow to type text and add todo to the list", function(){
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it("should allow to remove a todo form the list", function(){
    scope.todo ="Test 1";
    scope.addTodo();
    scope.removeTodo();
    expect(scope.todos.length).toBe(0);
  });

});
