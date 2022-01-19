import axios from 'axios';

export const getSpotifySongs = (setToken, setData, setLoading) => {
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

        const ENDPOINT = 'https://api.spotify.com/v1/tracks';
        axios
        .get(ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params:{
            ids: "3xqtvSfofDvSMVwwSbuvKi,0TcbMBsLnhquWjhsxIN1BW,5B6Kjha6RRIMWGN7zGsAaT,6PZpNMstpIiRenGK5UyG5D,0bOgWId7cFqBEKnlZct2q6,1R1ihosU2CSEaSw8e5ZF6E,6NmigMZ7Yb0BLgc20LW7ui,6i7Smm8UwrIaiihio8BN5Q,1ApN1loxlt0rzRFc8iETw7"
          }
        })
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })

      }
    });

  }