



const check=()=> {
    if (localStorage.getItem("userInfo")) {
        window.location.href = "profile.html"
     getData()
    } 
}





const loginSubmit = (event)=> {
event.preventDefault()
const fname = document.getElementById("fname")
const email = document.getElementById("email")
const psd = document.getElementById("password")
const cnf = document.getElementById("cnf")
const res = document.getElementById("res")

if (fname.value.length == 0 || email.value.length == 0 || psd.value.length == 0 || cnf.value.length == 0){
    res.innerHTML = "Error : All the fields are mandatory"
    res.classList.remove("hide")
  res.classList.add("active")
  res.classList.add("red")
  console.log("ddff");
  return
}

if (psd.value != cnf.value){
    res.innerHTML =""
    res.innerHTML = "password and confirm password does not match"
    res.classList.remove("hide")
    res.classList.add("active")
    res.classList.add("red")
}

const userInfo = {
    username:fname.value,
    userEmail:  email.value,
    password: psd.value
}
localStorage.setItem("userInfo",JSON.stringify(userInfo) )
window.location.href = "profile.html"
}

