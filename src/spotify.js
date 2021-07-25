export const authEndPoint="https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";

const clientId="32c45f74f91641218c76bfd1192f9a41";

const scopes=[
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",
"user-read-currently-playing"
];

export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1).split('&').
    reduce((initial,item)=>{
      
        let parts= item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
  
    },{})

}


export const loginUrl=`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;