import React from 'react'
import {Link} from 'react-router-dom'

let year = new Date().getFullYear();
export default function Footer() {
    return (
        <div>
            <footer className="bg-light text-lg-start text-light">
  <div className="p-3 pb-4 pt-4 text-center" style={{backgroundColor: "rgba(1,1,1)"}}>
      <div style={{width: "70%", margin:"auto"}}>
  <div className="row mt-3 mb-3">
  <div className="col-12 col-lg-4">
  <h4>Bops 4 You</h4>
  <p>Giving u all of the best bops on earth</p>
  
  </div>
  <div className="col-12 col-lg-4">
  <h4 className="mb-3"><i className="fas fa-mobile-alt"></i> Pages</h4>
  {/* <h6><a href="/" id="footer">Home</a></h6> */}
  <h6><Link to="/" id="footer" onClick={()=>(window.scroll(0,0))}>Home</Link></h6>
  <h6><Link to="/albums" id="footer" onClick={()=>(window.scroll(0,0))}>Albums</Link></h6>
  <h6><a href="/playlists" id="footer">Playlists</a></h6>
  <h6><a href="/favorites" id="footer">Favorites</a></h6>

  </div>
  <div className="col-12 col-lg-4">
  <h4 className="mb-3"><i className="fas fa-map-marker-alt"></i>Credits</h4>
  <h5 ><i className="fas fa-map-marker-alt"></i>Mestrado em Comunicação e Tecnologias Web @ Universidade de Aveiro</h5>
  <h6 ><i className="fas fa-map-marker-alt"></i>Tecnologias de Desenvolvimento Web</h6>
  <h7 ><i className="fas fa-map-marker-alt"></i>2021/22</h7>
  </div>
</div>
   <p style={{color: "#ccc"}} className="text-center mt-5">
        
     {year} Copyright © Nuno Ribeiro</p>
  </div>
  </div>
</footer>
        </div>
    )
}
