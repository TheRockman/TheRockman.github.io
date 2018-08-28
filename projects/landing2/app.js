var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  
  $scope.language = "EN";
  
  $scope.theme = "light";
  
  $scope.setTheme = function (theme) {
    document.documentElement.setAttribute('data-theme', theme)
  }
  
$scope.tiers = [
  {
    name: '',
    logo: '',
    desc:''
  }
]
  
$scope.questions = [
  {
    question: "Who are people you see everyday, but you don’t know?",
    answer: "Strangers"
  },
  {
    question: "What has one foot and no legs but carries its house?",
    answer: "A snail"
  },
  {
    question: "Can you write “cow” using thirteen letters?",
    answer: "See o double you."
  },
  {
    question: "What is green and smells like blue paint?",
    answer: "Green paint"
  },
  {
    question: "What kind of storm is always in a rush?",
    answer: "Hurricane"
  },
  {
    question: "What is a duck’s favorite snack?",
    answer: "Quackers"
  },
  {
    question: "What moves without seeing and cries without eyes?",
    answer: "A cloud"
  },
  {
    question: "If I stand on top of a hill and ring a loud bell between two houses. Which house will hear the bell first?",
    answer: "Neither, houses don’t have ears can’t hear."
  },
  {
    question: "What is the tree that we all carry in our hand?",
    answer: "Palm"
  },
  {
    question: "What is the building that you leave without ever having entered.",
    answer: "The hospital that you were born in."
  }
]
  
$scope.langResource = {
  EN: {
    headerText: "Capitalize on low hanging fruit!",
    headerBlurb: "identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. ",
    howItWorks: "Win-win survival strategies",
    oneLabel: "User generated content",
    oneBody: "A new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution",
    twoLabel: "Podcasting",
    twoBody: "Operational change management inside of workflows to establish a framework.",
    threeLabel: "Seamless performance",
    threeBody: "Keeping your eye on the ball while performing a deep dive on the start-up mentality",
    fourLabel:"Plug-and-play networks",
    fourBody: "Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    encourageLabel: "Efficiently unleash cross-media information",
    encourageBody: "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ",
    learnMore: "Unleash now",
    questionLabel: "Start typing your question"
  },
  SE: {
    headerText: "Kapitalisera på låghängande frukt!",
    headerBlurb: "identifiera en aktivitetsvärde för bibladsverksamhet till beta-test. Överstyr den digitala klyftan med ytterligare klick från DevOps.",
    howItWorks: "Win-win överlevnadsstrategier",
    oneLabel: "Användargenererat innehåll",
    oneBody: "En ny normal som har utvecklats från generation X är på banans väg mot en strömlinjeformad molnlösning",
    twoLabel: "Podcasting",
    twoBody: "Operational change management inuti arbetsflöden för att skapa en ram.",
    threeLabel: "Sömlös prestanda",
    threeBody: "Håll ögonen på bollen medan du utför ett djupt dykk på startmiljön",
    fourLabel: "Plug and play-nätverk",
    fourBody: "Dynamiskt förhöja B2C-användare efter installerade basfördelar. Dramatiskt visualisera kundorienterad konvergens utan revolutionerande avkastning.",
    encourageLabel: "Lös effektivt information om korsmedia",
    encourageBody: "Snabbt maximera aktuella leveranser för realtidsscheman. Dramatiskt upprätthålla klick-och-murbrukslösningar utan funktionella lösningar. Helt synergiera resursskatteförbindelser via premier nischmarknader. Professionellt odla en-till-en kundservice med robusta idéer.",
    learnMore: "Lös direkt",
    questionLabel: "Börja skriva din fråga"
  }
}

$scope.setLang = function (lang) {
  $scope.translate = $scope.langResource[lang];
}
//default
$scope.setLang($scope.language);

});
