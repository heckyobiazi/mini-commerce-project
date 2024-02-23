
let cartIcon = document.querySelector("#cart-icons");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");



cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};



if (document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

function ready(){
 var reomveCartbuttons = document.getElementsByClassName("cart-remove");
 console.log(reomveCartbuttons);
 for(var i = 0; i < reomveCartbuttons.length; i++)
 {
    var button = reomveCartbuttons[i];
    button.addEventListener("click", removeCartitem);
 }

 var quantityInput = document.getElementsByClassName("cart-quantity");
 for( var i = 0; i < quantityInput.length; i++)
 {
    var input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
 }

 var addCart = document.getElementsByClassName("add-cart");
 for(var i = 0; i < addCart.length; i++)
 {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
 } 
}

document
.getElementsByClassName("btn-buy")[0]
.addEventListener("click", buyButtonClicked);

function buyButtonClicked()
{    
    altotal();
    alert("Your Order is ready to be placed, Please input your payment details");

}
 


function removeCartitem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    altotal();
}

function quantityChanged(event)
{
var input = event.target;
if(isNaN(input.value) || input.value <= 0)
{
    input.value = 1;
}
updatetotal();
}

function addCartClicked(event)
{
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
    
}

function addProductToCart(title, price, productImg)
{
    var cartshopboxs = document.createElement("div");
    cartshopboxs.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i = 0; i < cartItemsNames.length; i++)
    {
        if(cartItemsNames[i].innerText == title)
        {
        alert("You have already added this to cart");
    return;    
    }
}

var cartBoxContents = `
          <img src="${productImg}" alt="" class="cart-img">
          <div class="detailbox">
          <div class="cart-product-title">${title}</div>
          <div class="cart-price">${price}</div>
          <input type="number" value="1" class="cart-quantity">
          </div>
         <i class='bx bx-trash-alt cart-remove'></i> `;

         
          cartshopboxs.innerHTML = cartBoxContents;
        cartItems.append(cartshopboxs);
        cartshopboxs
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartitem);
        cartshopboxs
         .getElementsByClassName("cart-quantity")[0]
         .addEventListener("change", quantityChanged);
}



function handleSelectionChange() {
    var propertydrops = document.getElementsByClassName("propertydrop");

    for(var i = 0; i < propertydrops.length; i++) {
        var select = propertydrops[i].querySelector("select");
        var selectedValue = select.value;

        // check if the current propertydrop's select element has the selected value you're interested in
        if(selectedValue === "1") {
            // perform any logic you need for this specific propertydrop
           var f =  5;
            var price = document.getElementsByClassName("price")[i];
            var pri = parseFloat(price.innerText.replace("$", ""));
            var pritotal = pri + f;
            price.innerText = "$" + pritotal;

            var propertyImg = document.getElementsByClassName("property-img")[i];
            propertyImg.src = "fannta0.png";

            var proName = document.getElementsByClassName("pro-name")[i];
            proName.innerText = "Fanta";
        }
        if(selectedValue === "2") {
            var c =  8;
            // perform any logic you need for this specific propertydrop
            var price = document.getElementsByClassName("price")[i];
            var pri = parseFloat(price.innerText.replace("$", ""));
            var pritotal = pri + c;
            price.innerText = "$" + pritotal;

            var propertyImg = document.getElementsByClassName("property-img")[i];
            propertyImg.src = "coca0.png";

            var proName = document.getElementsByClassName("pro-name")[i];
            proName.innerText = "Coke";
        }
        if(selectedValue === "3") {
            var p =  6;
            // perform any logic you need for this specific propertydrop
            var price = document.getElementsByClassName("price")[i];
            var pri = parseFloat(price.innerText.replace("$", ""));
            var pritotal = pri + p;
            price.innerText = "$" + pritotal;

            var propertyImg = document.getElementsByClassName("property-img")[i];
            propertyImg.src = "spritee.png";

            var proName = document.getElementsByClassName("pro-name")[i];
            proName.innerText = "sprite";
        }
    }
}


function updatetotal()
{
    var cartContent  = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++)
    {
        var cartbox = cartBoxes[i];
        var priceElement = cartbox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        total = total + price * quantity;
document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}
var total = 0;
function altotal()
{
    var cartContent  = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    
    for(var i = 0; i < cartBoxes.length; i++)
    {
        var cartbox = cartBoxes[i];
        var priceElement = cartbox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        total = total + price * quantity;
        var   ototal = 0;
        if(total < 1000)
        {
         var   ototal = total + (total * 0.1);
         ototal = Math.round(ototal * 100) / 100;
         document.getElementsByClassName("alltotal-price")[0].innerText = "$" + ototal;
        }
        else{
                ototal =  total + 0;
                ototal = Math.round(ototal * 100) / 100;
document.getElementsByClassName("alltotal-price")[0].innerText = "$" + ototal;
        }
    }
    

}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function removeall()
{
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild);
    }
    document.getElementsByClassName("alltotal-price")[0].innerText = "$"+ 0;
    document.getElementsByClassName("total-price")[0].innerText = "$"+ 0;
    updatetotal();
    altotal();
   
    }


function paid()
{
    var x = document.getElementsByClassName("alltotal-price")[0].innerText;
     
    var bar = confirm("your total cost is" +  x + ". Do you wish to proceed the payment");
    if(bar == true)
    {
        alert("Thank you for shopping with us");
    }
    else{
   alert("Your application has been withdrawn. ");
    
    }
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild);
    }
    document.getElementsByClassName("alltotal-price")[0].innerText = "$"+ 0;
    document.getElementsByClassName("total-price")[0].innerText = "$"+ 0;
    updatetotal();
    altotal();
    
}






