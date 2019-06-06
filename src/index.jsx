class Game extends React.Component {
  constructor(props) {
    super(props)
    
    this.reference = React.createRef();
    
    this.state = {
      board: [
        [
          new Rook({player:'black', game: this}),
          new Knight({player:'black', game: this}),
          new Bishop({player:'black', game: this}),
          new Queen({player:'black', game: this}),
          new King({player:'black', game: this}),
          new Bishop({player:'black', game: this}),
          new Knight({player:'black', game: this}),
          new Rook({player:'black', game: this})
        ],
        new Array(8).fill(null).map(() => {
          return new Pawn({player:'black', game: this})
        }),
        new Array(8).fill(null),
        new Array(8).fill(null),
        new Array(8).fill(null),
        new Array(8).fill(null),
        // TRY new Array(8).fill(new Pawn({player:'white', game: this})),
        new Array(8).fill(null).map(() => {
          return new Pawn({player:'white', game: this})
        }),
        [
          new Rook({player:'white', game: this}),
          new Knight({player:'white', game: this}),
          new Bishop({player:'white', game: this}),
          new Queen({player:'white', game: this}),
          new King({player:'white', game: this}),
          new Bishop({player:'white', game: this}),
          new Knight({player:'white', game: this}),
          new Rook({player:'white', game: this})
        ]
      ],
      moving: false,
      possibleMoves: [],
      turn: 'white'
    }
  }
  
  render() {
    let rows = this.state.board.map((row, y) => {
      return (
        <div className="row" key={y}>
          <div className="col-2"></div>
            {row.map((piece, x) => {
              let color = (y%2 + x%2)%2 === 0 ? 'black' : 'white'
              if (this.state.moving) { // if the game is moving a piece
                let check = this.state.possibleMoves.map((coords) => { // check if this cell is an acceptable target to move the piece
                  if (coords.y === y && coords.x === x) {
                    return true
                  }
                })
                
                if (check.indexOf(true) >= 0) {
                  return (
                    <Moveable game={this} piece={piece} moving={this.state.board[this.state.moving.y][this.state.moving.x]} key={x} coords={{y:y, x:x}} />
                  )
                } else {
                  return (
                    <Cell piece={piece} color={(piece !== null && piece.state.moving) ? 'green' : color} key={x} />
                  )
                }
              } else {
                return (
                  <Cell piece={piece} color={(piece !== null && piece.state.moving) ? 'green' : color} key={x} />
                )
              }
            })}
          <div className="col-2"></div>
        </div>
      )
    })
    
    return (
      <div className="container">
        {rows}
      </div>
    )
  }
}

class Piece extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(event) {
    if (this.state.player === this.state.game.state.turn) {
      this.state.moving = !this.state.moving
      let gameState = this.state.game.state
      
      if (this.state.moving) { // if this piece is being moved, set game.state.moving to be coords of moving piece and set game.state.possibleMoves to be an array of coords
        gameState.board.map((row, y) => { // get moving coords
          row.map((piece, x) => {
            if (piece !== null && piece.state.moving) {
              if (piece === this) { // gameState.board[gameState.moving.y][gameState.moving.x])
                gameState.moving = {y:y, x:x}
                gameState.possibleMoves = this.calculateMoves(y, x)
              } else { // this isn't the piece being moved, but was previously selected
                piece.state.moving = false
              }
            }
          })
        })
      } else { // if the piece isn't being moved
        gameState.moving = false // tell the board it's not having a piece being moved
        gameState.possibleMoves = []
      }
      this.state.game.setState(gameState)
    }
  }
  
  render() {
    return (
      <span className={'player-' + this.state.player}>
        <img className={'push-15 img-fluid' + (this.state.player === this.state.game.state.turn ? ' clickable' : '')} src={'/img/icons8-' + this.state.type + (this.state.player === 'black' ? '-filled' : '') + '-100.png'} onClick={this.handleClick} />
      </span>
    )
  }
}

class Pawn extends Piece {
  constructor(props) {
    super(props)
    
    this.state = {
      type: 'pawn',
      player: props.player,
      moving: false,
      game: props.game
    }
  }
  
  calculateMoves(y, x, notKing = true) {
    let moves = [],
        board = this.state.game.state.board,
        d = this.state.player === 'white' ? -1 : 1
    
    if (board[y+d] !== undefined &&
        board[y+d][x-1] !== undefined &&
        (board[y+d][x-1] !== null &&
        board[y+d][x-1].state.player !== this.state.player) ||
        !notKing) {
      // attack left corner
      moves.push({y:y+d, x:x-1})
    }
    if (board[y+d] !== undefined &&
        board[y+d][x+1] !== undefined &&
        (board[y+d][x+1] !== null &&
        board[y+d][x+1].state.player !== this.state.player) ||
        !notKing) {
      // attack right corner
      moves.push({y:y+d, x:x+1})
    }
    if (board[y+d] !== undefined &&
        board[y+d][x] === null &&
        notKing) {
      // move forward
      moves.push({y:y+d, x:x})
    }
    if (board[y+d+d] !== undefined &&
        board[y+d+d][x] === null &&
        (y-d)%(board.length - 1) === 0 &&
        notKing) {
      // move forward 2 spaces if in "starting position" and 2 spaces away is empty
      moves.push({y:y+d+d, x:x})
    }
  
    return moves
  }
}

