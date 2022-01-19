import React,{useState} from 'react'
import Playlist from './Playlist'
import Grid from '@mui/material/Grid'

export default function PlaylistList({data, search}) {
    
    let playlists = data
    
    if(playlists.length > 0){
        
        var playlistsFiltered = playlists.filter((playlist) => {
            
        var searchPlaylist = playlist.name.toLowerCase()
        
        return searchPlaylist.includes(search)
        })

    }

    return (
        <Grid container spacing={3} >
            <div className="twelve columns text-right"></div>
            
            {
                playlistsFiltered.map( (playlist) =>(
         
                    <Playlist 
                       key={playlist.id}
                       id={playlist.id}
                       name={playlist.name}
                       img_url={playlist.images[0].url}
                       description={playlist.description}

                       playlist={playlist}
                       />
                    ) 
            )
            }
        </Grid>
    )
}
