
var myarr = [];

function addOption()
{
    
    var optionData = {
        Option1: {
            "id":"option1",
            "photo":"jollof_rice-removebg-preview.png",
            "content":"Jollof Rice ",
            "count":0,
            "price": 40
        },
        Option2: {
            "id":"option2",
            "photo":"fried_rice-removebg-preview.png",
            "content":"fried Rice ",
            "count":0,
            "price": 40
        },
        Option3: {
            "id":"option3",
            "photo":"pilov-removebg-preview.png",
            "content":"pilov Rice ",
            "count":0,
            "price": 40
        },
        Option4: {
            "id":"option4",
            "photo":"rs-removebg-preview.png",
            "content":"stew Rice ",
            "count":0,
            "price": 40
        },
        Option5: {
            "id":"option5",
            "photo":"friedchicken3-removebg-preview.png",
            "content":"chicken ",
            "count":0,
            "price": 20
        },
        Option6: {
            "id":"option6",
            "photo":"beef-removebg-preview.png",
            "content":"beef ",
            "count":0,
            "price": 20
        },
        Option7: {
            "id":"option7",
            "photo":"gizzard2.jfif",
            "content":"gizzard ",
            "count":0,
            "price": 15
        },
        Option8: {
            "id":"option8",
            "photo":"plantain-removebg-preview.png",
            "content":"plantain ",
            "count":0,
            "price": 10
        }
    
        };

   
        var optionValue = document.getElementById("options").value;
          
          var option = "Option" + optionValue;
        var contentdata = optionData[option].content;
        var img = document.createElement("img");
        img.src = optionData[option]['photo']; 

     if (myarr.length === 0)
         {
            myarr[0] = optionValue;
            alert("successfully added to the table");
          } 
          else 
          {
            var isAlreadyAdded = false;
            for (var a = 0; a < myarr.length; a++) 
            {
              if (optionValue === myarr[a]) {
                isAlreadyAdded = true;
                break;
              }
            }
            if (isAlreadyAdded) {
              alert("ALREADY ADDED TO THE TABLE");
              return;
            } 
            else 
            {
              myarr.push(optionValue);
              alert("successfully added to the table");
            }
          }

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    

    var pricedata = optionData[option].price;
    var contentdata = optionData[option]['content'];
    cell2.innerHTML = contentdata + "$" + pricedata;
    cell3.innerHTML =  "$" + pricedata;

       
        cell1.appendChild(img);
   
    var para = document.createElement("p");
    cell2.appendChild(para);
    var select = document.createElement("select");
    select.name = "quantity";
    select.id = "quantity";
    for(var i = 1; i <=10; i++)
    {
        var optiono = document.createElement("option");
        optiono.value = i;
        optiono.text = i;
        select.appendChild(optiono);
    }
    cell2.appendChild(select);
    select.addEventListener("change",function()
    {
         var quantity = this.value;
    cell3.innerHTML = "$" + (pricedata*quantity);
}
)};



function TotalCalculation()
{
    var table = document.getElementById("table");
var total = 0;

for (var j = 1; j < table.rows.length - 3; j++) 
{
  var cellValue = table.rows[j].cells[2].innerHTML; // Assuming the target cell is the third cell (index 2)
  var number = parseInt(cellValue.replace("$", ""), 10);
  total += number;
}

    
    alert("price is $" + total.toFixed(2));
    document.getElementById("totalprice").innerHTML = "$" + total.toFixed(2);
   
    
    var vat = total * 0.15;
    alert("vat price is $" + vat.toFixed(2));
    document.getElementById("vatprice").innerHTML = "$" + vat.toFixed(2);

    var grand = total + vat;
    alert("Grand price is $" + grand.toFixed(2));
    document.getElementById("grandprice").innerHTML = "$" + grand.toFixed(2);
    };


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
    cnt = 0;
    document.getElementsByClassName("itemnum")[0].innerText = cnt;
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
paycarde.classList.remove("active");
    carte.classList.remove("active");
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



