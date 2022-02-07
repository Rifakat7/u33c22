

let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getDishes(){

    try{

        let res = await fetch(url);
        let data  = await res.json();

        //console.log(data);
        appendDishes(data.meals);
    }
    catch(err){

        console.log(err);
    }
}
getDishes();

function addToCart(el){
    let cart = localStorage.getItem("cart");
if(!cart){
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
    //refreshCartCount(cart);

}
else{
    cart = JSON.parse(cart);
    //refreshCartCount(cart);
}
}

// function refreshCartCount(cart){
//     let cartCount = document.getElementById
// }

    
    function appendDishes(data){

 data.forEach(el => {

    let div = document.createElement('div');
    

    let img = document.createElement('img');

    img.src  = el.strMealThumb;

    let name = document.createElement('p');
    name.innerText = el.strMeal;

    let price = document.createElement('p');
    price.innerText = Math.round(Math.random()*500);

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.onclick = function(event){

        addToCart(el);
    }
    

    div.append(img,name,price,btn);

    document.getElementById("menu").append(div);

     
 });



}
