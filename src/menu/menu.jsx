import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../img/b4u-color.png";
import Icon from '@mdi/react';
import { mdiMusicNoteEighth, mdiAlbum, mdiPlaylistMusic, mdiHome, mdiMenu, mdiHeartMultiple, mdiFolderHeartOutline} from '@mdi/js';
import ReactTooltip from 'react-tooltip';

const Menu = () => {

  return (
    <div classNameName="menu">
        <nav className="navbar navbar-expand-sm fixed-top navbar-light" id="navbar">
        <ReactTooltip place="bottom" type="light" effect="float"/>
              <a className="navbar-brand" href="#" id="brand">
                {/* <img id="brand" src={Logo} height="70px"/> */}
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                      <Icon path={mdiMenu} size={1} aria-hidden="true"/>
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                  <NavLink activeClassName="active" to="/" className="nav-link" onClick={()=>(window.scroll(0,0))}>
                    <Icon path={mdiHome} size={1} className='m-1 mr-5' data-tip="home"/> <span className="sr-only">(current)</span>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/albums" className="nav-link" onClick={()=>(window.scroll(0,0))}>
                    <Icon path={mdiAlbum} size={1} className='m-1 mr-5' data-tip="albums"/>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink activeClassName="active" to="/playlists" className="nav-link" onClick={()=>(window.scroll(0,0))}>
                    <Icon path={mdiPlaylistMusic} size={1} className='m-1  mr-5' data-tip="playlists"/>
                  </NavLink>
                  </li>
                  <li className="nav-item">

                  <NavLink activeClassName="active" to="/favorites" className="nav-link" onClick={()=>(window.scroll(0,0))}>
                      <Icon path={mdiFolderHeartOutline} size={1} className='m-1' data-tip="favorites"/>
                  </NavLink>
                  </li>
                </ul>
                
              </div>
            </nav>
    </div>
  );
}
export default Menu;