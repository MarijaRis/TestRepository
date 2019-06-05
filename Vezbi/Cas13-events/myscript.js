function CreateParagraph() {
    var par = document.createElement("div");
    par.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada, augue sit amet bibendum congue, augue metus dignissim neque, eleifend varius nisl magna et justo. Nulla facilisi. Duis vel iaculis magna. Praesent maximus suscipit ante non dictum. Vestibulum dictum risus id pretium sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a pulvinar magna. Cras cursus elit quis placerat bibendum. Donec ac sem orci. Nullam iaculis erat sit amet neque sagittis dignissim. Curabitur dapibus elit vel turpis malesuada vehicula. Aliquam eget odio non est tempor semper. Mauris suscipit diam quis quam ultricies sagittis at scelerisque lectus. Duis faucibus turpis ac blandit scelerisque. Fusce auctor lorem at laoreet rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    document.getElementsByTagName("body")[0].appendChild(par);

    var body = document.getElementByTagName("body")[0];
    body.appendChild(par);

    // var paragraphs = document.getElementsByClassName("side-paragraph");
    // for (let index = 0; index < paragraphs.length; index++);
    // const element = paragraphs[index];

    paragraphs.forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.target.style.color = "red";
        });
    })
    console.log(element[0]);

    par.addEventListener("click", function (event) {
        event.target.style.color = "red";
        par.style.fontFamily = "Helvetica";
        par.style.fontSize = "20px";
    });

    par.addEventListener("mouseout", function (event) {
        event.target.style.color = "black";
    });
}
CreateParagraph();

// this.myParagrf = function(){
//var mainParagraf = document.getElementById("main-paragraf");
// mainParagraf.appendChild(paragraf);


// exercise #2
function Resize() {
    var w = window.getClientWidth;
    var h = window.getClientHeight;
    console.log("W = " + window.getClientWidth + " H =" + window.getClientHeight);
}

//

var reSize = function () {
    console.log(innerWidth);
    console.log(innerHeight);
}
window.addEventListener("resize", reSize, false);

var size = document.getElementById("#semple-div");
window.innerHTML = "W = " + window.innerWidth + " H = " + window.innerHeight;

// exercise #3

function login() {
    var mainDiv = document.createElement("mainDiv");

    var firstName = document.createElement("input");
    firstName.innerHTML = "First Name";
    firstName.placeholder = "enter your first name";
    input.type = "text";

    var lastName = document.createElement("input");
    lastName.innerHTML = "Last Name";
    lastName.placeholder = "enter your last name";
    input.type = "text";

    var email = document.createElement("input");
    email.innerHTML = "E-mail"
    email.placeholder = "enter your e-mail address";
    input.type = "text";

    var password = document.createElement("input");
    password.innerHTML = "Password";
    password.placeholder = "enter your password";
    input.type = "text";

mainDiv.appendChild(firstName);
mainDiv.appendChild(lastName);
mainDiv.appendChild(email);
mainDiv.appendChild(password);
}