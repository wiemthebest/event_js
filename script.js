//************************
// Fonctionnalité 1 :
//************************
// => Voir Fonctionnalité 1-bis


//************************
// Fonctionnalité 1-bis :
//************************

let footerEl = document.getElementsByTagName("footer")[0];
let count = 0;

footerEl.addEventListener("click",function(){
  count ++;
  console.log("clique numéro " + count);}
);

//************************
// Fonctionnalité 2:
//************************
let hamEl = document.getElementsByClassName("navbar-toggler")[0];

hamEl.addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");}
);


//************************
// Fonctionnalité 3:
//************************

let cardText1 = document.getElementsByClassName("card-text")[0];
let editButton1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

editButton1.addEventListener("click", function(){
  cardText1.style.color = "red" ;}
);


//************************
// Fonctionnalité 4 :
//************************

let cardText2 = document.getElementsByClassName("card-text")[1];
let editButton2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

editButton2.addEventListener("click", function(){
  if (cardText2.style.color === "green"){
    cardText2.style.color = "black" ;
  } else {
    cardText2.style.color = "green" ;
  }
}
);


//************************
// Fonctionnalité 5:
//************************

let navbarEl = document.getElementsByTagName("header")[0];
let cdnEl = document.getElementsByTagName("link")[0];
let bodyEl = document.getElementsByTagName("body")[0];

// doublie-click on navbar ==> no more CSS
navbarEl.addEventListener("dblclick",function(){
  cdnEl.disabled = true;}
);

// click anywhere ==> CSS is Back
bodyEl.addEventListener("click",function(){
  cdnEl.disabled = false;}
);


//************************
// Fonctionnalité 6 :
//************************

let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
let images = document.getElementsByClassName("card-img-top");
let cardTexts = document.getElementsByClassName("card-text");

let l = viewButtons.length

for (let count = 0; count <= l-1; count++){
  viewButtons[count].addEventListener("mouseover",function(){
    if (cardTexts[count].style.display === "none") {
    cardTexts[count].style.display = "block";
    } else {
    cardTexts[count].style.display = "none";
    }

    if (images[count].style.width === "20%") {
    images[count].style.width = "100%";
    } else {
    images[count].style.width = "20%";
    }
  }
  );
}



//************************
// Fonctionnalité 7 :
//************************

let rowEl = document.getElementsByClassName("row")[1];
let cards = document.getElementsByClassName("col-md-4");

let rightButton = document.getElementsByClassName("btn btn-secondary my-2")[0];

rightButton.addEventListener("click",function(){
  rowEl.insertBefore(cards[5], cards[0]);
}
);


//************************
// Fonctionnalité 8 :
//************************

let leftButton = document.getElementsByClassName("btn btn-primary my-2")[0];

leftButton.addEventListener("click",function(event){
  event.preventDefault();
}
);





//************************
// Fonctionnalité 9 :
//************************

