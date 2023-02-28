const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

const openModal=()=>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

    console.log('clicked' )
}
const closeModal=()=>{
    modal.classList.remove("active");
    modal.classList.remove("overlayactive");
    console.log('clicked' )
}


// const wrapper=document.getElementsByClassName("wrapper");
// console.log(wrapper);