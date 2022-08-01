var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.plots = [];

  $scope.addWidget = function(){
    $scope.plots.push(
      {
        id: new Date(),
        widgetData: {},
        config: false,
        style: {
          "grid-area": "auto / auto / auto / auto",
          "background": "linear-gradient(to bottom, #4776e6, #8e54e9)"
        }
      }
    )
  }

  $scope.setEx = function(){
    $scope.plots = $scope.ex;
  }
  $scope.ex = [
  {id:"2022-07-01T10:44:27.180Z",widgetData:{},config:false,widgetType:"music",style:{"grid-area":"1/1/3/1","background":"linear-gradient(to top, #3ca55c, #b5ac49)"}},
  {id:"2022-07-01T10:44:27.994Z",widgetData:{ac:true},widgetType:"air",config:false,style:{"grid-area":"auto / auto / auto / auto","background":"linear-gradient(to bottom, #4776e6, #8e54e9)"}},
  {id:"2022-07-01T10:44:28.373Z",widgetData:{mediaHeight: {"max-height":"420px"}},widgetType:"media",config:false,style:{"grid-area":"1/6/3/7","background":"#333"}},
  {id:"2022-07-01T10:44:30.690Z",widgetData:{},widgetType:"temp",config:false,style:{"grid-area":"auto / auto / auto / auto","background":"linear-gradient(to top, #dd5e89, #f7bb97)"}},
  {id:"2022-07-01T10:44:30.848Z",widgetData:{},widgetType:"car",config:false,style:{"grid-area":"2 / 2 / 3/ 4","background":"linear-gradient(to bottom, #ff512f, #dd2476)"}}
  ]

});
//['ngTouch', 'angular-carousel']
