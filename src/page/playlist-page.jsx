import React from 'react';
import { useParams } from 'react-router-dom';
import albuns from '../data';

import './playlist-page.styles.scss';

const AllSongs = () => {
  const { album } = useParams();
  console.log(album);
  const currAlbum = albuns.find(curralbum => curralbum.title === album);
  console.log(currAlbum);

  return (
    <p>
      {currAlbum.songs.map(el => (
        <ol className='song'>
          {el.id}. {el.name}
        </ol>
      ))}
    </p>
  );
};

export const PlaylistPage = () => {
  const { album } = useParams();
  console.log(album);
  const currAlbum = albuns.find(curralbum => curralbum.title === album);
  console.log(currAlbum);

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <div className='playlist'>
      Playlist of
      <h1>{currAlbum.title}</h1>
      <button className='btn' onClick={onClick}>
        SEE ALL SONGS
      </button>
      {showResults && <AllSongs />}
    </div>
  );
};
