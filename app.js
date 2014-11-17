var app = angular.module('app', []);

app.controller('mainController', function($scope) {

  $scope.allPlayers = [{
    id: 1,
    name: 'foo'
  }, {
    id: 2,
    name: 'bar'
  }, {
    id: 3,
    name: 'blah'
  }, {
    id: 4,
    name: 'jack'
  }, {
    id: 5,
    name: 'jill'
  }];

  $scope.selectedPlayers = [];

  $scope.movePlayersRight = function(itemToMove, sourceItems, destItems) {
    
      // Adding to the Destination list
    var currentList = $scope.selectedPlayers;
    var newList = currentList.concat(itemToMove);
    $scope.selectedPlayers = newList;
    
    //removing from all Players
    angular.forEach(itemToMove, function(item) {
      var index=$scope.allPlayers.indexOf(item);
      if(index>=0)
       $scope.allPlayers.splice(index,1);
    });
  };

  $scope.movePlayersLeft = function(itemsToMove, sourceItems, destItems) {
    var currentList = $scope.allPlayers;
    var newList = currentList.concat(itemsToMove);
    $scope.allPlayers = newList;
    
     //removing from all Players
    angular.forEach(itemsToMove, function(item) {
      var index=$scope.selectedPlayers.indexOf(item);
      if(index>=0)
       $scope.selectedPlayers.splice(index,1);
    });
  };
  
  
});
