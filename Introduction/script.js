
/* Display the document title in the console */

console.log(document.title)

/*  Change the document title to Modifying the DOM */
 let documentTitle = document.title
 documentTitle = "Modifying the DOM";
 console.log(documentTitle);

/* Change the background color of the body to hot pink (#FF69B4). 
   If that worked, try with a random color as an extra challenge. 
   (tip: You can use the rgb() notation and 3 random-generated numbers
    between 0 and 255).
 */
let backgroundColor = document.body;
backgroundColor.style.backgroundColor =  "#FF69B4";



/* Using the children method and a for ... of loop, display every children elements of the second
   child element of your document (display all children elements of the <body>) 
*/
const myElement = document.body;
for (let i = 0; i < myElement.children.length; i++) {
       console.log(myElement.children[i]
    );
}


