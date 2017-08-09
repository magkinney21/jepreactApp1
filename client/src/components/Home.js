import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      redirect: false,
      games: []
    }
  }

  componentWillMount(){
    axios.get('localhost:3001/api/games').then(res => {
      console.log(res.data);
      this.setState({games: res.data})
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>What is your username?</h1>
          <input type="text" name="user" />
          <button>New Game</button>
        </div>
        {this.state.games.map((game, i) => (
          <div key={i}>
            <Link to={`/games/${game._id}`}>
              {game.user}'s Game
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
