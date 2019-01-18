"use strict";
function restart() {
location.reload();
}

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
console.clear();

var TOKEN = '<section>C</section>';
var NUMBER_OF_COLUMNS = 7;
var NUMBER_OF_ROWS = 8;
var MAX_MOVES = 25;
var COMBO = document.getElementById("combo");
var MOVELABEL = document.getElementById("wrap");
var Token = function() {
    function Token(board, type, col, row) {
        _classCallCheck(this, Token);
        this.board = board;
        this.type = type;
        this.selected = false;
        this.node = document.createElement('div');
        this.node.innerHTML = TOKEN; // + `<span class="debug-data">${col}, ${row}</span>`;
        this.gfx = this.node.querySelector('section');
        this.node.classList.add('token');
        this.node.classList.add(type);

        // Bind instance methods
        this.handleClick = this.handleClick.bind(this);
        this.select = this.toggleSelected.bind(this, true);
        this.deselect = this.toggleSelected.bind(this, false);

        this.setPosition(col, row);
        this.setupEvents();
        this.setupStyles();
    }
    _createClass(Token, [{
        key: 'toString',
        value: function toString() {
            return this.type + '@(' + this.col + ', ' + this.row + ')';
        }
    }, {
        key: 'attach',
        value: function attach(parent_node) {
            parent_node.appendChild(this.node);
        }
    }, {
        key: 'detach',
        value: function detach() {
            this.node.remove();
        }
    }, {
        key: 'toggleSelected',
        value: function toggleSelected(toggle) {
            this.selected = toggle;
        }
    }, {
        key: 'isSelected',
        value: function isSelected() {
            return this.selected;
        }
        // Animate removal, then detach
    }, {
        key: 'remove',
        value: function remove(callback) {
            var _this = this;
            this.gfx.classList.add('hide');
            setTimeout(function() {
                _this.detach();
                callback && callback();
            }, 2000);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.makeMove();
        }
    }, {
        key: 'setupStyles',
        value: function setupStyles() {
            this.node.style.position = 'absolute';
            this.node.style.width = Token.width + 'vw';
            this.node.style.height = Token.height + 'vw';
            this.node.style.padding = Token.padding + 'vw';
            this.node.style.transition = 'transform 0.5s';
        }
    }, {
        key: 'setupEvents',
        value: function setupEvents() {
            this.node.addEventListener("click", this.handleClick);
        }
    }, {
        key: 'removeEvents',
        value: function removeEvents() {
            this.node.removeEventListener("click", this.handleClick);
        }
    }, {
        key: 'setPosition',
        value: function setPosition(

            x, y) {
                // Update internal properties
                this.col = x;
                this.row = y;
                // Update visual position
                var positionX = x * Token.width;
                var positionY = this.board.height - y * Token.height - Token.height;
                this.node.style.transform = 'translate3d(' + positionX + 'vw, ' + positionY + 'vw, 0px)';
            }
        }, {
            key: 'makeMove',
            value: function makeMove()


            {
                var _this2 = this;

                function reducer(matches, token) {
                    token.select();
                    var rangedTokens = token.inRange().filter(function(token) {
                        return !!token && !token.isSelected();
                    });
                    var matchedTokens = token.matches(rangedTokens);
                    matchedTokens.forEach(function(token) {
                        return token.select();
                    });

                    return matchedTokens.length ?
                    matches.concat(token, matchedTokens.reduce(reducer, [])) :
                    matches.concat(token);
                }

                var matches = [this].reduce(reducer, []);

                // Match self if neighbor matches are found
                if (matches.length > 1) {
                    if (this.board.moves < MAX_MOVES) {
                        var scoreModify = matches.length;
                        if (matches.length >= 5 && matches.length < 8) {
                            COMBO.classList.add("minor-combo");
                            scoreModify = matches.length * 5;
                            COMBO.innerHTML = "COMBO!";
                            setTimeout(function() {
                                COMBO.classList.remove("minor-combo");
                            }, 2000);
                        }
                        if (matches.length >= 8 && matches.length < 10) {
                            COMBO.classList.add("minor-combo");
                            MOVELABEL.classList.add("spark");
                            scoreModify = matches.length * 5;
                            COMBO.innerHTML = "NICE!";
                            this.board.moves = this.board.moves - 2;
                            setTimeout(function() {
                                COMBO.classList.remove("minor-combo");
                                MOVELABEL.classList.remove("spark");
                            }, 1000);
                        }
                        if (matches.length >= 10) {
                            COMBO.classList.add("mega-combo");
                            MOVELABEL.classList.add("spark");
                            scoreModify = matches.length * 10;
                            COMBO.innerHTML = "AWESOME!";
                            this.board.moves = this.board.moves - 3;
                            setTimeout(function() {
                                COMBO.classList.remove("mega-combo");
                                MOVELABEL.classList.remove("spark");
                            }, 1000);
                        }
                        var score = this.board.calculateScore(scoreModify);
                        // let content = this.node.innerHTML;
                        // this.node.innerHTML = content + '<span class="scored">+' + score + '</span>';
                        this.board.score = score + this.board.score;
                        this.board.moves++;
                        this.board.displayStats();

                        matches.forEach(function(token) {
                            return token.remove();
                        });
                        // THIS IS ACTUALLY THE WORST CODE
                        setTimeout(function() {
                            _this2.board.removeTokens(matches);
                            _this2.board.recalc();
                            _this2.board.fill();
                        }, 200);
                    } else {
                        this.board.showGameOver();
                    }
                } else {
                    this.deselect();
                }
            }
        }, {
            key: 'isInBounds',
            value: function isInBounds(_ref)

            {
                var x = _ref.x,
                y = _ref.y;
                return x >= 0 && y >= 0 && x < NUMBER_OF_COLUMNS && y < NUMBER_OF_ROWS;
            }
        }, {
            key: 'getNeighborCoords',
            value: function getNeighborCoords()

            {
                return [{
                    x: this.col,
                    y: this.row - 1
                }, {
                    x: this.col,
                    y: this.row + 1
                }, {
                    x: this.col - 1,
                    y: this.row
                }, {
                    x: this.col + 1,
                    y: this.row
                }];

            }

            /*
            *  Get tokens to the immediate top, bottom, left, and right
            */
        }, {
            key: 'inRange',
            value: function inRange() {
                return this.getNeighborCoords().
                filter(this.isInBounds).
                map(this.board.getToken);
            }
        }, {
            key: 'matches',
            value: function matches(tokens) {
                var _this3 = this;
                return tokens.filter(function(token) {
                    return token.type === _this3.type;
                });
            }
        }]);
        return Token;
    }();
    Token.width = 14;
    Token.height = 14;
    Token.padding = 1;
    var Board = function() {
        function Board(cols, rows) {
            _classCallCheck(this, Board);
            this.node = document.getElementById('board');
            this.scoreNode = document.getElementById('score');
            this.movesNode = document.getElementById('moves');
            this.cols = cols;
            this.rows = rows;
            this.width = Token.width * cols;
            this.height = Token.height * rows;
            this.score = 0;
            this.moves = 0;
            this.node.style.width = this.width + 'vw';
            this.node.style.height = this.height + 'vw';

            this.tokens = new Array(cols);
            // console.log(this.tokens);
            for (var i = 0; i < cols; i++) {
                this.tokens[i] = [];
            }
            // console.log(this.tokens);

            // Bind instance methods
            this.recalc = this.recalc.bind(this);
            this.getToken = this.getToken.bind(this);
            this.fill = this.fill.bind(this);
        }
        _createClass(Board, [{
            key: 'add',
            value: function add(token, col) {
                this.tokens[col].push(token);
            }
        }, {
            key: 'removeTokens',
            value: function removeTokens(tokens) {
                this.tokens.forEach(function(col) {
                    for (var i = col.length - 1; i >= 0; i--) {
                        var token = col[i];
                        if (tokens.includes(token)) {
                            col.splice(i, 1);
                        }
                    }
                });
            }
        }, {
            key: 'calculateScore',
            value: function calculateScore(numberOfTokens) {
                var multiplier = numberOfTokens > 5 ? Math.floor((numberOfTokens + 1) / 5) * 2 : 0;
                return numberOfTokens + multiplier;
            }
        }, {
            key: 'displayStats',
            value: function displayStats() {
                this.scoreNode.innerHTML = this.score + ' POINTS';
                this.movesNode.innerHTML = MAX_MOVES - this.moves;
            }
        }, {
            key: 'showGameOver',
            value: function showGameOver() {
                document.getElementById("modal").classList.add('show-modal');
            }
        }, {
            key: 'recalc',
            value: function recalc(){
                this.tokens.forEach(function(col, x) {
                    return col.forEach(function(token, y) {
                        token.setPosition(x, y);
                    });
                });
            }
        }, {
            key: 'fill',
            value: function fill()

            {
                var _this4 = this;
                this.tokens.forEach(function(col, x) {
                    var fillCount = _this4.rows - col.length;
                    for (var i = 0; i < fillCount; i++) {
                        var tokenType = rand(0, 3);
                        var newToken = new Token(_this4, 'token' + tokenType, x, _this4.rows + i);
                        _this4.add(newToken, x);
                        newToken.attach(_this4.node);
                    }
                });

                requestAnimationFrame(this.recalc);
            }
        }, {
            key: 'checkToken',
            value: function checkToken(col, row, token) {
                return token.col === col && token.row === row;
            }
        },
        {
            key: 'getToken',
            value: function getToken(_ref2){
                var x = _ref2.x,
                y = _ref2.y;
                return this.tokens[x][y];
            }
        }]);
        return Board;
    }();

    var addOne = function addOne(number) {
        return number + 1;
    };
    var subtractOne = function subtractOne(number) {
        return number - 1;
    };

    var rand = function rand(min, max) {
        return (
            Math.floor(Math.random() * (max - (min - 1)) + min));
        };

        function init() {
            var board = new Board(NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);
            board.node.innerHTML = '';
            board.fill();
        }

        init();
