import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Album } from './components/album/album.component';
import {PlaylistPage} from './page/playlist-page'
import './App.css';

import albuns from './data'

class App extends Component {

  render() {
    return (
      <Switch>
      <Route path="/" exact>
        <div className='App'>
            <h1>Evanescence Discography</h1>
            <div className='directory-menu'>
              {albuns.map(({ id, ...otherSectionProps }) => (
                <Album key={id} {...otherSectionProps} />
              ))}
            </div>
        </div>
      </Route>
      <Route path="/:album" >
        <PlaylistPage/>
      </Route>
      </Switch>
    );
  }
}

export default App;
