angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('itemCtrl', function($scope) {
  $scope.groups = [];

  
  $scope.groups = [{name:"burger",items:["zinger","beef","chicken"],img:"img/19.jpg", quantity:1,price:100, show:false},
                   {name:"biryani",items:["beef","chicken","biryani"],img:"img/2.jpg", quantity:1,price:100, show:false},
                   {name:"Seafood",items:["prawns","Fried fish","Finger fish"],img:"img/18.jpg", quantity:1,price:100, show:false}];

  
 
  $scope.sub = function(i) {
  i.quantity--;
}

$scope.add = function(i) {
  i.quantity++;
}
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
  
})
.controller('homeCtrl', function($scope)
{
  $scope.menu = [];
  $scope.menu = [ {name:"STARTERS",items:[{ itemName:"ABC",price:100,
                                            itemName:"XYZ",price:150,
                                            itemName:"IJK",price:200}],quantity:1},
                  {name:"SEA FOOD",items:[{ itemName:"ABC",price:100,
                                            itemName:"XYZ",price:100,
                                            itemName:"IJK",price:100}],quantity:1},
                  {name:"STEAK",items:[{    itemName:"ABC",price:100,
                                            itemName:"XYZ",price:100,
                                            itemName:"IJK",price:100}],quantity:1},
                  {name:"KARAHI",items:[{   itemName:"ABC",price:100,
                                            itemName:"XYZ",price:100,
                                            itemName:"IJK",price:100}],quantity:1},
                  {name:"CHINEESE",items:[{ itemName:"ABC",price:100,
                                            itemName:"XYZ",price:100,
                                            itemName:"IJK",price:100}],quantity:1},
                  {name:"BBQ",items:[{      itemName:"ABC",price:100,
                                            itemName:"XYZ",price:100,
                                            itemName:"IJK",price:100}],quantity:1},
                  {name:"BEVERAGES",items:[{itemName:"ABC",price:100,
                                            itemName:"XYZ",price:100,
                                            itemName:"IJK",price:100}],quantity:1}
                  ];

  $scope.sub = function(i) {
  i.quantity--;
}

$scope.add = function(i) {
  i.quantity++;
}

})