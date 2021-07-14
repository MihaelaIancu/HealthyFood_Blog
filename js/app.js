
function loadFragments() {
    document.querySelector("#header").innerHTML = '<object type="text/html" data="fragments/header.html" ></object>';
    document.querySelector("#footer").innerHTML = '<object type="text/html" data="fragments/footer.html" ></object>';
}

let arrViews = document.querySelectorAll(".views");
for (let i in arrViews) {
    arrViews[i].innerHTML = Math.floor(Math.random() * 10) + " view(s)";
}

let arrComms = document.querySelectorAll(".comms");
for (let i in arrComms) {
    arrComms[i].innerHTML = Math.floor(Math.random() * 10) + " comment(s)";
}

let arrBtn = document.querySelectorAll(".heart");

for (let i = 0; i < arrBtn.length; i++) {
    let item = arrBtn[i];
    item.addEventListener("click", function () {
        item.classList.toggle("is-active");
    });
}

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".container").style.padding = "0.25em 0";
    document.querySelector("#logo").style.fontSize = "25px";
  } else {
    document.querySelector(".container").style.padding = "1em 0";
    document.querySelector("#logo").style.fontSize = "35px";
  }
}

let imgArr = document.querySelectorAll(".photo img");
for(let i in imgArr) {
    imgArr[i].src="https://unsplash.com/photos/Qhc-gEVgkBA/download?force=true&w=640";
}

let linksArr = document.querySelectorAll(".containerItem a");
for (let i = 1; i < linksArr.length; i++) {
    linksArr[i].addEventListener("click", function() {
      let current = document.querySelectorAll(".active");
    //   console.log(current);
  
      if (current.length > 0) {
        // current[0].className = current[0].className.replace(" active", "");
        current[0].classList.remove("active");
      } 

    this.className += " active";
      
  
    });
  }


// for(let i in arrBtn) {
//     arrBtn[i].addEventListener("click", function() {
//         this.classList.toggle("is-active");
//     });
// }

// const input = document.querySelector("#search-input");
// const searchBtn = document.querySelector("#search-btn");

// const expand = () => {
//   searchBtn.classList.toggle("close");
//   input.classList.toggle("square");
// };

// searchBtn.addEventListener("click", expand);

// window.addEventListener("load", (event) => {
//     loadFragments();
// });