// js for slider

var slider_index= 1;

var image_slider = document.querySelector(".images");
var interval;
var dashed=document.getElementsByClassName("dashed");

//change_slider_function
var change= function(){
    interval =setInterval(function(){
    slider_index++;
    if(slider_index>3) {
    slider_index =1;
    var dashed=document.getElementById("3");
    dashed.style.backgroundColor="gainsboro" ;
    }
   image_slider.setAttribute("src",`./images/${slider_index}.jpg` );
   var dashhed = document.getElementById(""+slider_index+"");

   dashhed.style.backgroundColor="gray";

   if(slider_index>1){
    var bubble_slider_berfore = document.getElementById(""+slider_index-1+"");
    bubble_slider_berfore.style.backgroundColor="gainsboro" ;  
   }
    },1500);
}   
change();

 ///next of slider
function next(){
      slider_index++;
      if(slider_index>3) {
      slider_index =1;
      var dashed=document.getElementById("3");
      dashed.style.backgroundColor="gainsboro" ;
      }
     image_slider.setAttribute("src",`./images/${slider_index}.jpg` );
     var dashhed = document.getElementById(""+slider_index+"");
  
     dashhed.style.backgroundColor="gray";
  
     if(slider_index>1){
      var bubble_slider_berfore = document.getElementById(""+slider_index-1+"");
      bubble_slider_berfore.style.backgroundColor="gainsboro" ;  
     }
}
 ///previous of  slider
function previous(){
    slider_index--;
    if(slider_index<1) {
    slider_index =3;
    var dashed=document.getElementById("1");
    dashed.style.backgroundColor="gainsboro" ;
    }
    var x=slider_index+1;
   image_slider.setAttribute("src",`./images/${slider_index}.jpg` );
   var dashhed = document.getElementById(""+slider_index+"");
   var dashed_after=document.getElementById(""+x+"");

   dashhed.style.backgroundColor="gray";
  //  dashed_after.style.backgroundColor="gainsboro";
     
}

//go to top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

//click on categories dispaly all

var cards=document.getElementsByClassName("cards");
var categories=document.getElementById("cate");
categories.addEventListener('click',function(){
  first_type.style.display="flex";
  makup.style.display="flex";
  accessories.style.display="flex";
  shoes.style.display="flex";

});

var clothes=document.getElementById("clothes");
var accessoriess=document.getElementById("accessories");
var shoess=document.getElementById("shoes");
var makupp=document.getElementById("makup");
console.log(clothes);
var makup=document.getElementsByClassName("third")[0];
console.log(makup);
var accessories=document.getElementsByClassName("second")[0];
console.log(accessories);
var shoes=document.getElementsByClassName("fourth")[0];
console.log(shoes);
var first_type=document.getElementsByClassName("first")[0];
console.log(first_type);
clothes.addEventListener("click",function(){
  
  first_type.style.display="flex";
  makup.style.display="none";
  accessories.style.display="none";
  shoes.style.display="none";


});
shoess.addEventListener("click",function(){
  
  first_type.style.display="none";
  makup.style.display="none";
  accessories.style.display="none";
  shoes.style.display="flex";


});
makupp.addEventListener("click",function(){
  
  first_type.style.display="none";
  makup.style.display="flex";
  accessories.style.display="none";
  shoes.style.display="none";


});
accessoriess.addEventListener("click",function(){
  
  first_type.style.display="none";
  makup.style.display="none";
  accessories.style.display="flex";
  shoes.style.display="none";


});



/////////add to cart

var counter=0;
function addToCart(event) {
  //get details from product added
  var button = event.target;
  var product = button.parentElement;
  var imageSrc = product.getElementsByClassName('pho')[0].src;
  var product_name = product.getElementsByClassName('product_name')[0].innerText;
  
//
document.getElementById("temoli").style.display="none";

///get data from cart
var li= document.createElement("li")
var ol= document.querySelector('.list_of_product')
var item=
            `
            <button class="btn_remove" onclick="deleteFromCart(this)">Delete</button>
             
             <p class='product_name'>${product_name}</p>
             <img src="${imageSrc}" alt="">`;
    li.innerHTML =item;
    ol.appendChild(li);
    
    counter++;
    document.getElementById("count").style.display="inline-block";
    document.getElementById("count").innerHTML=counter;
        }

///////// اadd element to cart , increase counter
var addToCartButtons = document.querySelectorAll(".addCatr") ;
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCart)
}
///////////showcart and hide
var list_of_product = document.querySelector(".list_of_product");
document.querySelector("#cart_img").addEventListener("mouseenter", function(){
 
  list_of_product.style.display="block";
 });
 list_of_product.addEventListener("mouseenter", function(){
    //
  list_of_product.style.display="block";
 });
 list_of_product.addEventListener("mouseleave", function(){
  list_of_product.style.display="none";
 });
 
 document.querySelector("#cart_img").addEventListener("mouseleave", function(){
  list_of_product.style.display="none";
  });

  ////delete from cart
function deleteFromCart() {
      //get details about product that added
      var remove = event.target;
      remove.parentElement.remove();
      counter--;
      if(counter<=0){
        document.getElementById("count").style.display="none";
        document.getElementById("temoli").style.display="flex";
      }else{
        document.querySelector("#count").innerHTML=`${counter}`
        document.getElementById("count").style.display="inline-block";
      }
  }
///////// remove element from cart and decrease counter by 1
var deleteproduct = document.querySelectorAll(".btn_remove");
for (var i = 0; i < deleteproduct.length; i++) {
    var btn_remove = deleteproduct[i];
    btn_remove.addEventListener('click',deleteFromCart);
}








