// search mobile
const inputSearch = document.querySelector(".input"); 
const btnSearch = document.querySelector(".icon");
const banner = document.querySelector(".banner");

btnSearch.addEventListener('click', function(e){
  inputSearch.classList.toggle("active");
})
banner.addEventListener('click', function(){
  inputSearch.classList.remove('active');
})

// cart for products

const product = [
  {
    id: 0,
    image: 'assets/images/product-img-1.webp',
    title: 'z flip foldable mobile',
    price: 120,
  },
  {
    id: 1,
    image: 'assets/images/product-img-2.webp',
    title: 'Air pods Pro',
    price: 60,
  },
  {
    id: 2,
    image: 'assets/images/product-img-3.webp',
    title: 'Air pods Pro',
    price: 60,
  },
  {
    id: 3,
    image: 'assets/images/product-img-3.webp',
    title: 'Air pods Pro',
    price: 60,
  }
];

const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i = 0;
document.getElementById('productList').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2 class='price'>$ ${price}.00</h2>`+
    `<button class='button' onclick='addtocart(${i++})'>Add to cart</button>`+
    `</div>
    </div>`
    
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}

function delElement(a){
  cart.splice(a, 1);
  displaycart();
}
function delElementArray(a){
  cart.splice(a, 1);
  displaycart();
}

// add to cart funcation
function displaycart(a){
  let j = 0, total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if(cart.length==0){
    document.getElementById('cartItem').innerHTML = "your cart is empty";
    document.getElementById("total").innerHTML = "$ "+0+".00";
  }else{
    document.getElementById('cartItem').innerHTML = cart.map((items)=>
    {
      var {image, title, price} = items;
      total = total+price;
      document.getElementById("total").innerHTML = "$"+total;
      return(
        `<div class='cart-item'>
        <div class='row-img'>
          <img class='rowimg' src=${image}>
        </div>
        <p style='font-size:12px;'>${title}</p>
        <h2 style='font-size: 15px;'>${price}</h2>`+
        "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
      )
    }).join('');
  }
}

// Cart toggle 
const cartIcon = document.getElementById('cart');
const sideCart = document.getElementById('sideCart');

cartIcon.addEventListener('click', function(){
  sideCart.classList.toggle('active');
});