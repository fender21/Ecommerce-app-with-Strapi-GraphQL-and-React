import Strapi from 'strapi-sdk-javascript/build/main';
import Router from 'next/router'

import Layout from '../components/Layout';

const strapi = new Strapi('http://localhost:1337');

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }


  async handleSubmit() {
    try {
      const me = await strapi.login(this.state.username, this.state.password);
      console.log(me.user.role.type)
    //  Router.push('/')
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Layout title="Login">
        <div className="col-md-4 col-md-offset-4">
          <header>
            <h3>User Login</h3>
          </header>
            <div className="form-group">
              <label>
                Username:
                <input type="text" value={this.state.username} onChange={this.handleUsername} className="form-control"/>
              </label>
            </div>

            <div className="form-group">
              <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handlePassword} className="form-control" />
              </label>
            </div>
            <div className="form-group">
              <input type="button" value="Submit" className="btn btn-primary" onClick={this.handleSubmit}/>
            </div>
      </div>
    </Layout>
    );
  }
}

export default Login;
