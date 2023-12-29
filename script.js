// localStorage.setItem("theme" , "dark")


//  function changeTheme() {
//     localStorage.setItem("theme" , "light") 

//  }






let toggle = true

let Bodyy = document.querySelector("body")
let Icon = document.getElementById("icon")


function chargeTheme(){
    toggle = !toggle
    Icon.classList.toggle("fa-moon-o")
    if(toggle === true){
        localStorage.setItem("theme", "light")
        Bodyy.style.backgroundColor = "whitesmoke"
        Bodyy.style.transition = "0.3s"
        Title.style.color = "black" 
    }
    else{
        localStorage.setItem("theme", "dark")
        Bodyy.style.backgroundColor = "black"
        Bodyy.style.transition = "0.3s"
        Title.style.color = "white"
    }
}
