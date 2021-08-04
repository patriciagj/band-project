import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AlbumList } from './components/album-list/album-list.component';
import { PlaylistPage } from './page/playlist-page';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact>
          <AlbumList />
        </Route>
        <Route path='/:album'>
          <PlaylistPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
