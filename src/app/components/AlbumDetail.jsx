import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Track from "./Track";
import { Code } from "react-content-loader";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiHeart, mdiHeartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';
import { getAlbumId } from "../spotifyEndpoints/getAlbumId";
import { useDispatch, useSelector } from "react-redux";
import { favorite, unfavorite } from "../actions/index";

export default function AlbumDetail() {
  //const location = useLocation()

  const dispatch = useDispatch();

  const { id } = useParams();

  const favoriteAlbums = useSelector((state) => state);

  const [token, setToken] = useState("");
  const [album, setAlbum] = useState();
  const [loading, setLoading] = useState(true);
  //const [favAlbums, setFavAlbums] = useState([]);
  const [save, setSave] = useState(false)

   var consola = favoriteAlbums.map(album => album.albums[0].id.includes(id)).toString()
   console.log(consola)

  if (!loading) {
    let tracksLenght = album.albums[0].tracks.items.length;

    var tracks = [];
    for (let i = 0; i < tracksLenght; i++) {
      tracks.push(album.albums[0].tracks.items[i]);
    }
  
    //console.log(album)
    // console.log(album.albums[0].artists[0])
  }
  console.log(save)

  useEffect(() => {
    getAlbumId(setToken, setAlbum, setLoading , id);
    setInterval(getAlbumId(setToken, setAlbum, setLoading , id), 60000 * 50);

    console.log(favoriteAlbums.length)

    var heart = favoriteAlbums.map( (album) => ( album.albums[0].id.includes(id) ))
    if( heart.includes(true) ){
      setSave(true)
    }
    else {
      setSave(false)
    }
    // gets new token every 50 minutes
  }, [favoriteAlbums]);

  const favAlbum = (album) => {

    dispatch(favorite(album))
    setSave(true)

  }
  const unfavAlbum = (album) => {

    dispatch(unfavorite(album))
    setSave(false)

  }

  return (
    <div className="container">
      <div className="row">
        <div style={{ marginTop: "7%", width: "100%" }}>

          {(save) ? (<div className="text-right"><Icon path={mdiHeart} size={1.5} className="m-2 mr-2 red" onClick={() => unfavAlbum(album)}/></div>) : (<div className="text-right"><Icon path={mdiHeartOutline} size={1.5} className="m-2 mr-2" onClick={() => favAlbum(album)}/></div>)}
          {!loading ? (
            <div>
              <div className="row">
              <Link to="/albums"><Icon path={mdiArrowLeft} size={1.5} className="m-2 mr-2" /></Link>
              
              <div className="twelve columns">
                <h1 className="albumTitle">{album.albums[0].name}</h1>
                <h3 className="d-block mb-5">
                  <a
                    href={album.albums[0].artists[0].external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {album.albums[0].artists[0].name}
                  </a>
                </h3>
              </div>
              </div>
              <div className="row">
                <div className="six columns">
                  {tracks.map((track, i) => (
                    <Track key={i} name={track.name} index={i} url={track.external_urls.spotify}/>
                  ))}
                </div>
                <div className="six columns">
                  <a href={album.albums[0].external_urls.spotify}
                  target="_blank"
                  >
                  <img src={album.albums[0].images[0].url} alt="album cover" className="miniAlbum" /></a>
                  <h4 className="mt-3">Release date: {album.albums[0].release_date}</h4>
                  <h6 className="mt-3">Copyright: {album.albums[0].copyrights[0].text}</h6>
                  <h6 className="mt-3">Artist Label: {album.albums[0].label}</h6>
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
