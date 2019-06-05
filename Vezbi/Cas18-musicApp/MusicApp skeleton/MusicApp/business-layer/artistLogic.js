 import {ArtistRepository} from  "../repositories/artistRepository.js";
 import {AlbumRepository} from "../repositories/albumRepository.js"
 

 export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    
    
    this.getArtistPageData = async function(artistName) {

        var artist =  await this.artistRepo.getArtist(artistName);
        

        // var listaodImninjaNaAlbui = this.artistRepo.getTopAlbumNames(artistName);
        // var vistinskiAlbumi = this.artistRepo.getAlbums(artistName, listaodImninjaNaAlbui)


        console.log(artist);

        var topAlbumNames = await this.artistRepo.getTopAlbumsNames(artistName);
        var album = await this.albumRepo.getAlbum(artistName,topAlbumNames);
        
        
        
        var pageData = {
            artist: artist,
            album: album
        }
        console.log(pageData);
        return pageData;
    }
}