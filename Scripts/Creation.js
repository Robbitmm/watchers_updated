var capa = document.getElementById("Image_select");
const title = document.getElementById("title_input");
var subtitle = document.getElementById("sub-title_input");
var capa = document.getElementById("writing_input");

function Create_page(){
    doc = window.open("", "newPage");

    console.log(title)
    doc.document.write(`<title> ${title} </title>`);

    //var p = doc.createElement("p");
    //p.innerHTML = "This is a new paragraph.";
    //doc.body.appendChild(p);
}
