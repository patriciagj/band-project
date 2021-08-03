import React from 'react';

import { Album } from '../album/album.component';

import './album-list.component.styles.scss';

export const AlbumList = props => {
  return (
    <div className='album-list'>
      {props.songs.map(song => (
        <Album key={song.id} name={song.name} />
      ))}
    </div>
  );
};
