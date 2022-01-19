const favoriteReducer = (state = [], action) => {
    switch(action.type){
        case 'FAVORITE':
            const newFavList = [...state, action.album]
            state = newFavList 
            return state;
        case 'UNFAVORITE':
            const newFavListR = state.filter(
                (favorite) => favorite.albums[0].id !== action.album.albums[0].id
            )
            state = newFavListR 
            return state
        default:
            return state;
    }
}

export default favoriteReducer