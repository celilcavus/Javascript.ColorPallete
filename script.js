const clickMe = document.getElementById("click");
const backgroundColor = document.getElementById("bg");
const txt = document.getElementById("text");
clickMe.addEventListener("click",()=>{
    var colors = ['red','blue','black','white','yellow','green','pink']
    var colorName = backgroundColor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    txt.innerHTML = `BACKGROUND COLOR : ${colorName.toUpperCase()}`;
})