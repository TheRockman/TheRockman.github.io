var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
    $scope.form = {
        name: {
            value: "Name Lastname",
            editing: false
        },
        phone: {
            value: "123-456-7890",
            editing: false
        },
        email: {
            value: "name@example.com",
            editing: false
        },
        residence: {
            value: "123 Main St",
            editing: false
        },
        primaryContactName: {
            value: "Primary Contact Name",
            editing: false
        }
    };
    
    $scope.units = 'cm';
    $scope.toggleUnits = function() {
        $scope.units = $scope.units === 'cm' ? 'in' : 'cm';
    }

    $scope.editField = function(field) {
        $scope.form[field].editing = true;
    };
});
//['ngTouch', 'angular-carousel']
