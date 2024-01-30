//certification and skills tab switch animation
const switchbtn = document.querySelector("#switchtab")
const skills_tab = document.querySelector(".skillset").style
const cert_tab = document.querySelector(".certifications").style

switchbtn.addEventListener("click",()=> {
    //if the current text is certifications, it means the skills tab is active
    if(switchbtn.innerHTML == 'SHOW MORE') { 
        cert_tab.top = '-100%'
        switchbtn.innerHTML = 'SHOW LESS'
    }  else { 
        cert_tab.top = '0%'
        switchbtn.innerHTML = 'SHOW MORE'
    }
})