angular.module('rcTomatoe', ['timer'])
.controller('MainCtrl', function($scope){
	$scope.roundNumber = '0';
	$scope.finished = function(){
		$scope.roundNumber++
		if($scope.roundNumber % 5 == 0){
			alert('pcent 5')
		}
		if($scope.pausa == true) {
			$scope.pausa == false
		} else {
			$scope.pausa == true;
		}
	}
	$scope.startTimer = function(){
		$scope.$broadcast('timer-start');
		$scope.timerRunning = true;
	}
})
;