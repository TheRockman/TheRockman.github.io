var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

  $scope.getMonthDays = function(year, month){
    const date = new Date(year, month - 1);
    const daysValue = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return daysValue.getDate();
  }
  $scope.generateCalendar = function(year){
    const calendarArr = {};
    const monthArgArr = [];
    // creation of all months
    for (let monthCount = 0; monthCount < 12; monthCount++) {
      calendarArr[monthCount + 1] = {};
    }
    // creating days in months
    Object.keys(calendarArr).forEach((month) => {
      const monthDays = $scope.getMonthDays(year, Number(month));
      calendarArr[month] = [];

      for (let i = 1; i < monthDays; i++) {
        let day = new Date(month+'/'+i+'/'+year);
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayName = days[day.getDay()];

        if(i === 1){
          switch(dayName) {
            case 'Monday':
              calendarArr[month] = [];
            break;
            case 'Tuesday':
              calendarArr[month] = ['a'];
            break;
            case 'Wednesday':
              calendarArr[month] = ['a','b'];
            break;
            case 'Thursday':
              calendarArr[month] = ['a','b','c',];
            break;
            case 'Friday':
              calendarArr[month] = ['a','b','c','d',];
            break;
            case 'Saturday':
              calendarArr[month] = ['a','b','c','d','e',];
            break;
            case 'Sunday':
              calendarArr[month] = ['a','b','c','d','e','f',];
            break;
            default:
          }
        }
        calendarArr[month].push(
          {
            date: day,
            year: year,
            month: month,
            day: i,
            events: [],
            dayName: dayName
          }
        )
      }
    });
    return calendarArr;
  }

  $scope.displayYear = 2021;
  $scope.setDisplayYear = function(mod){
    $scope.displayYear = $scope.displayYear + mod;
    $scope.cal = $scope.generateCalendar($scope.displayYear);
  }

  $scope.displayMonth = 1;
  $scope.setDisplayMonth = function(mod){
    $scope.displayMonth = $scope.displayMonth + mod;
    if($scope.displayMonth + mod > 12){
      $scope.setDisplayYear(+1);
      $scope.displayMonth = 1;
    } else if($scope.displayMonth + mod < 1){
      $scope.setDisplayYear(-1);
      $scope.displayMonth = 12;
    }
  }

  $scope.selectedDay = null;
  $scope.selectDay = function(day){
    $scope.selectedDay = day;
  }

  $scope.cal = $scope.generateCalendar($scope.displayYear);

  $scope.cal[1][20].events = [{title: 'Mikes birthday', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]

});
