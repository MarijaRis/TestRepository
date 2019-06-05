function Picture(name) {
    this.picture = name;
    // this.link = "https://www.google.com/";
    this.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita quo, nulla iste qui quibusdam aut illo assumenda quos repellat quia dolore mollitia, asperiores nam quidem error repellendus sunt accusantium.";
    this.imageForFace = getRandom(1, 6);
    switch(this.imageForFace){
        case 1:
        this.link = "obetki/003.jpg.jpg";
        break;
        case 2:
        this.link = "obetki/016.jpg.jpg";
        break;
        case 3:
        this.link = "obetki/026.jpg.jpg";
        break;
        case 4:
        this.link = "obetki/027.jpg.jpg";
        break;
        case 5:
        this.link = "obetki/028.jpg.jpg";
        break;
        case 6:
        this.link = "obetki/003.jpg.jpg";
        break;
    }

}
