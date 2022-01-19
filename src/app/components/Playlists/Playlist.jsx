import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export default function Album({id,name, img_url, description, }) {


    return (
        <Grid item xs={4}>
        <Paper>
            <Link id="playlist" to={`/playlist/${id}`} >
                <div className="p-3">
                    <h2>{name}</h2>
                    <h4>{description}</h4>
                </div>
                    <img src={img_url} alt=" album cover" />
            
            </Link>
        </Paper>
        </Grid>
    )
}
