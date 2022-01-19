import axios from 'axios';

export const getSpotifyAlbums = (setToken, setAlbums, setLoading) => {
    var request = require('request'); // "Request" library
  
    var client_id = '2cfb5e7b02ca4eb68e260b3671582437'; // Your client id
    var client_secret = '2496a9966a7344bebbc0881aded96e9f'; // Your secret
    
    // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
    
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        setToken(token);

        const ENDPOINT = 'https://api.spotify.com/v1/albums';
        axios
        .get(ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params:{
            ids: "3a9qH2VEsSiOZvMrjaS0Nu,0yMLTRxwcDN5XHjP5w8jAH,0LHqiYYOsVM9lh9c9w0G1j,7fJJK56U9fHixgO0HQkhtI,6XNrM2YkzSXyQ9hekFOgLN,6y9LbrjY2TpaLvtbE7FTkc,3G77BQuJy3jahjdkKQNNNM,6kZ42qRrzov54LcAk4onW9,4ClyeVlAKJJViIyfVW0yQD,5fa6oWFXuvaVkY49mfOsRd,6s84u2TUpR3wdUv4NgKA2j,4SBl4zvNIL4H137YRf2P0J,0JGOiO34nwfUdDrD612dOp,1Vg5v9M0afj5sIl1ndRXzy,2wwCc6fcyhp1tfY3J6Javr,4XLPYMERZZaBzkJg0mkdvO,7Ho8gAx4haSxv1eFLQwvTj,74vajFwEwXJ61OW1DKSPEa,3OevODyllQCrhudfLLnV3y"
          }
        })
        .then((response) => {
          setAlbums(response.data);
          setLoading(false);
        })

      }
    });

  }