class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [100, 150, 200]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.applyColor();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      this.applyColor();
    }
  }
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) > 127 * 3;
  }
  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.backgroundColor = color;
  }
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }
  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }
  render() {
    return React.createElement('div', null, React.createElement('h1', {
      className: this.isLight() ? 'black' : 'white'
    }, 'Your color is ' + this.formatColor(this.state.color)), React.createElement(window.Button, {
      light: !this.isLight(),
      onClick: this.handleClick
    }));
  }
}
window.Random = Random;
ReactDOM.render(React.createElement(window.Random), document.getElementById('app'));