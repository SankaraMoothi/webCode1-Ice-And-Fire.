
/* Creating a h1 element and setting the class and innerText. */

const header=document.createElement("h1");
header.setAttribute("class","header text-center")
header.innerText="Ice And Fire"

/* Creating a h4 element and setting the class and innerText. */

const Discription=document.createElement("h4");
Discription.setAttribute("class","discription  text-center");
Discription.innerText="This Page About Information Of George R.R.Martin Books"

/* Creating a div element and setting the class attribute to container. */

const container= document.createElement("div");
container.setAttribute("class","container");

/* This is creating a div element and setting the class attribute to container-fluid d-flex
justify-content-around bg-secondary bg-gradient and id attribute to main1. */

const div1=document.createElement("div");
div1.setAttribute("class","container-fluid d-flex justify-content-around bg-secondary bg-gradient ");
div1.setAttribute("id","main1");

/* Creating a select element and setting the id attribute to search. */

var search=document.createElement("select");
search.setAttribute("id","search");

/* This is creating a option element and setting the innerText attribute to Choose Your Book. */

const firstOp=document.createElement("option");
firstOp.innerText="Choose Your Book";
search.append(firstOp);

/* This is creating a button element and setting the class attribute to btn btn-primary and textContent
attribute to search. */

const button=document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.textContent="search";

/* This is creating a button element and setting the class attribute to btn btn-danger and id attribute
to reset and textContent attribute to Reset. */

const reset=document.createElement("button");
reset.setAttribute("class","btn btn-danger")
reset.setAttribute("id","reset")
reset.textContent="Reset";

/* This is creating a button element and setting the class attribute to btn btn-primary and textContent
attribute to About. */

const button2=document.createElement("button");
button2.setAttribute("class","btn btn-primary");
button2.textContent="About";

/* Appending the search,button,reset,button2 to div1. */

div1.append(search,button,reset,button2);

/* This is creating a div element and setting the class attribute to mt-2 row and id attribute to
bodys. */

var div2=document.createElement("div");
div2.setAttribute("class","mt-2 row");
div2.setAttribute("id","bodys")

/* This is creating a div element and setting the class attribute to row container m-auto mt-3 main2. */

var div3=document.createElement("div");
div3.setAttribute("class","row container m-auto mt-3 main2");

/* This is creating a div element and setting the class attribute to row container m-auto mt-3 main2. */

var div4=document.createElement("div");
div4.setAttribute("class","row container m-auto mt-3 main2");

/* This is appending the header,Discription,div1,div2 to container and appending the container to body. */

container.append(header,Discription,div1,div2);
document.body.append(container);


/**
 * It fetches data from the API, then creates a card for each book, and adds it to the DOM.
 */

/*Basic Display Section*/

async function foo(){
    let res=await fetch("https://www.anapioficeandfire.com/api/books");
    let data=await res.json();
    
    var names=[];
    
    try{data.forEach(element => {
        names.push(element.name);
        const carousel=document.createElement("div");
        carousel.setAttribute("id","card")
        carousel.setAttribute("class","carrs col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 m-auto d-flex justify-content-around")
        carousel.innerHTML=`<div class="card " style="width: 18rem;">
        <div id="img2" class="m-auto"><img src="https://i.insider.com/62fd221cec781d0018687526?width=1000&format=jpeg&auto=webp" style="width:18rem";></div>
        <div class="card-body" >
        <h3 class="card-title text-center">${element.name}</h3>
        <p class="card-text mt-5">isbn : ${element.isbn}</p>
        <p class="card-text">authors : ${element.authors}</p>
        <p class="card-text">NumberOfPage : ${element.numberOfPages}</p>
        <p class="card-text">Publisher : ${element.publisher}</p>
        <p class="card-text">released date: ${element.released}</p>
        </div>
    
        </div>`   
        div2.append(carousel)
});
for (const val of names){
    var option = document.createElement("option");
    option.setAttribute("id","optionValue")
    option.value = val;
    option.innerText=val;
    search.append(option);
}
}
catch{
    console.log("Somthing went wrong")
}
}
foo()


