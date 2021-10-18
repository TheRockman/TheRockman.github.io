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
            // code block
          }
        }


        calendarArr[month].push(
          {
            date: day,
            month: month,
            day: i,
            dayName: dayName
          }
        )
      }
    });
    return calendarArr;
  }

  $scope.cal = $scope.generateCalendar(2021);
  console.log($scope.cal);
  $scope.displayMonth = 1;

});
