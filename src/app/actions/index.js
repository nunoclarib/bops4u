export const favorite = (album) => {
    return{
        type: 'FAVORITE',
        album
    }
}

export const unfavorite = (album) => {
    return{
        type: 'UNFAVORITE',
        album
    }
}