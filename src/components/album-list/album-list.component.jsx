import React from 'react';

import { Album } from '../album/album.component';

import './album-list.component.styles.scss';

import albuns from '../../data';

export const AlbumList = props => {
  return (
    <div className='app'>
      <h1>Evanescence Discography</h1>
      <div className='directory-menu'>
        {albuns.map(({ id, ...otherSectionProps }) => (
          <Album key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  );
};
