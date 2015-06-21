app.controller('HomeController', function($scope, $http) {
  
  $scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

  var featherEditor = new Aviary.Feather({
    apiKey: '1234567',
    onSave: function(imageID, newURL) {
        var img = document.getElementById(imageID);
        img.src = newURL;
    }
  });

  $scope.launchEditor = function(id, src) {
    featherEditor.launch({
        image: id,
        url: src
    });
    return false;
  };

  $scope.imgUrl = "http://i1.wp.com/ashryanbeats.com/wp-content/uploads/2015/04/image.jpg?fit=1024%2C1024";

});