document.querySelector(".menubtn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("-translate-y-full");
}); 
document.querySelector(".xbtn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("-translate-y-full");
}); 
  
console.log('JS ulandi')

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-n",
    prevEl: ".swiper-button-p",
  },
});