class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false,
      error: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    const isAuthorized = enteredPassword === this.state.password;
    
    this.setState({
      authorized: isAuthorized,
      error: !isAuthorized
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
        {this.state.error && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            Incorrect password, please try again.
          </p>
        )}
      </form>
    );

    const contactInfo = (
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById("app"));
