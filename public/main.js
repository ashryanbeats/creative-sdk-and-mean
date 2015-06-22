'use strict';

var app = angular.module('Meaniscule', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');
});
'use strict';

app.controller('HomeController', function ($scope, $http) {

  var featherEditor = new Aviary.Feather({
    apiKey: '1234567', // public dummy key provided by Adobe in the example on the website
    onSave: function onSave(imageID, newURL) {
      var img = document.getElementById(imageID);
      img.src = newURL;
    }
  });

  $scope.launchEditor = function (id, src) {
    featherEditor.launch({
      image: id,
      url: src
    });
    return false;
  };

  $scope.imgUrl = 'http://i1.wp.com/ashryanbeats.com/wp-content/uploads/2015/04/image.jpg?fit=1024%2C1024';
});
'use strict';

app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/app/home/home.html',
        controller: 'HomeController'
    });
});
'use strict';

app.controller('ModulesController', function ($scope, $http, ModulesFactory) {

  $scope.$on('$stateChangeSuccess', function () {
    var defaultMessage = 'If you don\'t see a list of links here, you need to seed your database!\nIn your terminal, go to this app\'s directory and run `gulp seedDB`.\nThen try this page again.';

    ModulesFactory.getNodeModules().then(function (modules) {
      $scope.nodeModules = modules;

      if (!$scope.nodeModules.length) {
        $scope.defaultMessage = defaultMessage;
      }
    });
  });
});
'use strict';

app.factory('ModulesFactory', function ($http) {
  return {
    getNodeModules: function getNodeModules() {
      return $http.get('/api/modules/').then(function (res) {
        return res.data;
      });
    }
  };
});
'use strict';

app.config(function ($stateProvider) {
    $stateProvider.state('modules', {
        url: '/modules',
        templateUrl: '/app/modules/modules.html',
        controller: 'ModulesController'
    });
});
"use strict";

