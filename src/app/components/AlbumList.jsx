import React,{useState} from 'react'
import Album from './Album'
import Grid from '@mui/material/Grid'

export default function AlbumList({data, search}) {

    const [orderPopularity, setOrderPopularity] = useState(false);

    console.log(orderPopularity)
    
let albums = data

    //console.log(albums.sort((a,b) => a.popularity > b.popularity))
    

    if(albums.length > 0){
        
    if(orderPopularity === true){
        let albumsOrder = albums.sort((a,b) => a.popularity < b.popularity)
        var albumsFiltered = albumsOrder.filter((album) => {
            
            var searchAlbum = album.name.toLowerCase()
            
            let searchAlbumArtists = album.artists[0].name.toLowerCase()

            if(searchAlbum.includes(search))
                return searchAlbum.includes(search)
            else
                return searchAlbumArtists.includes(search)
        })

    }else if (orderPopularity === false){
        var albumsFiltered = albums.filter((album) => {
            
            var searchAlbum = album.name.toLowerCase()
            
            let searchAlbumArtists = album.artists[0].name.toLowerCase()

            if(searchAlbum.includes(search))
                return searchAlbum.includes(search)
            else
                return searchAlbumArtists.includes(search)
        })
    }
}

    return (
        <Grid container spacing={3} >
            <div className="twelve columns text-right"><button onClick={()=>setOrderPopularity(!orderPopularity)}>Order By Popularity</button></div>
            
            {
                albumsFiltered.map( (album) =>(
         
                    <Album 
                       key={album.id}
                       id={album.id}
                       name={album.name}
                       img_url={album.images[0].url}
                       artist={album.artists[0].name} 
                       album={album}
                       className="albumslist"
                       />
                    ) 
            )
            }
        </Grid>
    )
}
