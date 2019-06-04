"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    _this.state = {
      board: [[{
        type: 'rook',
        player: 'black'
      }, {
        type: 'knight',
        player: 'black'
      }, {
        type: 'bishop',
        player: 'black'
      }, {
        type: 'queen',
        player: 'black'
      }, {
        type: 'king',
        player: 'black'
      }, {
        type: 'bishop',
        player: 'black'
      }, {
        type: 'knight',
        player: 'black'
      }, {
        type: 'rook',
        player: 'black'
      }], new Array(8).fill({
        type: 'pawn',
        player: 'black'
      }, 0, 8), new Array(8).fill(null, 0, 8), new Array(8).fill(null, 0, 8), new Array(8).fill(null, 0, 8), new Array(8).fill(null, 0, 8), new Array(8).fill({
        type: 'pawn',
        player: 'white'
      }, 0, 8), [{
        type: 'rook',
        player: 'white'
      }, {
        type: 'knight',
        player: 'white'
      }, {
        type: 'bishop',
        player: 'white'
      }, {
        type: 'queen',
        player: 'white'
      }, {
        type: 'king',
        player: 'white'
      }, {
        type: 'bishop',
        player: 'white'
      }, {
        type: 'knight',
        player: 'white'
      }, {
        type: 'rook',
        player: 'white'
      }]]
    };
    return _this;
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      var rows = this.state.board.map(function (row, y) {
        return React.createElement("div", {
          className: "row",
          key: y
        }, React.createElement("div", {
          className: "col-2"
        }), row.map(function (cell, x) {
          return React.createElement(Cell, {
            piece: cell,
            color: (y % 2 + x % 2) % 2 === 0 ? 'black' : 'white',
            key: x
          });
        }), React.createElement("div", {
          className: "col-2"
        }));
      });
      return React.createElement("div", {
        className: "container"
      }, React.createElement(React.Fragment, null, rows));
    }
  }]);

  return Game;
}(React.Component);

var Piece =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Piece, _React$Component2);

  function Piece(props) {
    var _this2;

    _classCallCheck(this, Piece);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Piece).call(this, props));
    _this2.state = {
      type: props.type,
      player: props.player
    };
    return _this2;
  }

  _createClass(Piece, [{
    key: "render",
    value: function render() {
      return React.createElement("span", {
        className: 'player-' + this.state.player
      }, React.createElement("img", {
        className: "push-15 img-fluid",
        src: '/img/icons8-' + this.state.type + (this.state.player === 'black' ? '-filled' : '') + '-100.png'
      }));
    }
  }]);

  return Piece;
}(React.Component);

function Cell(props) {
  if (props.piece !== null) {
    return React.createElement("div", {
      className: "col-1 " + props.color
    }, React.createElement(Piece, {
      type: props.piece.type,
      player: props.piece.player
    }));
  } else {
    return React.createElement("div", {
      className: "col-1 " + props.color
    }, React.createElement(TransparentImg, null));
  }
}

function TransparentImg() {
  return React.createElement("img", {
    className: "push-15 img-fluid",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAaElEQVR42u3PQREAAAwCoNm/9CL496ABuREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWkezG8AZQ6nfncAAAAASUVORK5CYII="
  });
}

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));