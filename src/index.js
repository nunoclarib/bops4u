import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import App from './app/App';
import Albums from './app/Albums';
import Playlists from './app/Playlists';
import AlbumDetail from './app/components/AlbumDetail';
import PlaylistDetail from './app/components/Playlists/PlaylistDetail';
import Favorites from './app/Favorites';

import { createStore } from "redux";
import { Provider } from "react-redux";
import Menu from './menu/menu';

import Header from './app/components/Header';
import Footer from './app/components/Footer';
import favoriteReducer from './app/reducer/favoriteReducer';

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

  }
  catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  }
  catch(e){
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage() // presiste estado

const store = createStore(
  favoriteReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
    <Router>
      <Menu/>
      <Header/>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/album/:id' element={<AlbumDetail />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/playlist/:id' element={<PlaylistDetail/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
      <Footer/>
    </Router>
    </Provider>
    ,document.getElementById('root')
);
