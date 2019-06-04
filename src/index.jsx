class Game extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      board: [].fill([].fill(null, 0, 7), 0, 7)
    }
  }
  
  render() {
    return ()
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);