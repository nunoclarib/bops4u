import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Code } from "react-content-loader";
import TextField from "@mui/material/TextField";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import Album from "./components/Album";
import Header from "./components/Header";
import Logo from "../img/b4u.png";
import { getSpotifyPlaylists } from "./spotifyEndpoints/getPlaylists";
import PaginationP from "./components/Playlists/PaginationP";
import PlaylistList from "./components/Playlists/PlaylistList";

const Playlists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [playlistsPerPage] = useState(6);

  console.log(token);
  //console.log(data)
  useEffect(() => {
    setLoading(true);
    getSpotifyPlaylists(setToken, setData, setLoading);
    setInterval(getSpotifyPlaylists(setToken, setData, setLoading), 60000 * 50);
    // gets new token every 50 minutes
  }, []);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };
  if (loading === false) {
    const indexOfLastAlbum = currentPage * playlistsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - playlistsPerPage;
    var currentPlaylists = data.items.slice(indexOfFirstAlbum, indexOfLastAlbum);

    console.log(currentPlaylists);
    console.log(data.playlists);
    console.log(currentPage);
    console.log(indexOfLastAlbum);
    console.log(indexOfFirstAlbum);
  }

  const paginate = (number) => setCurrentPage(number);

  return (
    <div>
      <div className="container" id="beginning">
        <div className="row">
          <div style={{ marginTop: "7%", width: "100%" }}>
            <h1 className="title">Best Playlists of 2021</h1>
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
                <PlaylistList data={currentPlaylists} search={search}/>
                <PaginationP
                  playlistsPerPage={playlistsPerPage}
                  totalPlaylists={data.items.length}
                  paginate={paginate}
                />
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Playlists;