/* This is the code for the search button. When the user clicks on the search button, it will show an
alert message. Then it will hide the carousel and the main div. Then it will get the value of the
selected option. Then it will fetch the data from the API. Then it will loop through the data and
check if the name of the book is equal to the selected option. If it is equal, then it will create a
card and add it to the DOM. Then it will loop through the characters and fetch the data of the
characters. Then it will create a paragraph and add it to the card. */

/*search Section*/

button.addEventListener("click",async()=>{
    function showAlert() {
        alert ("Hello There! Dont Forget To use Reset For Each Search");
      }showAlert();
    
    var carousels=document.getElementById("bodys");
    carousels.style.display="none" ;

    var divmain=document.getElementById("main1");
    divmain.style.display="none" ;

    
    
    const inputs=document.getElementById("search").value;
    let res=await fetch("https://www.anapioficeandfire.com/api/books");
    let data=await res.json();
    
    try{data.forEach(elements => {
        if(elements.name==inputs){
            const carousel1=document.createElement("div");
            carousel1.setAttribute("id","cards")
            carousel1.setAttribute("class","carrs col-6 mt-4 mb-4 d-flex justify-content-around")
            carousel1.innerHTML=`<div class="card " style="width:30rem;">
            <div id="img2" ><img src="https://i.insider.com/62fd221cec781d0018687526?width=1000&format=jpeg&auto=webp" style="width:25rem";></div>
            <div class="card-body text-rigth" id="gg">
            <h2 class="card-title">${elements.name}</h2>
            <p class="card-text">isbn : ${elements.isbn}</p>
            <p class="card-text">authors :<mark style="background-color:yellow"> ${elements.authors}</mark></p>
            <p class="card-text">NumberOfPage : ${elements.numberOfPages}</p>
            <p class="card-text">Publisher :<mark style="background-color:yellow">  ${elements.publisher}</mark></p>
            <p class="card-text">released date: ${elements.released}</p>
            </div>
            <p><strong><mark style="background-color:yellow"> Use Reset For Ever New Search For Better Experience</mark></strong></p>
            </div>`   
            div3.append(carousel1); 
            document.body.append(div3) 
            elements.characters.slice(5,10).forEach(
                async (chars)=>{
                    var res1=await fetch(chars);
                    var data1=await res1.json();
                    var card=document.getElementById("gg")
                    var p=document.createElement("p");
                    p.setAttribute("class","card-text");
                    p.innerText=`Characters: ${data1.name}`;
                    card.append(p);
                });
            }
    });
    reset.addEventListener("click",()=>{
    location.reload();
    });
}
catch{
    console.log("Somthing went wrong")
}
})


/* This is the code for the About button. When the user clicks on the About button, it will hide the
carousel and the main div. Then it will create a div and add it to the DOM. Then it will create a
paragraph and add it to the div. Then it will add the div to the DOM. Then it will add an event
listener to the reset button. When the user clicks on the reset button, it will reload the page. */

/*About Section*/

button2.addEventListener("click",()=>{
    var carousels=document.getElementById("bodys");
   

    reset.addEventListener("click",()=>{
        location.reload();
    });
    
    carousels.style.display="none" ;
    const para=document.createElement("div");
    para.innerHTML=`<h5>⭐Hay Guys This Page About Displaying Histrionical Book Its Shows Name ,isbn ,Number Of Page,Publisher,Released Date,And Min Character
    </h5>
    <h5>⭐⭐<mark style="background-color:yellow"> Characters Only Show After Searching Specific Book </mark></h5>
    <h5>⭐Just Select The Fav Book And See The Datails</h5>
    <h5>⭐After Ever Search Use Reset For Better Experience<h5>
    <h5>⭐This Api Only Contain Few Books And Many defect in Api<h5>
    <h5>⭐We Can Not Manipulate The Date Us Per Our Wise<h5>
    <h3>Pleace Use Reset After Ever Search For Best Experience</h3>`
    div4.append(para); 
    document.body.append(div4) 

})





