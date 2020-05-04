import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Addpost from './Addpost';
import Updatepost from './Updatepost';
import Deletepost from './Deletepost';

class Myapi extends Component {
  constructor(props) {
    super(props);
    this.callApi();
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  callApi = () => {
    fetch("http://localhost:3004/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {
      return (<div className="container">
        <Link to="/" > Home </Link>
        <Link to="/add" > Addpost </Link>

        <Route path="/add" component={Addpost} exact />
        <Route path="/Updatepost/:id/:title/:author" component={Updatepost} exact />
        <Route path="/Deletepost/:id/:title/:author" component={Deletepost} exact />
        <hr />

        <ul>
          {users.map(user => {
            var user1 = `/updatepost/${user.id}/${user.title}/${user.author}`
            var user2 = `/deletepost/${user.id}/${user.title}/${user.author}`
            return <li key={user.id}>
              {user.id} {user.title} {user.author}

              <Link to={user1} > Updatepost </Link>
              <Link to={user2} > Deletepost </Link>
            </li>
          })}
        </ul>
      </div>
      );
    }
  }
}

export default Myapi;