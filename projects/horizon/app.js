var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.users = [
    {
      Name: 'John doe',
      Followers: 300,
      Following: 20,
      Url: 'https://picsum.photos/420/420.004/?random',
      Posts: [
        {
          Url: 'https://picsum.photos/420/420.003/?random',
          OpComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          Likes: 10,
          Comments: [
            {
              PosterName: 'Steve',
              Comment: 'Cool',
              Likes: 1 
            },
            {
              PosterName: 'Eric',
              Comment: 'I agree',
              Likes: 1
            },
            {
              PosterName: 'Steve',
              Comment: 'Can i like that you agree? ;)',
              Likes: 1
            },
            {
              PosterName: 'Eric',
              Comment: 'go ahead',
              Likes: 1
            },
            {
              PosterName: 'Steve',
              Comment: 'Cool dude 😎',
              Likes: 1
            },
            {
              PosterName: 'Eric',
              Comment: 'we are all cool here',
              Likes: 2 
            },
            {
              PosterName: 'Steve',
              Comment: 'You said it bro',
              Likes: 1 
            },
            {
              PosterName: 'Eric',
              Comment: 'high fives all around, good show',
              Likes: 2 
            }
          ]
        },
        {
          Url: 'https://picsum.photos/420/420.002/?random',
          OpComment: "lakshdl kashaslk jhaslkjdh alskjdh aslkjd has",
          Likes: 4,
          Comments: [
            {
              PosterName: 'Dave',
              Comment: 'Aalksd öalskd jaösldk ',
              Likes: 0 
            }
          ]
        },
        {
          Url: 'https://picsum.photos/420/420.001/?random',
          OpComment: "lakshdl kashaslk jhaslkjdh alskjdh aslkjd has",
          Likes: 4,
          Comments: [
            {
              PosterName: 'Dave',
              Comment: 'Aalksd öalskd jaösldk ',
              Likes: 0 
            }
          ]
        }
      ]
    },
    {
      Name: 'Jane doe',
      Followers: 1200,
      Following: 1,
      Url: 'https://picsum.photos/420/420.005/?random',
      Posts: [
        {
          Url: 'https://picsum.photos/420/420.006/?random',
          OpComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          Likes: 10,
          Comments: [
            {
              PosterName: 'Jenny',
              Comment: 'Lorem ipsum dolor 😎',
              Likes: 0 
            },
            {
              PosterName: 'Erica',
              Comment: 'alkjhd lahd aslkjdh!',
              Likes: 1 
            }
          ]
        },
        {
          Url: 'https://picsum.photos/420/420.007/?random',
          OpComment: "lakshdl kashaslk jhaslkjdh alskjdh aslkjd has",
          Likes: 4,
          Comments: [
            {
              PosterName: 'Linda',
              Comment: 'Aalksd öalskd jaösldk ',
              Likes: 0 
            }
          ]
        },
        {
          Url: 'https://picsum.photos/420/420.008/?random',
          OpComment: "lakshdl kashaslk jhaslkjdh alskjdh aslkjd has",
          Likes: 4,
          Comments: [
            {
              PosterName: 'Ana',
              Comment: 'Aalksd öalskd jaösldk ',
              Likes: 450 
            }
          ]
        }
      ]
    }
  ];
  
  $scope.like = function (comment) {
    if (!comment.Liked) {
      comment.Likes === comment.Likes + 1;
      comment.Liked = true;
    } else {
      comment.Likes === comment.Likes - 1;
      comment.Liked = false; 
    }
  }
});
