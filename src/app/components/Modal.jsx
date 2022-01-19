import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import Card from '../components/Card'
import {getSpotifySongs} from '../spotifyEndpoints/getSongs'
import { Code } from 'react-content-loader';
import {ModalComp} from '../styles/Modal'

const Modal = () => {

  const [token, setToken] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  //console.log(token)
  //console.log(data.tracks);
  useEffect(( ) => {
    getSpotifySongs(setToken, setData, setLoading);
    setInterval(getSpotifySongs(setToken, setData, setLoading), 60000 * 50);
    
   // gets new token every 50 minutes
  },[])
  
  return (
    <ModalComp>
{
(loading) 
        ? 
        (<Code
          height={540}
          width={700}
          />) 
        : (
          data.tracks.map((track, i) => (
            <Card key={track.id} name={track.name} id={track.id} num={i}
            artists={track.artists} img={track.album.images[0].url}
            audio={track.preview_url}
            />
        )))

        }
   </ModalComp>
  );
}
export default Modal;
// artists={track.album.artists} img={track.album.images[0].url}