class Rook extends Piece {
  constructor(props) {
    super(props)
    
    this.state = {
      type: 'rook',
      player: props.player,
      moving: false,
      game: props.game
    }
  }
  
  calculateMoves(y, x) {
    let moves = [],
        board = this.state.game.state.board
    
    return moves
  }
}

class Knight extends Piece {
  constructor(props) {
    super(props)
    
    this.state = {
      type: 'knight',
      player: props.player,
      moving: false,
      game: props.game
    }
  }
  
  calculateMoves(y, x) {
    let moves = [],
        board = this.state.game.state.board
    
    return moves
  }
}

class Bishop extends Piece {
  constructor(props) {
    super(props)
    
    this.state = {
      type: 'bishop',
      player: props.player,
      moving: false,
      game: props.game
    }
  }
  
  calculateMoves(y, x) {
    let moves = [],
        board = this.state.game.state.board
    
    return moves
  }
}

class Queen extends Piece {
  constructor(props) {
    super(props)
    
    this.state = {
      type: 'queen',
      player: props.player,
      moving: false,
      game: props.game
    }
  }
  
  calculateMoves(y, x) {
    let moves = [],
        board = this.state.game.state.board
    
    return moves
  }
}

class King extends Piece {
  constructor(props) {
    super(props)
    
    this.state = {
      type: 'king',
      player: props.player,
      moving: false,
      game: props.game
    }
  }
  
  calculateMoves(y, x, recurse = true) {
    let moves = [],
        board = this.state.game.state.board,
        enemyMoves
    
    moves.push({y:y-1, x:x-1})
    moves.push({y:y-1, x:x})
    moves.push({y:y-1, x:x+1})
    moves.push({y:y, x:x-1})
    moves.push({y:y, x:x+1})
    moves.push({y:y+1, x:x-1})
    moves.push({y:y+1, x:x})
    moves.push({y:y+1, x:x+1})
    
    moves = moves.filter((item) => {
      if (item.y >= 0 &&
          item.y < board.length &&
          item.x >= 0 &&
          item.x < board[item.y].length) {
        return item
      }
    })
    
    board.map((row, yy) => {
      row.map((piece, xx) => {
        if (piece !== null && piece.state.player !== this.state.player && recurse) {
          enemyMoves = flattenMoves(piece.calculateMoves(yy, xx, false)) // notice that you can add arguments to functions without having them declared in the function
          moves = moves.filter((item) => {
            return enemyMoves.indexOf((item.y<<3) + item.x) === -1
          })
        }
      })
    })
    
    moves = moves.filter((item) => {
      return !(board[item.y][item.x] !== null && board[item.y][item.x].state.player === this.state.player) // why do we have to inverse? try switching the order of the statements
    })
    
    return moves
  }
}

class Moveable extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      game: props.game,
      piece: props.piece,
      moving: props.moving,
      coords: props.coords
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(event) {
    let gameState = this.state.game.state
    
    gameState.board = gameState.board.map((row, y) => {
      return row.map((piece, x) => {
        if (gameState.moving.x === x && gameState.moving.y === y) {
          // remove previous piece
          return null
        } else if (this.state.coords.y === y && this.state.coords.x === x) {
          // place piece in new spot
          return this.state.moving
        } else {
          // don't touch other pieces
          return piece
        }
      })
    })
    gameState.turn = gameState.turn === 'white' ? 'black' : 'white'
    gameState.moving = false
    this.state.moving.state.moving = false
    this.state.game.setState(gameState)
  }
  
  render() {
    return (
      <Cell piece={this.state.piece} color="green" key={this.state.coords.x} onClick={this.handleClick} />
    )
  }
}

function Cell(props) {
  return (
    <div className={"col-1 " + props.color + (props.color === 'green' ? ' clickable': '')} onClick={props.onClick}>
      {props.piece !== null ? props.piece.render() : TransparentImg()}
    </div>
  )
}

function TransparentImg(props) {
  return (
    <img className={"push-15 img-fluid"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAaElEQVR42u3PQREAAAwCoNm/9CL496ABuREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWkezG8AZQ6nfncAAAAASUVORK5CYII=" />
  )
}

function flattenMoves(moves) {
  return moves.map((item) => {
    return (item.y<<3) + item.x // this number 3 is dependent on the board size
  })
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);