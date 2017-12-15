import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import EventsManager from "./EventsManager";

class App extends Component {
  state={
    searchPhrase: ''
  }
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Button basic color='blue'>Add Event</Button>
          <EventsManager searchPhrase={this.searchPhrase}/>
      </div>
    );
  }
}

export default App;
