import React from 'react';
import {
  useParams
} from "react-router-dom";
import albuns from '../data'

import './playlist-page.styles.scss';

export const PlaylistPage = () => {
  const { album } = useParams();
  console.log(album)
  const currAlbum = albuns.find((curralbum)=>curralbum.title===album)
  console.log(currAlbum)
  return(
  <div className='playlist'>HERE SHOULD GO THE PLAYLIST</div>
  )
};
