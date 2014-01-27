define(function(require, exports, module) {
	var app = angular.module('app', []);

    // 首页控制器
	app.controller('appCtrl', function ($scope) {
        $scope.user = null;
        $scope.pass = function () {
            var data = JSON.stringify($scope.user,1,10);
            alert('您输入的信息：\n' + data);
        }
	});

	angular.bootstrap(document, ['app']);
});