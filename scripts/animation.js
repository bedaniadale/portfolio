let headerButton = document.querySelector("#header_cursor")

headerButton.addEventListener("click",()=> { 
    let current_arrow = document.querySelector("#header_cursor_arrow")
    let header = document.querySelector(".header")
    if(current_arrow.innerHTML == 'keyboard_arrow_down') { 
        header.style.height = '0'
        current_arrow.innerHTML = 'keyboard_arrow_up'
        header.classList.add("hidden")
    } 
    else { 
        header.classList.remove("hidden")
        header.style.height = '100%'
        current_arrow.innerHTML = 'keyboard_arrow_down'

    } 

})
    
