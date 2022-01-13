
import {collections} from "./data.js";
console.log(collections);


for(let i = 0; i < collections.length; i++){
 
    const boxContainer = document.createElement("div");
    boxContainer.className = "box-container";
    
    // get data
    const pic= document.createElement("img")
    pic.setAttribute("src", "img/music.jpg")
    pic.className = "musicPic" 
    const title= document.createElement("p") 
    const titles= document.createTextNode(collections[i].Title);
    title.appendChild(titles);
    title.className ="title"      
    const name= document.createTextNode(collections[i].name)  
    const time= document.createTextNode(collections[i].time)  
    const loveImg = document.createElement("img")
    loveImg.setAttribute("src", "https://img.icons8.com/material-outlined/24/000000/filled-like.png")
    // append to the div
    const lineBreak = document.createElement("br");
    const lineBreaks = document.createElement("br");
    boxContainer.appendChild(pic);
    boxContainer.appendChild(title);
    boxContainer.appendChild(lineBreak);
    boxContainer.appendChild(name);
    boxContainer.appendChild(lineBreaks);
    boxContainer.appendChild(time);
    boxContainer.appendChild(loveImg);
    
   const sectionContainer = document.getElementById("section-container")
   sectionContainer.appendChild(boxContainer)

    }
   

