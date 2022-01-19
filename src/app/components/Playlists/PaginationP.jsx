import React from 'react'

export default function Pagination({playlistsPerPage, totalPlaylists, paginate}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPlaylists/playlistsPerPage); i++){
        pageNumbers.push(i);
    }

    console.log(totalPlaylists)
    
    return (
        <div className="text-center" style={{display: "flex",
        flexWrap: "wrap",
        maxWidth: "1024px",
        margin: "0 auto",
        marginTop: "3rem",
        justifyContent: "center"}}>
                     <ul
            className="pagination"
            >
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <button onClick={()=> paginate(number)}
                        className="page-link">
                            {number}
                        </button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
