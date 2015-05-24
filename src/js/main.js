angular.module('rcTomatoe', [])
.controller('MainCtrl', function(timerFactory, $scope, $timeout){
	$scope.timer = timerFactory;
	
	$scope.$on('timer-started', function(event, args){
		alert('iniciou');
	})
	$scope.$on('timer-paused', function(event, args){
		console.log("Pausing at ", args.currentTime)
	})
})
.factory('timerFactory', function($rootScope){
	var Timer = {};
	Timer.startTimer = function(){
		$rootScope.$broadcast('timer-started')
	}
	Timer.pauseTimer = function(currTime){
		$rootScope.$broadcast('timer-paused', {currentTime: currTime})
	}
	Timer.resumeTimer = function(){
		$rootScope.$broadcast('timer-resumed')
	}
	Timer.endTimer = function(){
		$rootScope.$broadcast('timer-ended')
	}
	return Timer;
})
;