const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return React.createElement(
      'form',
      { onClick: this.handleClick },
      React.createElement('input', { type: 'radio', name: 'src', value: 'fast' }), ' fast ',
      React.createElement('input', { type: 'radio', name: 'src', value: 'slow' }), ' slow ',
      React.createElement('input', { type: 'radio', name: 'src', value: 'cute' }), ' cute ',
      React.createElement('input', { type: 'radio', name: 'src', value: 'eek' }), ' eek '
    );
  }
}

class Video extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('video', {
        controls: true,
        autoPlay: true,
        muted: true,
        src: this.props.src
      })
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Video Player'),
      React.createElement(Menu, { chooseVideo: this.chooseVideo }),
      React.createElement(Video, { src: this.state.src })
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
