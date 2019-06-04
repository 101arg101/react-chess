class Game extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      board: [
        [
          {type: 'rook', player: 'black'},
          {type: 'knight', player: 'black'}
          {type: 'bishop', player: 'black'}
          {type: 'queen', player: 'black'}
          {type: 'king', player: 'black'}
          {type: 'bishop', player: 'black'}
          {type: 'knight', player: 'black'}
          {type: 'rook', player: 'black'}
        ],
        [].fill({type: 'pawn', player: 'black'}, 0, 7),
        [].fill(null, 0, 7),
        [].fill(null, 0, 7),
        [].fill(null, 0, 7),
        [].fill(null, 0, 7),
        [].fill(null, 0, 7),
        [].fill(null, 0, 7),
        [].fill({type: 'pawn', player: 'white'}, 0, 7),
        [
          {type: 'rook', player: 'white'},
          {type: 'knight', player: 'white'}
          {type: 'bishop', player: 'white'}
          {type: 'queen', player: 'white'}
          {type: 'king', player: 'white'}
          {type: 'bishop', player: 'white'}
          {type: 'knight', player: 'white'}
          {type: 'rook', player: 'white'}
        ]
      ]
    }
  }
  
  render() {
    let rows = this.state.board.map((row, y) => { // for each row 
      <div className="row">
        <div className="col-2"></div>
          {row.map(cell, x) => {
            <Cell piece={cell} color={(y%2 + x%2)%2 === 0 ? 'black' : 'white'} />
          }}
        <div className="col-2"></div>
      </div>
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
    
    this.state = {
      type: props.type,
      player: props.player
    }
  }
  
  render() {
    <span className={'player-' + this.state.player}>
      <img className="responsive-img" src={'/img/icons8-' + this.state.type + '-' + (this.state.player === 'black' ? 'filled' : '') + '-100.png'} />
    </span>
  }
}

function Cell(props) {
  if (props.piece !== null) {
    return <div className={"col-1 " + props.color}>
      <Piece type={props.piece.type} player={props.piece.player} />
    </div>
  } else {
    return <div className={"col-1 " + props.color}></div>
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);