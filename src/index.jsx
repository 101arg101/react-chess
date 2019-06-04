class Game extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      board: [
        [
          {type: 'rook', player: 'black'},
          {type: 'knight', player: 'black'},
          {type: 'bishop', player: 'black'},
          {type: 'queen', player: 'black'},
          {type: 'king', player: 'black'},
          {type: 'bishop', player: 'black'},
          {type: 'knight', player: 'black'},
          {type: 'rook', player: 'black'}
        ],
        new Array(8).fill({type: 'pawn', player: 'black'}, 0, 8),
        new Array(8).fill(null, 0, 8),
        new Array(8).fill(null, 0, 8),
        new Array(8).fill(null, 0, 8),
        new Array(8).fill(null, 0, 8),
        new Array(8).fill({type: 'pawn', player: 'white'}, 0, 8),
        [
          {type: 'rook', player: 'white'},
          {type: 'knight', player: 'white'},
          {type: 'bishop', player: 'white'},
          {type: 'queen', player: 'white'},
          {type: 'king', player: 'white'},
          {type: 'bishop', player: 'white'},
          {type: 'knight', player: 'white'},
          {type: 'rook', player: 'white'}
        ]
      ]
    }
  }
  
  render() {
    let rows = this.state.board.map((row, y) => {
      return (
        <div className="row" key={y}>
          <div className="col-2"></div>
            {row.map((cell, x) => {
              return <Cell piece={cell} color={(y%2 + x%2)%2 === 0 ? 'black' : 'white'} key={x} />
            })}
          <div className="col-2"></div>
        </div>
      )
    })
    
    return (
      <div className="container">
        <>
        {rows}
        </>
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
    return (
      <span className={'player-' + this.state.player}>
        <img className="push-15 img-fluid" src={'/img/icons8-' + this.state.type + (this.state.player === 'black' ? '-filled' : '') + '-100.png'} />
      </span>
    )
  }
}

function Cell(props) {
  if (props.piece !== null) {
    return (
      <div className={"col-1 " + props.color}>
        <Piece type={props.piece.type} player={props.piece.player} />
      </div>
    )
  } else {
    return (
      <div className={"col-1 " + props.color}>
        <TransparentImg />
      </div>
    )
  }
}

function TransparentImg() {
  return (
    <img className="push-15 img-fluid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAaElEQVR42u3PQREAAAwCoNm/9CL496ABuREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWkezG8AZQ6nfncAAAAASUVORK5CYII=" />
  )
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);