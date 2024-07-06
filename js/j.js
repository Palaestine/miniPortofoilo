
/*******************************       section Portfolio (Filter)       *********************************************/ 

let mixerchoose = mixitup(".all", { // ديف المينو الكبيره
  selectors: {
      target: '.mhmd' // ديف كل ايتم
  },
  animation: {
      duration: 300
  }
});

/***********  default Items  ***********/

mixerchoose.filter(".cards");


/*************************************   properities of active link   ************************************************/

const activeLink = document.querySelectorAll(".active__link");

function activeProduct(){
    activeLink.forEach(l => l.classList.remove("activeLink"));
    this.classList.add("activeLink")  ;  
}
activeLink.forEach(l=>l.addEventListener("click" , activeProduct) );


/*=================== mood ========================================*/

const mood = document.getElementById("mood");

mood.addEventListener("click" , ()=>{
    mood.querySelector("i").classList.toggle("fa-sun")
    mood.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
    });

    window.addEventListener("load" , ()=>{
        if(document.body.classList.contains("dark"))
        {
            mood.querySelector("i").classList.add("fa-sun")
        }
        else
        {
            mood.querySelector("i").classList.add("fa-moon")
        }
    });
   

/*===========================================  Animation/delay  ===================================================*/

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }
    else{
      entry.target.classList.remove("show-items");
    }
  });

});


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));




