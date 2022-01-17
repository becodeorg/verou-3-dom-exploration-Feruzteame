
// last child <---> first child
const olList = document.getElementById('olList')
console.log(olList.children.length);

let firstChild = olList.firstChild
console.log(firstChild)

const  lastChild = document.createElement('LI');
lastChild.innerText = "five";

olList.insertBefore(lastChild, firstChild)

// move h2  section3 to section2 
const secondSection = document.getElementById('secondSection')
const sec3h2 = document.getElementById('sec3');
secondSection.appendChild(sec3h2)

// remove section 3
const thirdSection = document.getElementById('thirdSection');
thirdSection.remove();




