let Body = document.querySelector("body")
let Title = document.querySelector(".title")

let Theme = localStorage.getItem("theme")


if (Theme === "light"){
    localStorage.setItem("theme" , "light")
    Body.style.backgroundColor = "whitesmoke"
    Title.style.color = "black"
}
else{
    localStorage.setItem("theme" , "dark")
    Body.style.backgroundColor = "black"
    Title.style.color = "white"
}

function changeThemeLight(){
    localStorage.setItem("theme", "light")
    Body.style.backgroundColor = "whitesmoke"
    Body.style.transition = "0.3s"
    Title.style.color = "black"
}

function changeThemeDark(){
    localStorage.setItem("theme", "dark")
    Body.style.backgroundColor = "black"
    Body.style.transition = "0.3s"
    Title.style.color = "white"
}
