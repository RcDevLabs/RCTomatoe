angular.module('rcTomatoe', [])
.controller('MainCtrl', function($rootScope, $scope, $timeout){
	var Timer = this;
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
	$scope.$on('timer-started', function(event, args){
		alert('iniciou');
	})
	$scope.$on('timer-paused', function(event, args){
		console.log("Pausing at ", args.currentTime)
	})
})
;