var abort = false
function mudarcor() {
if (abort == false) {r = Math.floor(Math.random() * 256)
g = Math.floor(Math.random() * 256)
b = Math.floor(Math.random() * 256)
document.body.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"
setTimeout(mudarcor, Math.random()*10) } if (abort ==true) {console.log("ok") 
abort = false}
}