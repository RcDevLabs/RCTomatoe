angular.module('rcTomatoe', [])
.controller('MainCtrl', function($rootScope, $scope, $timeout){
	$scope.startTimer = function(){
		$rootScope.$broadcast('timer-started')
	}
	$scope.pauseTimer = function(){
		$rootScope.$broadcast('timer-paused')
	}
	$scope.resumeTimer = function(){
		$rootScope.$broadcast('timer-resumed')
	}
	$scope.endTimer = function(){
		$rootScope.$broadcast('timer-ended')
	}
});