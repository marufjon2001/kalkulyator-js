let amallar = (e)=>{
let ekran  = document.querySelector(".ekran")
ekran.innerHTML += e.target.innerHTML
}
let delete1 = ()=>{
    let ekran  = document.querySelector(".ekran")
    let a = ekran.innerHTML.split("")
    a.pop()
    ekran.innerHTML = a.join("")
}

let ac = () => {
    let ekran  = document.querySelector(".ekran")
    ekran.innerHTML =""
}
let equal = ()=>{
    let ekran  = document.querySelector(".ekran")
    ekran.innerHTML = eval(ekran.innerHTML)
}