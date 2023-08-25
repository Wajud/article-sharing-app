const shareIcon = document.querySelector("img.icon");
const mobileLeft = document.querySelector("div.mobile-left");
const mobileShareLeft = document.querySelector("div.mobile-share-left");
const container = document.querySelector("div.flex-2");
const desktopShare = document.querySelector("div.desktop-share")

shareIcon.addEventListener("click", ()=>{
    if(window.innerWidth<700){
        mobileShareDisplay();
    }
   
    else{
        desktopShareDisplay();

    }

    setInterval(()=>{
        if(window.innerWidth<700){
            mobileShareDisplay();
            desktopShare.style.display="none"
        }
    
        else{
            desktopShareDisplay();
            mobileLeft.style.display="flex";
            mobileShareLeft.style.display="none"; 
            container.classList.remove("mobile", "dark-bg");
        }
    }, 5)

}
)


function mobileShareDisplay(){
    mobileLeft.style.display="none";
    container.classList.add("mobile", "dark-bg");
    mobileShareLeft.classList.remove("hide");
    mobileShareLeft.style.display="flex"; 
}

function desktopShareDisplay(){
    desktopShare.style.display="block";
}