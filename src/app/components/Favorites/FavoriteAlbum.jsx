import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom';

export default function FavoriteAlbum({name, id, artist, album, img_url}) {

    return (
        <Grid item xs={4}>
            <Paper className="mb-5">
            <Link to={`/album/${id}`}>
                                    <div className="p-3">
                                        <h2>{name}</h2>
                                        <h3>{artist}</h3>
                                    </div>
                                    <img src={img_url} alt=" album cover" />
                                    </Link>
                            </Paper>
                            </Grid>
    )
}
