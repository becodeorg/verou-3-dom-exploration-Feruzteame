
import {collections} from "./data.js";
console.log(collections);


for(let i = 0; i < collections.length; i++){
    const section = document.createElement("section")
    section.className = "section-container";
    const div = document.createElement("div");
    div.className = "box-container";
    section.appendChild(div)
    document.body.appendChild(section);
    // get data
    const pic= document.createElement("img")
    pic.setAttribute("src", "img/music.jpg")
    pic.className = "musicPic" 
    const title= document.createElement("p") 
    const titles= document.createTextNode(collections[i].Title);
    title.appendChild(titles);
    title.className ="title"      
    const name= document.createTextNode(collections[i].name)
    name.className ="name"  
    const time= document.createTextNode(collections[i].time)
    time.className ="time"  
    const loveImg = document.createElement("img")
    loveImg.setAttribute("src", "https://img.icons8.com/material-outlined/24/000000/filled-like.png")
    // append to the div
    const lineBreak = document.createElement("br");
    const lineBreaks = document.createElement("br");
    div.appendChild(pic);
    div.appendChild(title);
    div.appendChild(lineBreak);
    div.appendChild(name);
    div.appendChild(lineBreaks);
    div.appendChild(time);
    div.appendChild(loveImg);
    
    }
   

