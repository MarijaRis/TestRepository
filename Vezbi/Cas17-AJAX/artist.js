function Artist(){
    this.name = "";
    this.album = [];
    this.biography = [];


}

var getInfo = $({
  method: "POST",  
  url:"http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=67a4460a101c4fe553e93913e8437352&format=json"  
});

console.log(getInfo);

// this.getAlbum ();
// this.getBiography();
