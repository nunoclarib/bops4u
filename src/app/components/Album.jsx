import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export default function Album({id,name, img_url, artist, release_date}) {

    return (
        <Grid item xs={4}>
        <Paper>
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
