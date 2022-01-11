/* Modify the script.js to create a new <section> with a random background-color for each learner in your promo.
   This section should contain a paragraph with the name of the learner. 
   Those sections should be appended in the <article></article>
*/

   
const array = [
    "Ahmad",
    "Jian",
    "Michael",
    "Dante",
    "Muhammet",
    "Nicolas",
    "Jordy",
    "Beryl",
    "Cynthia",
    "Ruben",
    "Magali",
    "Jawid",
    "Koen",
    "Kevin",
    "Benjamin",
    "Dery",
    "Michelle",
    "Colin",
    "Feruz",
    "Pieter",
    "Ellen",
    "Sara"
]

for(let i=0; i < array.length; i++){
      // create section and insert array  
      const newSection = document.createElement("section");
      const newContent = document.createTextNode(array[i]);
      newSection.appendChild(newContent);;
     // create article include the section and article append to the body
     const newArticle = document.createElement("article");
     newArticle.appendChild(newSection)
     document.body.appendChild(newArticle);
    // some section style
     newSection.className = "section-container"
     newSection.style.margin ="10px";
     console.log(newSection.length)

}

const container = document.getElementsByClassName("section-container")
  for(let i=0; i < container.length; i++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    container[i].style.background ='#'+randomColor;
  }

    /*
If the background is dark the text should be white, if the background is light the text should be black*/

/*Find a way so that everytime you load the page the order of the elements changes!*/