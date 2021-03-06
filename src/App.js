import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      loadingMessage: false,
      userData: false,
      error: null,
      user: []
    }
  }

  async fetchUsers() {
    const res = await axios.get("https://api.github.com/users")
    this.setState({
      users: res.data,
      userData: false,
    })
    console.log(res.data);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  functionBlur = (event) => {
    event.preventDefault();
    this.setState({ loadingMessage: true });
    this.state.userData = true;
    const result = this.state.users.filter(user => user.login === event.target.value);
    this.setState({ user: result });
    event.target.value = "";
    this.setState({ loadingMessage: false });
  }

  render() {
    // const user = this.state.user;
    console.log("user", this.state.user);
    const { userData, user, loadingMessage } = this.state;
    return (
      <>
     

        <section>
          <div className="container">

            <div className="row">

              <h1 className="text-center"> <span>  PROFILE HUB </span>  </h1>

              <div className="col-md-4">
                <input type="text" className="form-control"
                  onBlur={this.functionBlur} placeholder=" Type Username + Enter" />

                <div className="card profile-card-1">

                  <img src={user.length > 0 ? user[0].avatar_url : "data:image/jpeg;base64,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"}
                    alt="profile-image" className="profile" />

                  <div className="card-content">

                    <h2> {userData ? user.length > 0 ? user[0].login : "sorry, user not found!" : ""}</h2>

                    <h3>{loadingMessage && "Getting results for you…please wait."}</h3>


                    <div className="footer">
                      <div className="row">
                        <div className="col-md-4"> Type : {user.length > 0 && user[0].type} </div>
                        <div className="col-md-4">Id : {user.length > 0 && user[0].id} </div>
                        <div className="col-md-4">EventsUrl : {user.length > 0 && user[0].events_url}</div>
                      </div>
                    </div>

                  </div>

                </div>


              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

}


export default App;
