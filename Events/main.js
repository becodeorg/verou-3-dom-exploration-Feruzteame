
function Timer() {
        // create time
        time = new Date();
        const minuteTimer = time.getMinutes() 
        const secondTimer = time.getSeconds() 
        // select timing place
        const timing = document.getElementById('time')
        const list = document.createElement('LI')
        list.innerHTML =`${minuteTimer}.${secondTimer }s` // this is not jquery, es6 javascript literals template
        timing.appendChild(list)
        // KeyI event to delete list
        window.addEventListener('keydown', function(e) {
        if(e.code === "KeyI"){
        list.style.display = "none"
           }
        })
   }
 // change background color with key space  
window.addEventListener('keydown', function(e) {
       if(e.code === "Space"){
        document.body.style.background = "black"
        document.body.style.color = "white"
    }
     })

// Function for create list
function createList(e){
        // select container
        const box = document.getElementById('displayedsquare')
        // create sub-container
        const subContainer = document.createElement('DIV')
        // create boxes
        let div = document.createElement("DIV")
        div.className = "newList";
        const bgColor = e.target.id
        div.style.background = bgColor
        //append box to containers
        subContainer.appendChild(div)
        box.appendChild(subContainer)
        // mouseover function of created box
        div.addEventListener('click', function colorAlert(){
           alert(`The background color is ${bgColor}`)
         })
       // call timer function
       Timer()
       // delete div with keyS
       window.addEventListener('keydown', function(e) {
            if(e.code === "KeyS"){
            div.style.display = "none"
        }})
    }

 
 
// add event Listener
const div1 = document.getElementById('lime')
const div2 = document.getElementById('violet')
const div3 = document.getElementById('orange')

div1.addEventListener('click', createList)
div2.addEventListener('click', createList)
div3.addEventListener('click', createList)



