import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Code } from "react-content-loader";
import TextField from "@mui/material/TextField";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import AlbumList from "./components/AlbumList";
import Pagination from "./components/Pagination";
import {useSelector} from "react-redux"
import { favorite } from "./actions";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import FavoriteAlbum from "./components/Favorites/FavoriteAlbum";


const Favorites = () => {

    const favoriteAlbums = useSelector((state) => state);

    console.log(favoriteAlbums)

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [orderPopularity, setOrderPopularity] = useState(false);

    useEffect(() => {
        if(favoriteAlbums){
            setLoading(false)
        }
        else{
            setLoading(true)
        }
      }, []);

      if(favoriteAlbums.length > 0){
            var favoriteAlbumsFiltered = favoriteAlbums.filter((album) => {
                
                var searchAlbum = album.albums[0].name.toLowerCase()
                
                let searchAlbumArtists = album.albums[0].artists[0].name.toLowerCase()
    
                if(searchAlbum.includes(search))
                    return searchAlbum.includes(search)
                else
                    return searchAlbumArtists.includes(search)
            })
    }

    const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="container" id="beginning">
        <div className="row">
          <div style={{ marginTop: "7%", width: "100%" }}>
            <h1 className="title">Ur Favorites</h1>
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "70%", marginBottom: "5rem" },
              }}
              noValidate
              autoComplete="off"
              className="mx-auto"
            >
              <Box
                sx={{ display: "flex", alignItems: "flex-end" }}
                className="mx-auto"
              >
                <Icon path={mdiMagnify} size={1.5} className="m-2 mr-2" />
                <TextField
                  sx={{ input: { fontSize: "1.7rem", height: "auto" } }}
                  onChange={handlerSearch}
                  value={search}
                  id="input-with-sx"
                  label="your favorite album or artist here"
                  variant="standard"
                  fullWidth
                  size="small"
                />
              </Box>
            </Box>

            {loading ? (
              <Code height={540} width={700} />
            ) : (
              <Box className="mb-5">
                  <Grid container spacing={3} >
                      {
                          favoriteAlbumsFiltered.map(favorite => 
                            <FavoriteAlbum key ={favorite.albums[0].id} id={favorite.albums[0].id}
                            name={favorite.albums[0].name} artist={favorite.albums[0].artists[0].name} img_url={favorite.albums[0].images[0].url}/>
                          )
                          
                      }
                  </Grid>
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Favorites;
