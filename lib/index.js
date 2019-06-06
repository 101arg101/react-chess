"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Game =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, props));
    _this.reference = React.createRef();
    _this.state = {
      board: [[new Rook({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new Knight({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new Bishop({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new Queen({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new King({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new Bishop({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new Knight({
        player: 'black',
        game: _assertThisInitialized(_this)
      }), new Rook({
        player: 'black',
        game: _assertThisInitialized(_this)
      })], new Array(8).fill(null).map(function () {
        return new Pawn({
          player: 'black',
          game: _assertThisInitialized(_this)
        });
      }), new Array(8).fill(null), new Array(8).fill(null), new Array(8).fill(null), new Array(8).fill(null), // TRY new Array(8).fill(new Pawn({player:'white', game: this})),
      new Array(8).fill(null).map(function () {
        return new Pawn({
          player: 'white',
          game: _assertThisInitialized(_this)
        });
      }), [new Rook({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new Knight({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new Bishop({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new Queen({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new King({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new Bishop({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new Knight({
        player: 'white',
        game: _assertThisInitialized(_this)
      }), new Rook({
        player: 'white',
        game: _assertThisInitialized(_this)
      })]],
      moving: false,
      possibleMoves: [],
      turn: 'white'
    };
    return _this;
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var rows = this.state.board.map(function (row, y) {
        return React.createElement("div", {
          className: "row",
          key: y
        }, React.createElement("div", {
          className: "col-2"
        }), row.map(function (piece, x) {
          var color = (y % 2 + x % 2) % 2 === 0 ? 'black' : 'white';

          if (_this2.state.moving) {
            // if the game is moving a piece
            var check = _this2.state.possibleMoves.map(function (coords) {
              // check if this cell is an acceptable target to move the piece
              if (coords.y === y && coords.x === x) {
                return true;
              }
            });

            if (check.indexOf(true) >= 0) {
              return React.createElement(Moveable, {
                game: _this2,
                piece: piece,
                moving: _this2.state.board[_this2.state.moving.y][_this2.state.moving.x],
                key: x,
                coords: {
                  y: y,
                  x: x
                }
              });
            } else {
              return React.createElement(Cell, {
                piece: piece,
                color: piece !== null && piece.state.moving ? 'green' : color,
                key: x
              });
            }
          } else {
            return React.createElement(Cell, {
              piece: piece,
              color: piece !== null && piece.state.moving ? 'green' : color,
              key: x
            });
          }
        }), React.createElement("div", {
          className: "col-2"
        }));
      });
      return React.createElement("div", {
        className: "container"
      }, rows);
    }
  }]);

  return Game;
}(React.Component);

var Piece =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Piece, _React$Component2);

  function Piece(props) {
    var _this3;

    _classCallCheck(this, Piece);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Piece).call(this, props));
    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Piece, [{
    key: "handleClick",
    value: function handleClick(event) {
      var _this4 = this;

      if (this.state.player === this.state.game.state.turn) {
        this.state.moving = !this.state.moving;
        var gameState = this.state.game.state;

        if (this.state.moving) {
          // if this piece is being moved, set game.state.moving to be coords of moving piece and set game.state.possibleMoves to be an array of coords
          gameState.board.map(function (row, y) {
            // get moving coords
            row.map(function (piece, x) {
              if (piece !== null && piece.state.moving) {
                if (piece === _this4) {
                  // gameState.board[gameState.moving.y][gameState.moving.x])
                  gameState.moving = {
                    y: y,
                    x: x
                  };
                  gameState.possibleMoves = _this4.calculateMoves(y, x);
                } else {
                  // this isn't the piece being moved, but was previously selected
                  piece.state.moving = false;
                }
              }
            });
          });
        } else {
          // if the piece isn't being moved
          gameState.moving = false; // tell the board it's not having a piece being moved

          gameState.possibleMoves = [];
        }

        this.state.game.setState(gameState);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("span", {
        className: 'player-' + this.state.player
      }, React.createElement("img", {
        className: 'push-15 img-fluid' + (this.state.player === this.state.game.state.turn ? ' clickable' : ''),
        src: '/img/icons8-' + this.state.type + (this.state.player === 'black' ? '-filled' : '') + '-100.png',
        onClick: this.handleClick
      }));
    }
  }]);

  return Piece;
}(React.Component);

var Pawn =
/*#__PURE__*/
function (_Piece) {
  _inherits(Pawn, _Piece);

  function Pawn(props) {
    var _this5;

    _classCallCheck(this, Pawn);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Pawn).call(this, props));
    _this5.state = {
      type: 'pawn',
      player: props.player,
      moving: false,
      game: props.game
    };
    return _this5;
  }

  _createClass(Pawn, [{
    key: "calculateMoves",
    value: function calculateMoves(y, x) {
      var notKing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var moves = [],
          board = this.state.game.state.board,
          d = this.state.player === 'white' ? -1 : 1;

      if (board[y + d] !== undefined && board[y + d][x - 1] !== undefined && board[y + d][x - 1] !== null && board[y + d][x - 1].state.player !== this.state.player || !notKing) {
        // attack left corner
        moves.push({
          y: y + d,
          x: x - 1
        });
      }

      if (board[y + d] !== undefined && board[y + d][x + 1] !== undefined && board[y + d][x + 1] !== null && board[y + d][x + 1].state.player !== this.state.player || !notKing) {
        // attack right corner
        moves.push({
          y: y + d,
          x: x + 1
        });
      }

      if (board[y + d] !== undefined && board[y + d][x] === null && notKing) {
        // move forward
        moves.push({
          y: y + d,
          x: x
        });
      }

      if (board[y + d + d] !== undefined && board[y + d + d][x] === null && (y - d) % (board.length - 1) === 0 && notKing) {
        // move forward 2 spaces if in "starting position" and 2 spaces away is empty
        moves.push({
          y: y + d + d,
          x: x
        });
      }

      return moves;
    }
  }]);

  return Pawn;
}(Piece);

var Rook =
/*#__PURE__*/
function (_Piece2) {
  _inherits(Rook, _Piece2);

  function Rook(props) {
    var _this6;

    _classCallCheck(this, Rook);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Rook).call(this, props));
    _this6.state = {
      type: 'rook',
      player: props.player,
      moving: false,
      game: props.game
    };
    return _this6;
  }

  _createClass(Rook, [{
    key: "calculateMoves",
    value: function calculateMoves(y, x) {
      var moves = [],
          board = this.state.game.state.board;
      return moves;
    }
  }]);

  return Rook;
}(Piece);

var Knight =
/*#__PURE__*/
function (_Piece3) {
  _inherits(Knight, _Piece3);

  function Knight(props) {
    var _this7;

    _classCallCheck(this, Knight);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Knight).call(this, props));
    _this7.state = {
      type: 'knight',
      player: props.player,
      moving: false,
      game: props.game
    };
    return _this7;
  }

  _createClass(Knight, [{
    key: "calculateMoves",
    value: function calculateMoves(y, x) {
      var moves = [],
          board = this.state.game.state.board;
      return moves;
    }
  }]);

  return Knight;
}(Piece);

var Bishop =
/*#__PURE__*/
function (_Piece4) {
  _inherits(Bishop, _Piece4);

  function Bishop(props) {
    var _this8;

    _classCallCheck(this, Bishop);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Bishop).call(this, props));
    _this8.state = {
      type: 'bishop',
      player: props.player,
      moving: false,
      game: props.game
    };
    return _this8;
  }

  _createClass(Bishop, [{
    key: "calculateMoves",
    value: function calculateMoves(y, x) {
      var moves = [],
          board = this.state.game.state.board;
      return moves;
    }
  }]);

  return Bishop;
}(Piece);

var Queen =
/*#__PURE__*/
function (_Piece5) {
  _inherits(Queen, _Piece5);

  function Queen(props) {
    var _this9;

    _classCallCheck(this, Queen);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Queen).call(this, props));
    _this9.state = {
      type: 'queen',
      player: props.player,
      moving: false,
      game: props.game
    };
    return _this9;
  }

  _createClass(Queen, [{
    key: "calculateMoves",
    value: function calculateMoves(y, x) {
      var moves = [],
          board = this.state.game.state.board;
      return moves;
    }
  }]);

  return Queen;
}(Piece);

var King =
/*#__PURE__*/
function (_Piece6) {
  _inherits(King, _Piece6);

  function King(props) {
    var _this10;

    _classCallCheck(this, King);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(King).call(this, props));
    _this10.state = {
      type: 'king',
      player: props.player,
      moving: false,
      game: props.game
    };
    return _this10;
  }

  _createClass(King, [{
    key: "calculateMoves",
    value: function calculateMoves(y, x) {
      var _this11 = this;

      var recurse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var moves = [],
          board = this.state.game.state.board,
          enemyMoves;
      moves.push({
        y: y - 1,
        x: x - 1
      });
      moves.push({
        y: y - 1,
        x: x
      });
      moves.push({
        y: y - 1,
        x: x + 1
      });
      moves.push({
        y: y,
        x: x - 1
      });
      moves.push({
        y: y,
        x: x + 1
      });
      moves.push({
        y: y + 1,
        x: x - 1
      });
      moves.push({
        y: y + 1,
        x: x
      });
      moves.push({
        y: y + 1,
        x: x + 1
      });
      moves = moves.filter(function (item) {
        if (item.y >= 0 && item.y < board.length && item.x >= 0 && item.x < board[item.y].length) {
          return item;
        }
      });
      board.map(function (row, yy) {
        row.map(function (piece, xx) {
          if (piece !== null && piece.state.player !== _this11.state.player && recurse) {
            enemyMoves = flattenMoves(piece.calculateMoves(yy, xx, false)); // notice that you can add arguments to functions without having them declared in the function

            moves = moves.filter(function (item) {
              return enemyMoves.indexOf((item.y << 3) + item.x) === -1;
            });
          }
        });
      });
      moves = moves.filter(function (item) {
        return !(board[item.y][item.x] !== null && board[item.y][item.x].state.player === _this11.state.player); // why do we have to inverse? try switching the order of the statements
      });
      return moves;
    }
  }]);

  return King;
}(Piece);

var Moveable =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Moveable, _React$Component3);

  function Moveable(props) {
    var _this12;

    _classCallCheck(this, Moveable);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Moveable).call(this, props));
    _this12.state = {
      game: props.game,
      piece: props.piece,
      moving: props.moving,
      coords: props.coords
    };
    _this12.handleClick = _this12.handleClick.bind(_assertThisInitialized(_this12));
    return _this12;
  }

  _createClass(Moveable, [{
    key: "handleClick",
    value: function handleClick(event) {
      var _this13 = this;

      var gameState = this.state.game.state;
      gameState.board = gameState.board.map(function (row, y) {
        return row.map(function (piece, x) {
          if (gameState.moving.x === x && gameState.moving.y === y) {
            // remove previous piece
            return null;
          } else if (_this13.state.coords.y === y && _this13.state.coords.x === x) {
            // place piece in new spot
            return _this13.state.moving;
          } else {
            // don't touch other pieces
            return piece;
          }
        });
      });
      gameState.turn = gameState.turn === 'white' ? 'black' : 'white';
      gameState.moving = false;
      this.state.moving.state.moving = false;
      this.state.game.setState(gameState);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Cell, {
        piece: this.state.piece,
        color: "green",
        key: this.state.coords.x,
        onClick: this.handleClick
      });
    }
  }]);

  return Moveable;
}(React.Component);

function Cell(props) {
  return React.createElement("div", {
    className: "col-1 " + props.color + (props.color === 'green' ? ' clickable' : ''),
    onClick: props.onClick
  }, props.piece !== null ? props.piece.render() : TransparentImg());
}

function TransparentImg(props) {
  return React.createElement("img", {
    className: "push-15 img-fluid",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAaElEQVR42u3PQREAAAwCoNm/9CL496ABuREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWkezG8AZQ6nfncAAAAASUVORK5CYII="
  });
}

function flattenMoves(moves) {
  return moves.map(function (item) {
    return (item.y << 3) + item.x; // this number 3 is dependent on the board size
  });
}

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));