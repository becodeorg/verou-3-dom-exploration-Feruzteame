
// last child <---> first child
const olList = document.getElementById('olList')
console.log(olList.children.length);

let firstChild = olList.children[0]
const  lastChild = olList.children[4];
olList.insertBefore(lastChild, firstChild)

// move h2  section3 to section2 
const main = document.getElementById('main')
const secondSection = main.children[2];
console.log(secondSection);
const thirdSection = main.children[2];
const thirdSectionDiv = thirdSection.children[0].children[0]
console.log(thirdSectionDiv);
secondSection.appendChild(thirdSectionDiv)

// remove section 3
thirdSection.remove();




