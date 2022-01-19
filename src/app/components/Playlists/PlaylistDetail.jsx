import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Track from "../Track";
import { Code } from "react-content-loader";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiHeart, mdiHeartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

import { getSpotifyPlaylistId } from "../../spotifyEndpoints/getPlaylistId";

export default function PlaylistDetail() {
  //const location = useLocation()
  const { id } = useParams();

  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState();
  const [loading, setLoading] = useState(true);
  const [savedplaylist, setSavedplaylist] = useState([]);
  const [save, setSave] = useState(false)

  useEffect(() => {
    setLoading(true)
    getSpotifyPlaylistId(setToken, setPlaylist, setLoading, id);
    setInterval(getSpotifyPlaylistId(setToken, setPlaylist, setLoading, id), 60000 * 50);
    console.log(playlist)
  // gets new token every 50 minutes
}, []);

  if (!loading) {
    let tracksLenght = playlist.tracks.items.length;

    var tracks = [];
    for (let i = 0; i < tracksLenght; i++) {
      tracks.push(playlist.tracks.items[i]);
    }

    console.log(tracks)
    // console.log(playlist.artists[0])
  }

  const handleFavorite = () => {
    setSave(!save)
    setSavedplaylist([playlist])
    console.log(savedplaylist)
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{ marginTop: "7%", width: "100%" }}>
          {!loading ? (
            <div>
              <div className="row">
              <Link to="/playlists"><Icon path={mdiArrowLeft} size={1.5} className="m-2 mr-2" /></Link>
              
              <div className="twelve columns">
                <h1 className="playlistTitle mb-5">{playlist.name}</h1>
              </div>
              </div>
              <div className="row">
                <div className="six columns">
                  {tracks.map((track, i) => (
                    <Track name={track.track.name} index={i} url={track.track.external_urls.spotify} />
                  ))}
                </div>
                <div className="six columns">
                  <a href={playlist.external_urls.spotify}
                  target="_blank"
                  >
                  <img src={playlist.images[0].url} alt="playlist cover" className="miniplaylist" /></a>
                  {(playlist.description) ? (<h6 className="mt-3">Description: {playlist.description}</h6>): (<div></div>) 

                  }
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
