

/* Add a title attribute to every element that has the important class, stating This is an important item */

let importantClass = document.getElementsByClassName("important")
console.log(importantClass)

for (let i = 0; i < importantClass.length; i++) {
    importantClass[i].setAttribute('title','important')

    let getTittle = document.getElementsByClassName("important")[0]
    var TitleName= getTittle.getAttribute("title");
    console.log(TitleName);
  }


/* Select all the img tags and loop through them. If they have no important class, turn their display property 
   to none 
*/

let img = document.getElementsByTagName("img")
console.log(img)

for (let i = 0; i < img.length; i++) {
    
  if(img[i].className === "important"){
                img[i].style.display="block";
                console.log(img)
          }else{
            img[i].style.display="none";
            console.log(img)
            
          }
        }


/* Loop through all the paragraphs and display their content in the console. If the paragraph has a class,
   display its classname has well
*/

let paragraph = document.querySelectorAll('p');
console.log(paragraph)


for (let i = 0; i < paragraph.length; i++) {
  console.log(paragraph[i].innerHTML)
  console.log(paragraph[i].className)
   }

/* Give each of the paragraph a random text color (different for each one) UNLESS it has a class then 
   leave it as it is.
*/


paragraph.forEach(function(p){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  p.style.background ='#'+randomColor;
  })
