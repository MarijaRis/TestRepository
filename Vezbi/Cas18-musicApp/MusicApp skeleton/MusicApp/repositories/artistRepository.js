import {Artist} from "../entities/artist.js";

export function ArtistRepository() {
    this.getArtist = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" + artistName + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
            result = await response.json();
            return new Artist(result, artist);
        } catch (error) {
            return result;
        }
    },

this.getTopAlbumNames = async function(artistName){
    var result = null;
    try{
        var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistName + "&api_key=67a4460a101c4fe553e93913e8437352&format=json");
        result = await response.json();
        return result.topAlbums.album.map(function(album){
            return album.name;
        });
    }catch(error){
        return result;
    }
}
}