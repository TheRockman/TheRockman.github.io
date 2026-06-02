"use strict";
var app = angular.module("myApp", ["ngTouch", "ngSanitize"]);
app.controller(
  "mainCtrl",
  function (
    $scope,
    debateService,
    intermissionsService,
    crisisService,
    consequencesService,
  ) {
    $scope.factions = {
      AA: 5,
      BB: 5,
      CC: 5,
      DD: 5,
      EE: 5,
    };

    $scope.factionExists = function (faction) {
      return $scope.factions[faction] < 999;
    };

    $scope.isChain = function () {
      return $scope.currentDebate.pitch.chain !== undefined;
    };

    $scope.metaStats = {
      exp: 0,
      popularity: 0, // -1000 to 1000 with 0 being the starting point
      power: 0, // -1000 to 1000 with 0 being the starting point
    };

    $scope.eventFlags = {
      argumentHistory: {},
    };

    var getSafeNumber = function (value) {
      return typeof value === "number" ? value : 0;
    };

    var getArgumentChange = function (argument, key) {
      return getSafeNumber(argument && argument[key]);
    };

    var sumValues = function (objectToSum) {
      return Object.values(objectToSum || {}).reduce(function (sum, value) {
        return sum + getSafeNumber(value);
      }, 0);
    };

    var randomIndex = function (length) {
      return Math.floor(Math.random() * Math.max(0, length));
    };

    var CRISIS_FREQUENCY = 4;

    $scope.start = false;

    $scope.currentArgument = null;
    $scope.currentDebate = null;
    $scope.currentSpeaker = null;

    $scope.currentCrisis = null;
    $scope.crisisSolver = null;
    $scope.hints = true;

    $scope.currentConsequences = [];
    $scope.devotedFlags = {};

    $scope.name = {
      AA: "Abrams Stovevalve",
      BB: "Bella MacGuffin",
      CC: "Clocktoria III",
      DD: "Dack Rowley",
      EE: "Enoch Diptych",
    };

    let originalDebates = debateService.originalDebates;
    $scope.debates = JSON.parse(JSON.stringify(originalDebates));

    $scope.intermissions = intermissionsService.intermissions;
    $scope.consequences = consequencesService.consequences;
    $scope.crisisEvents = crisisService.crisisEvents;

    $scope.setCrisisSolver = function (solver) {
      $scope.crisisSolver = solver || null;
    };

    $scope.setCurrentCrisis = function (crisis) {
      $scope.currentCrisis = crisis || null;
    };

    //  $scope.setCurrentCrisis($scope.crisisEvents[0]);
    $scope.resolveCrisis = function () {
      if (!$scope.currentCrisis || !$scope.crisisSolver) {
        console.warn(
          "resolveCrisis called without a selected crisis or solver",
        );
        return false;
      }

      var solverValue = getSafeNumber($scope.factions[$scope.crisisSolver]);
      var result = "fail";

      if ($scope.currentCrisis.stat === "loyalty") {
        result =
          solverValue >= getSafeNumber($scope.currentCrisis.dc)
            ? "pass"
            : "fail";
      } else if ($scope.currentCrisis.stat === "power") {
        result =
          getSafeNumber($scope.metaStats.power) + solverValue * 10 >=
          getSafeNumber($scope.currentCrisis.dc)
            ? "pass"
            : "fail";
      } else if ($scope.currentCrisis.stat === "popularity") {
        result =
          getSafeNumber($scope.metaStats.popularity) + solverValue * 10 >=
          getSafeNumber($scope.currentCrisis.dc)
            ? "pass"
            : "fail";
      } else {
        console.warn("Unknown crisis stat:", $scope.currentCrisis.stat);
      }

      $scope.currentCrisis.resolved = result;
      return result;
    };

    $scope.setStart = function (value) {
      $scope.start = value;
    };

    $scope.setHints = function (value) {
      $scope.hints = value;
    };

    var scrubFactionFromDebates = function (faction) {
      for (var i = 0; i < $scope.debates.length; i++) {
        if ($scope.debates[i].pitch.faction === faction) {
          delete $scope.debates[i];
        }
      }
    };

    $scope.setCurrentDebate = function (debate) {
      $scope.currentDebate = debate || null;
    };

    $scope.resetCurrentSpeaker = function () {
      $scope.currentSpeaker = null;
      $scope.currentArgument = null;
    };

    $scope.dismissCrisis = function () {
      $scope.crisisSolver = null;
      $scope.currentCrisis = null;
    };

    // Count how many times debates have advanced
    $scope.startDebateCount = 0;

    $scope.maybeTriggerCrisisEvent = function () {
      $scope.startDebateCount = ($scope.startDebateCount || 0) + 1;
      if ($scope.startDebateCount % CRISIS_FREQUENCY === 0) {
        if (!$scope.crisisEvents || $scope.crisisEvents.length === 0)
          return false;
        var idx = Math.floor(Math.random() * $scope.crisisEvents.length);
        var crisis = $scope.crisisEvents.splice(idx, 1)[0];
        $scope.setCurrentCrisis(crisis);
        $scope.setCrisisSolver(null);
        return true;
      }
      return false;
    };

    $scope.setCurrentArgument = function (argument) {
      if (
        !argument ||
        !$scope.currentDebate ||
        !$scope.currentDebate.arguments ||
        !$scope.currentDebate.arguments[argument]
      ) {
        $scope.currentSpeaker = null;
        $scope.currentArgument = null;
        return;
      }
      $scope.currentSpeaker = argument.toString();
      $scope.currentArgument = $scope.currentDebate.arguments[argument];
    };

    function mergeMeta(objA, objB) {
      var mergedObj = {};
      var allKeys = new Set(
        Object.keys(objA || {}).concat(Object.keys(objB || {})),
      );
      allKeys.forEach(function (key) {
        mergedObj[key] = getSafeNumber(objA[key]) + getSafeNumber(objB[key]);
      });
      $scope.metaStats = mergedObj;
    }

    function applyDecision(modKey, result) {
      if (!$scope.currentDebate || !$scope.currentDebate.arguments) {
        console.warn("applyDecision called without an active debate");
        return;
      }

      Object.keys($scope.factions).forEach(function (faction) {
        var change = getArgumentChange(
          $scope.currentDebate.arguments[faction],
          modKey,
        );
        if ($scope.devotedFlags[faction] && change < 0) {
          console.log(
            "Devoted flag for " + faction + " prevented a change of " + change,
            $scope.devotedFlags,
          );
          delete $scope.devotedFlags[faction];
          return;
        }
        $scope.factions[faction] += change;
      });

      $scope.currentDebate.result = result;
      $scope.eventFlags.argumentHistory[$scope.currentDebate.idShort] = result;
      mergeMeta($scope.currentDebate.metaStats, $scope.metaStats);

      $scope.setCurrentArgument($scope.currentDebate.pitch.faction);
    }

    $scope.approve = function () {
      applyDecision("modApproved", true);
    };

    $scope.reject = function () {
      applyDecision("modRejected", false);
    };

    $scope.checkForConsequences = function () {
      $scope.currentConsequences = $scope.consequences.filter(function (cons) {
        return cons.condition($scope.factions, $scope.metaStats);
      });
      $scope.updateDevotedFlags();
    };

    $scope.updateDevotedFlags = function () {
      $scope.currentConsequences.forEach(function (cons) {
        if (!cons.title || !/your devoted ally/i.test(cons.title)) return;
        Object.keys($scope.name).forEach(function (faction) {
          if (cons.title.indexOf($scope.name[faction]) !== -1) {
            $scope.devotedFlags[faction] = true;
          }
        });
      });
    };

    $scope.acknowledgeConsequence = function (con) {
      $scope.currentConsequences = $scope.currentConsequences.filter(
        function (item) {
          return item != con;
        },
      );
      $scope.consequences = $scope.consequences.filter(function (item) {
        return item != con;
      });
    };

    let eventOrderHistory = [];

    $scope.startNextDebate = function () {
      const memoId = JSON.parse(JSON.stringify($scope.currentDebate.idShort));
      eventOrderHistory.push(memoId);
      console.log("Event order history:", eventOrderHistory);

      $scope.debates = $scope.debates.filter(function (item) {
        return item.idShort != $scope.currentDebate.idShort;
      });

      $scope.currentDebate = {};
      $scope.currentArgument = null;
      $scope.currentSpeaker = null;

      $scope.checkForConsequences();

      // Trigger specific dialogue or event following the current debate, either based on variables, or the previous debate.
      let newDebate;

      // Direct responses &  side stories
      if ($scope.factions.BB > 0 && $scope.intermissions.intermission_the_great_gala) {
        newDebate = JSON.parse(
          JSON.stringify($scope.intermissions.intermission_the_great_gala),
        );
        delete $scope.intermissions.intermission_the_great_gala;
        $scope.setCurrentDebate(newDebate);
        return;
      }
      if ($scope.factions.DD < 0 && $scope.intermissions.intermission_dack_leaves_0) {
        newDebate = JSON.parse(
          JSON.stringify($scope.intermissions.intermission_dack_leaves_0),
        );
        delete $scope.intermissions.intermission_dack_leaves_0;
        delete $scope.factions.DD;
        scrubFactionFromDebates("DD");
        $scope.setCurrentDebate(newDebate);
        return;
      }
      if (
        eventOrderHistory.at(-1) === "greenlight_gambit" &&
        $scope.intermissions.intermission_honor_the_ancestors
      ) {
        newDebate = JSON.parse(
          JSON.stringify($scope.intermissions.intermission_honor_the_ancestors),
        );
        delete $scope.intermission_honor_the_ancestors;
        $scope.setCurrentDebate(newDebate);
        return;
      }
      if (
        eventOrderHistory.at(-2) === "farewell_to_arms" &&
        $scope.eventFlags.argumentHistory["farewell_to_arms"] === false &&
        $scope.factions.AA < 6 &&
        $scope.intermissions.intermission_a_moment_of_your_time
      ) {
        newDebate = JSON.parse(
          JSON.stringify($scope.intermissions.intermission_a_moment_of_your_time),
        );
        delete $scope.intermission_a_moment_of_your_time;
        $scope.setCurrentDebate(newDebate);
        return;
      }
      if (
        $scope.metaStats.popularity > 100 &&
        $scope.intermissions.intermission_streamline_the_factories
      ) {
        newDebate = JSON.parse(
          JSON.stringify($scope.intermissions.intermission_streamline_the_factories),
        );
        delete $scope.intermissions.intermission_streamline_the_factories;
        $scope.setCurrentDebate(newDebate);
        return;
      }

      // Possibly trigger a crisis
      $scope.maybeTriggerCrisisEvent();

      if ($scope.debates.length > 0) {
        $scope.setCurrentDebate(
          $scope.debates[Math.floor(Math.random() * $scope.debates.length)],
        );
      }
    };

    $scope.setCurrentDebate(
      $scope.debates[Math.floor(Math.random() * $scope.debates.length)],
    );

    $scope.isStartingToDebate = function(){
      const lastWasIntermission = eventOrderHistory?.at(-1)?.includes("intermission"); 
      const currentIsDebate= !$scope.currentDebate?.idShort?.includes("intermisison");
      return lastWasIntermission && currentIsDebate;
    }

    $scope.isStartingIntermission = function(){
      const lastWasDebate = !eventOrderHistory?.at(-1)?.includes("intermission"); 
      const currentIsIntermission= $scope.currentDebate?.idShort?.includes("intermisison");
      return lastWasDebate && currentIsIntermission;
    }

    $scope.handleSpecial = function (params) {
      if (params.type === "crisis") {
        $scope.setCurrentCrisis(params.crisis);
      }

      if (params.type === "intermission") {
        $scope.setCurrentDebate(params.intermission);
        return;
      }

      if ($scope.debates.length > 0) {
        $scope.setCurrentDebate(
          $scope.debates[Math.floor(Math.random() * $scope.debates.length)],
        );
      }
    };
  },
);
