import React from 'react';
import { Link } from 'react-router-dom';

import './album.component.styles.scss';

export const Album = props => (
  <div className='album-container'>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{`${props.title}`}</h1>
      <Link to={`/${props.title}`}>
        <p className='subtitle'>Playlist</p>
      </Link>
    </div>
  </div>
);