app.directive("navbar", function () {
	return {
		restrict: "E",
		templateUrl: "/app/navbar/navbar.html"
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImhvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiaG9tZS9ob21lLnN0YXRlLmpzIiwibW9kdWxlcy9tb2R1bGVzLmNvbnRyb2xsZXIuanMiLCJtb2R1bGVzL21vZHVsZXMuZmFjdG9yeS5qcyIsIm1vZHVsZXMvbW9kdWxlcy5zdGF0ZS5qcyIsIm5hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztBQUV0RCxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUU7O0FBRXpELG9CQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMscUJBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3BDLENBQUMsQ0FBQzs7O0FDUEgsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBRXZELE1BQUksYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNyQyxVQUFNLEVBQUUsU0FBUztBQUNqQixVQUFNLEVBQUUsZ0JBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUM5QixVQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLFNBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO0tBQ3BCO0dBQ0YsQ0FBQyxDQUFDOztBQUVILFFBQU0sQ0FBQyxZQUFZLEdBQUcsVUFBUyxFQUFFLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLGlCQUFhLENBQUMsTUFBTSxDQUFDO0FBQ2pCLFdBQUssRUFBRSxFQUFFO0FBQ1QsU0FBRyxFQUFFLEdBQUc7S0FDWCxDQUFDLENBQUM7QUFDSCxXQUFPLEtBQUssQ0FBQztHQUNkLENBQUM7O0FBRUYsUUFBTSxDQUFDLE1BQU0sR0FBRyx3RkFBd0YsQ0FBQztDQUUxRyxDQUFDLENBQUM7OztBQ3BCSCxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsY0FBYyxFQUFFO0FBQ2pDLGtCQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUN6QixXQUFHLEVBQUUsR0FBRztBQUNSLG1CQUFXLEVBQUUscUJBQXFCO0FBQ2xDLGtCQUFVLEVBQUUsZ0JBQWdCO0tBQy9CLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQzs7O0FDTkgsR0FBRyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFOztBQUUxRSxRQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFlBQVk7QUFDNUMsUUFBSSxjQUFjLEdBQUcsMEtBQTBLLENBQUM7O0FBRWhNLGtCQUFjLENBQUMsY0FBYyxFQUFFLENBQzVCLElBQUksQ0FBQyxVQUFTLE9BQU8sRUFBRTtBQUN0QixZQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQzs7QUFFN0IsVUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQzlCLGNBQU0sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO09BQ3hDO0tBQ0YsQ0FBQyxDQUFDO0dBQ04sQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDOzs7QUNkSCxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFVBQVMsS0FBSyxFQUFFO0FBQzVDLFNBQU87QUFDTCxrQkFBYyxFQUFFLDBCQUFXO0FBQ3pCLGFBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDOUIsSUFBSSxDQUFDLFVBQVMsR0FBRyxFQUFFO0FBQ2xCLGVBQU8sR0FBRyxDQUFDLElBQUksQ0FBQztPQUNqQixDQUFDLENBQUM7S0FDTjtHQUNGLENBQUM7Q0FDSCxDQUFDLENBQUM7OztBQ1RILEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxjQUFjLEVBQUU7QUFDakMsa0JBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQzVCLFdBQUcsRUFBRSxVQUFVO0FBQ2YsbUJBQVcsRUFBRSwyQkFBMkI7QUFDeEMsa0JBQVUsRUFBRSxtQkFBbUI7S0FDbEMsQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDOzs7QUNOSCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFVO0FBQ2pDLFFBQU87QUFDTixVQUFRLEVBQUUsR0FBRztBQUNiLGFBQVcsRUFBRSx5QkFBeUI7RUFDdEMsQ0FBQztDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdNZWFuaXNjdWxlJywgWyd1aS5yb3V0ZXInXSk7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgIC8vIFRoaXMgdHVybnMgb2ZmIGhhc2hiYW5nIHVybHMgKC8jYWJvdXQpIGFuZCBjaGFuZ2VzIGl0IHRvIHNvbWV0aGluZyBub3JtYWwgKC9hYm91dClcbiAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgIC8vIElmIHdlIGdvIHRvIGEgVVJMIHRoYXQgdWktcm91dGVyIGRvZXNuJ3QgaGF2ZSByZWdpc3RlcmVkLCBnbyB0byB0aGUgXCIvXCIgdXJsLlxuICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCkge1xuICBcbiAgdmFyIGZlYXRoZXJFZGl0b3IgPSBuZXcgQXZpYXJ5LkZlYXRoZXIoe1xuICAgIGFwaUtleTogJzEyMzQ1NjcnLCAvLyBwdWJsaWMgZHVtbXkga2V5IHByb3ZpZGVkIGJ5IEFkb2JlIGluIHRoZSBleGFtcGxlIG9uIHRoZSB3ZWJzaXRlXG4gICAgb25TYXZlOiBmdW5jdGlvbihpbWFnZUlELCBuZXdVUkwpIHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltYWdlSUQpO1xuICAgICAgICBpbWcuc3JjID0gbmV3VVJMO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLmxhdW5jaEVkaXRvciA9IGZ1bmN0aW9uKGlkLCBzcmMpIHtcbiAgICBmZWF0aGVyRWRpdG9yLmxhdW5jaCh7XG4gICAgICAgIGltYWdlOiBpZCxcbiAgICAgICAgdXJsOiBzcmNcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLmltZ1VybCA9IFwiaHR0cDovL2kxLndwLmNvbS9hc2hyeWFuYmVhdHMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzA0L2ltYWdlLmpwZz9maXQ9MTAyNCUyQzEwMjRcIjtcblxufSk7IiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9ob21lL2hvbWUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcidcbiAgICB9KTtcbn0pOyIsImFwcC5jb250cm9sbGVyKCdNb2R1bGVzQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIE1vZHVsZXNGYWN0b3J5KSB7XG4gIFxuICAkc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZWZhdWx0TWVzc2FnZSA9ICdJZiB5b3UgZG9uXFwndCBzZWUgYSBsaXN0IG9mIGxpbmtzIGhlcmUsIHlvdSBuZWVkIHRvIHNlZWQgeW91ciBkYXRhYmFzZSFcXG5JbiB5b3VyIHRlcm1pbmFsLCBnbyB0byB0aGlzIGFwcFxcJ3MgZGlyZWN0b3J5IGFuZCBydW4gYGd1bHAgc2VlZERCYC5cXG5UaGVuIHRyeSB0aGlzIHBhZ2UgYWdhaW4uJztcblxuICAgIE1vZHVsZXNGYWN0b3J5LmdldE5vZGVNb2R1bGVzKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgJHNjb3BlLm5vZGVNb2R1bGVzID0gbW9kdWxlcztcbiAgICAgICAgXG4gICAgICAgIGlmICghJHNjb3BlLm5vZGVNb2R1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICRzY29wZS5kZWZhdWx0TWVzc2FnZSA9IGRlZmF1bHRNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59KTsiLCJhcHAuZmFjdG9yeSgnTW9kdWxlc0ZhY3RvcnknLCBmdW5jdGlvbigkaHR0cCkge1xuICByZXR1cm4ge1xuICAgIGdldE5vZGVNb2R1bGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvbW9kdWxlcy8nKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pOyAgICBcbiAgICB9XG4gIH07XG59KTsiLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdtb2R1bGVzJywge1xuICAgICAgICB1cmw6ICcvbW9kdWxlcycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9tb2R1bGVzL21vZHVsZXMuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNb2R1bGVzQ29udHJvbGxlcidcbiAgICB9KTtcbn0pOyIsImFwcC5kaXJlY3RpdmUoXCJuYXZiYXJcIiwgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2FwcC9uYXZiYXIvbmF2YmFyLmh0bWxcIlxuXHR9O1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9