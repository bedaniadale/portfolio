//buttons
const cursor = document.querySelector("#header_cursor")
const backtotop = document.querySelector(".btp"); 
//animation for hand 

const heart = document.querySelector(".heart") 




// sections
const header = document.querySelector(".header")
const hero = document.querySelector(".hero") 
const cv = document.querySelector(".cv").style
const cv2 = document.querySelector(".cv")
const works = document.querySelector(".works")
const contact = document.querySelector("contact")

//text elements
const cursorSpan = document.querySelector(".cursorspan")
const hoveredpage = document.querySelector("#currdiv")
const reminder = document.querySelector(".reminder")
const homebutton = document.querySelector(".hc") 
const musicbutton = document.querySelector(".music-player")
const musiclabel = document.querySelector(".music-player-label")


//audio 
const audio = document.querySelector("#audio")
const music_icon = document.querySelector(".music")
const music_popup = document.querySelector(".music-player-popup")
const mpp = document.querySelector(".mpp")
// cursor.addEventListener("click",()=> { 
//     let current_arrow = document.querySelector("#header_cursor_arrow")
//     if(current_arrow.innerHTML == 'keyboard_arrow_down') { 
//         header.style.height = '0'
//         current_arrow.innerHTML = 'keyboard_arrow_up'
//         header.classList.add("hidden")
//     } 
//     else { 
//         header.classList.remove("hidden")
//         header.style.height = '100%'
//         current_arrow.innerHTML = 'keyboard_arrow_down'

//     } 

// })

//if you are on the header section and you clicked 
function hideHeader() { 
    header.style.height = '0'
    header.classList.add("hidden")
    hoveredpage.innerHTML = "hero"; 
    backtotop.style.display = "flex"
    cursor.style.width = '120px'
    cursor.style.height = '120px'
    cursor.style.left = '60%'
    cursor.style.top = '70%'
    cursor.style.backgroundColor = 'var(--bgprimary)';
    cursor.style.color = 'white';
    cursorSpan.style.fontSize = '10rem';
    reminder.style.display = 'None';
    homebutton.style.display = 'flex'
    musicbutton.style.display = 'flex';
    if(music_icon.innerHTML == 'music_note') { 
        musiclabel.style.display = 'flex';
    }

    heart.style.top = '125%';
}


//if you are on the hero section and you clicked next
function hideHero(){
    hero.style.position = 'absolute';
    // hero.style.height = '0'; 
    // hero.classList.add("hidden"); 
    hoveredpage.innerHTML = "cv"; 
    cursor.style.left = '25%'
    cursor.style.top = '87%'
    cursor.style.width = '68px'
    cursor.style.height = '68px'
    cursorSpan.style.fontSize = '2rem';
    cursor.style.backgroundColor ='white';
    cursor.style.color = 'var(--bgprimary)';

    cv.top = '0%';
    hero.style.position = 'absolute'; 
    hero.style.top = '-30%'; 
}

//if you are on the cv section and you clicked next 
function hideCv() {
    hoveredpage.innerHTML = "works"; 
    hero.style.top = '-200%'
    cv.top = '-100%';
    cursor.style.left = '50%'

    //set cursor
    cursor.style.top = '93%'
    cursor.style.width = '40px'; 
    cursor.style.height = '40px'; 
    cursor.style.backgroundColor = 'var(--bgprimary)';
    cursor.style.color = 'white';
    cursor.style.display = 'none';
}   


function showHeader() { 
    header.style.height = '100%'
    header.classList.remove("hidden")
    hoveredpage.innerHTML = "header"; 
    backtotop.style.display = "flex"
    backtotop.style.display = "none"
    cursor.style.width = '48px'
    cursor.style.height = '48px'
    cursor.style.left = '48%'
    cursor.style.top = '85%'
    cursor.style.backgroundColor = 'rgb(182, 180, 180)';
    cursor.style.color = 'black';
    cursorSpan.style.fontSize = '2rem';

    hero.style.position = 'static'
    homebutton.style.display = 'none'
    musicbutton.style.display = 'none';
    musiclabel.style.display = 'none';
    setTimeout(function() {
        heart.style.top = '25%';
    }, 500); // 1000 milliseconds = 1 second
}
function showHero(){
    hero.style.height = '100%'; 
    hero.classList.remove("hidden"); 
    hoveredpage.innerHTML = "hero"; 
   
    cursor.style.width = '120px'
    cursor.style.height = '120px'
    cursor.style.left = '60%'
    cursor.style.top = '70%'
    cursor.style.backgroundColor = 'var(--bgprimary)';
    cursor.style.color = 'white';
    cursorSpan.style.fontSize = '10rem';
    cv.top = '100%';
    hero.style.top = '0%'; 
}

function showCv() { 
    hoveredpage.innerHTML = "cv"; 
    hero.style.top = '-100%'
    cv.top = '0%';
    cursor.style.display = 'flex'
    cursor.style.left = '25%'
    cursor.style.top = '87%'

        //set cursor
        cursor.style.backgroundColor = 'white';
        cursor.style.color = 'var(--bgprimary)';


    
}


    
cursor.addEventListener("click",()=> { 
    switch(hoveredpage.innerHTML) {
        case "header":
            hideHeader()
            
            break; 
        case "hero": 
            hideHero()
            break;

        case "cv" : 
            hideCv();
            break;
        
    }
})

backtotop.addEventListener("click",() =>{  
    switch(hoveredpage.innerHTML) {
        case "hero": 
            showHeader()
            break;
        case "cv":  
            showHero(); 
            break; 
        case "works": 
            showCv();

    }
})


///home button animation 
homebutton.addEventListener("click",()=> { 
    showCv(); 
    showHero();
    showHeader(); 
})




musicbutton.addEventListener("click",()=> { 
    if(music_icon.innerHTML == 'music_note') { 
        audio.play();
        musiclabel.style.display = 'None';
        music_icon.innerHTML = "volume_up"
        music_popup.style.top = '0%'
        setTimeout(()=>{ 
            mpp.style.opacity = '0.2';
        }, 2000)
        
    }else if (music_icon.innerHTML == "volume_up"){  
        music_icon.innerHTML= 'volume_off'; 
        music_popup.style.top = '-10%'
        mpp.style.opacity = '1';
        audio.pause() 
    } else { 
        music_icon.innerHTML = 'volume_up'; 
        audio.play(); 
        music_popup.style.top = '0%'
        setTimeout(()=>{ 
            mpp.style.opacity = '0.2';
        }, 2000)
    }
     
}) 