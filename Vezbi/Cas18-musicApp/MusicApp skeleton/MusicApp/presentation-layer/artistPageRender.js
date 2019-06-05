import {ArtistLogic} from "../business-layer/artistLogic.js";
// import * as jquery from "/jquery-3.3.1.min.js"

export function RenderArtist() {
    moment.locale("mk");
    this.artistPageData = new ArtistLogic();
    this.artistData = {};
    
    this.renderAll = async function (artistName) {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);

        $("<div>").addClass("artist-container").appendTo("#main-container");
        var $artistContainer = $(".artist-container");
        $artistContainer
        // var $mainContainer = $("#main-container");
        // $mainContainer
        .append(this.renderArtistProfile())
        .append(this.renderSimilar())
        .append(this.renderBio())
        .append(this.renderAlbums())
        .append(this.renderArtistTopTracks());

        // this.renderArtistProfile().appendTo($mainContainer);
        // this.renderSimilar().appendTo($mainContainer);
        // this.renderBio().appendTo($mainContainer);
        // this.renderAlbums().appendTo($mainContainer);

    }

    this.renderArtistProfile = function () {
        // return  $("<div>").addClass("artist-name").html(this.artistData.artist.name).append($("<img>").attr("src",this.artistData.artist.image[3]["#text"])); 
    
        console.log(this.artistData);
        return("<img>");

    }
    this.renderSimilar = function () {
        var $similarArtist = $("<div>").addClass("similar");
        $similarArtist.prepend($("<span>").addClass("similarMainSpan").html("Similar Artists"));
        
        for (let index = 0; index < this.artistData.artist.similar.artist.length; index++) {
            
            $similarArtist.append($("<div>").addClass("similarArtist").append($("<img>").addClass("similarImg").attr("src", this.artistData.artist.similar.artist[index].image[1]["#text"])).append($("<a>").addClass("similarSpan").attr("href", this.artistPageData.getArtistPageData(this.artistData)).html(this.artistData.artist.similar.artist[index].name)));
            event.preventDefault();
            $("#main-container").html("");
            console.log(event.target);

            this.renderAll(event.target.text)
        }
        return $similarArtist;
        //return("<span>");

    }
    this.renderBio = function () {
        return("<p>");

    }
    this.renderAlbums = function () {
        return("<div>");

    }
}


