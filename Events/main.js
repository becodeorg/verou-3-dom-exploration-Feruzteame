
// Function
function createList(e){
    const ul = document.getElementById('ulList')
    let list = document.createElement("LI")
    list.className = "newList";
    const bgColor = e.target.id
    console.log(bgColor)
    list.style.background = bgColor
    ul.appendChild(list)

    list.addEventListener('mouseover', function colorAlert(){
                                    alert('The background color is ' + bgColor )})
   }

 
// addeventListener
const div1 = document.getElementById('lime')
const div2 = document.getElementById('violet')
const div3 = document.getElementById('orange')

div1.addEventListener('click', createList)
div2.addEventListener('click', createList)
div3.addEventListener('click', createList)




//  const newList = document.getElementsByClassName('newList')
//  console.log(newList)
//  newList.addEventListener('click',colorAlert )
