const searchbarEl=document.querySelector(".search-bar-container")

const magnifierEL=document.querySelector(".magnifier")

magnifierEL.addEventListener("click",()=>{
    searchbarEl.classList.toggle("active");
    

})
