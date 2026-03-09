var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
  $scope.form = {};
  $scope.order = [];
  $scope.dice = "Ready to roll";
  $scope.diceArr = [];
  $scope.mobResult;

  $scope.addToOrder = function () {
    if ($scope.form.name && $scope.form.ini) {
      $scope.order.push($scope.form);
      $scope.form = {};
      document.getElementById("myTextField").focus();
    }
  };

  $scope.parsePasteDump = function () {
    let output = [];
    for (let i = 0; i < $scope.pasteDump.split("\n").length; i++) {
      const element = $scope.pasteDump.split("\n")[i];

      if (
        element.includes("Initiative: roll") ||
        element.includes("INITIATIVE: roll")
      ) {
        let dataObj = {
          result: 0,
          character: $scope.pasteDump.split("\n")[i - 1],
        };

        const roll = $scope.pasteDump.split("\n")[i + 1];
        if (roll.includes("(")) {
          // console.log('roll is complex: ', roll);
          dataObj.result = parseInt($scope.pasteDump.split("\n")[i + 4]);
        } else if (roll.includes("+")) {
          dataObj.result = parseInt(eval(roll));
          // console.log('roll is simple: ', roll);
        } else {
          dataObj.result = parseInt(roll);
          // console.log('roll is flat: ', roll);
        }

        output.push({
          hp: null,
          ini: dataObj.result,
          name: dataObj.character,
        });
      }
    }

    for (let j = 0; j < output.length; j++) {
      $scope.order.push(output[j]);
    }
    $scope.pasteDump = undefined;
  };

  $scope.clear = function () {
    $scope.form = {};
    $scope.order = [];
  };

  $scope.wizard = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "Count on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Dont count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  $scope.wizardSaid;
  $scope.wizardSays = function() {
    $scope.wizardSaid = $scope.wizard[Math.floor(Math.random() * $scope.wizard.length)];
  }

  $scope.numDice = 1;

  $scope.roll = function (sides) {
    $scope.dice = 0;
    $scope.diceArr = [];
    $scope.diceTot = 0;
    $scope.mobResult = 0;

    var t = 0;

    if ($scope.numDice > 1) {
      for (let index = 0; index < $scope.numDice; index++) {
        let ding = {
          val: Math.floor(Math.random() * sides + 1),
          id: new Date(),
        };
        t = t + ding.val;
        $scope.diceTot = t;

        $scope.diceArr.push(ding);
      }
    } else {
      $scope.diceTot = Math.floor(Math.random() * sides + 1);

      if (sides === 20) {
        switch ($scope.diceTot) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            $scope.mobResult = 1;
            break;
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            $scope.mobResult = 2;
            break;
          case 13:
          case 14:
            $scope.mobResult = 3;
            break;
          case 15:
          case 16:
            $scope.mobResult = 4;
            break;
          case 17:
          case 18:
            $scope.mobResult = 5;
            break;
          case 19:
            $scope.mobResult = 10;
            break;
          case 20:
            $scope.mobResult = 20;
            break;
          default:
          // code block
        }
      }
    }
  };
});
