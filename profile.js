
//localStorage.clear()
const check=()=> {
    if (!localStorage.getItem("userInfo")) {
        window.location.href = "index.html"
       
    }
}



const getData = ()=>{
    const fname = document.getElementById("lfname")
const email = document.getElementById("lemail")
const psd = document.getElementById("lpassword")

const res = localStorage.getItem("userInfo")
const data = JSON.parse(res)
console.log(data);
fname.innerHTML = data.username
email.innerHTML = data.userEmail
psd.innerHTML = data.password
}

getData()