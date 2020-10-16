<<<<<<< HEAD
  
=======
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb
const cartBtn = document.querySelector(".cart-btn");
const cartItems = document.querySelector(".cart-items");
const cartClose = document.querySelector(".close-cart");
const removeItem = document.querySelector(".remove-item");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const clearCart = document.querySelector(".clear-cart");
const cartTotal = document.querySelector(".cart-total");
const products = document.querySelector(".products");
const productsDOM = document.querySelector(".products-center");
const cartContent = document.querySelector(".cart-content");




let cart = [];

let buttonsDOM = [];




//Get Products from Json


class Products {

	getProducts(){
			const data = fetch ('Items.json').then ((result) => {
				return result.json(); 
				
			}).then ((data) => {
				let products = data.items
				 products.map(item => {
					const {title, price, image} = item.field;
					const {id} = item.sys;
					return {title, price, image, id};
				})

				return products

			}).catch ((error)=> {

				console.log(error);

			})

			return data
		
		}
	}

		

//Class for display products

class UI {

displayProducts(products) {
	
          
        let output = '';

		products.forEach(product => { 

		output += `
	
		<article class="product">
				<div class="img-container">
				<img src=${product.field.image} class="product-img">
					<button class="bag-btn" data-id=${product.sys.id}>
						<i class="fa fa-shopping-cart"></i>add to bag
					</button>
				</div>
				<h3>${product.field.title}</h3>
				<h4>$${product.field.price}</h4>
			</article> `;
});
	
	      productsDOM.innerHTML = output;


	}


          getBagButton(){

	      let buttons = [...document.querySelectorAll(".bag-btn")];

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
	           cart = JSON.parse(localStorage.getItem ("products"));    

	           buttonsDOM = buttons;    

<<<<<<< HEAD
	           buttons.forEach(button => {
		       let id =  button.dataset.id;

		       let  inCart = cart.find(item => item.sys.id === id);

		       if (inCart){
=======
=======
>>>>>>> 9185789b412988a591d25a94d98916828f6b72d4
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb
	           buttonsDOM = buttons;


	           //cart = JSON.parse(localStorage.getItem ("products"));    

               buttons.forEach(button => {
		       let id =  button.dataset.id;
		      


		       let  inCart = cart.find(item => item.sys.id === id);

		       if (inCart){
			

			  } button.addEventListener("click" , (event) => {

				event.target.innerText = "In Cart";
				event.target.disabled = true

				//Getting products from "products"

				let cartItem = {...Storage.getCartProducts(id), quantity : 1};
				//Save to the cart
			
				cart  = [...cart ,cartItem];

				//Save cart to local storage
				Storage.saveCart(cart);

				//set up the value
<<<<<<< HEAD
=======
<<<<<<< HEAD
				

=======
<<<<<<< HEAD
				
=======
				debugger;
>>>>>>> ecf5e57e43577205bc20224a43fb0a378499998c
>>>>>>> 9185789b412988a591d25a94d98916828f6b72d4
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb
				this.cartValues(cart);


				//Display cart
				this.displayCart(cartItem);

				//show cart
				this.showCart();

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 9185789b412988a591d25a94d98916828f6b72d4
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb
			     });
	
			});

         }  
                cartValues(cart){
                	let  cartItemTotal= 0;
                	let itemTotal = 0;
                	

                	cart.map(item => {
                		cartItemTotal += item.field.price * item.quantity;
                		itemTotal += item.quantity;
                	})

                	cartTotal.innerText = parseFloat(cartItemTotal.toFixed(2));
                	cartItems.innerText = itemTotal;
<<<<<<< HEAD

                }
=======
<<<<<<< HEAD
                }
                
                	
                	displayCart(item){

                		let div = document.createElement("div");
                		div.classList.add("cart-item");
=======
                	console.log(cartTotal ,  cartItems)
                	
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb
                
                	
                	displayCart(item){

                		let div = document.createElement("div");
                		div.classList.add("cart-item");

                		div.innerHTML = ` 
                	<img src=${item.field.image}>
  			       <div>
  				   <h4>${item.field.title}</h4>
  				   <h5>$${item.field.price}</h5>
  				   <span class="remove-item" data-id=${item.sys.id}>remove</span>
  			       </div>
  			        <div> 
  			        <i class="fa fa-chevron-up" ${item.sys.id}></i>
  			        <p class="item-amount" >${item.quantity}</p>
  			        <i class="fa fa-chevron-down" ${item.sys.id}></i>
  			        </div> 

  			        `
  			        cartContent.appendChild(div);
               }


  			  showCart(){
  			  	cartDOM.classList.add("showCart");
  			  	cartOverlay.classList.add("transparentBcg");
  			  }

  			  // Logit for clear  cart , remove items

  			  cartAPP(){
  			  	cart = Storage.checkCart();
  			  	this.cartValues(cart);
  			  	this.addDisplayCart(cart);

  			  	

  			  }

  			  // Displying & hide cart by cliking button

  			  addDisplayCart(cart){
  			  	cart.forEach(item => this.displayCart(item));
  			  	cartBtn.addEventListener("click" , () => {

<<<<<<< HEAD
  			  		cartDOM.classList.add("showCart");
  			  	cartOverlay.classList.add("transparentBcg");
  			  	})
  			 
  			  	cartClose.addEventListener("click" , () => {
  			  		cartDOM.classList.remove("showCart")
  			  	cartOverlay.classList.remove("transparentBcg")

  			  })

  			  }

  			  //Clear  Total cart

  			  cartLogic(){
  			  	clearCart.addEventListener("click" , () => {
  			  		this.clearTheCart();
  			

  			  	});

  			  
  			  	// Renove Single Iteam

  			  		cartContent.addEventListener("click" , event => {

  			  			if (event.target.classList.contains("remove-item")){

  			  				let remoItem  = event.target;

  			  				let id = remoItem.dataset.id;
  			  				cartContent.removeChild(remoItem.parentElement.parentElement);
  			  				this.removeItem(id);
 
=======
         	cartTotal.innerText = parseFloat(cartItemTotal.toFixed(2))
         	cartItems.innerText = itemTotal
         	debugger;
         	console.log(cartTotal , itemTotal)
>>>>>>> 9185789b412988a591d25a94d98916828f6b72d4

                		div.innerHTML = ` 

                	<img src=${item.field.image}>
  			       <div>
  				   <h4>${item.field.title}</h4>
  				   <h5>$${item.field.price}</h5>
  				   <span class="remove-item" data-id=${item.sys.id}>remove</span>
  			       </div>
  			        <div> 

  			        <i class="fa fa-chevron-up" ${item.sys.id}></i>
  			        <p class="item-amount" >${item.quantity}</p>
  			        <i class="fa fa-chevron-down" ${item.sys.id}></i>
  			        </div> 

<<<<<<< HEAD
  			        `
  			        cartContent.appendChild(div);
=======
}
>>>>>>> 9185789b412988a591d25a94d98916828f6b72d4
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb

  			  }

  			  			}

<<<<<<< HEAD
  			  			else  if (
  			  				event.target.classList.contains("fa-chevron-up")){

  			  				let amoutUp = event.target;
  			  			    let id = amoutUp.dataset.id;

  			  			    let temItem = cart.find(item => item.id === id);
  			  			    temItem.quantity = temItem.quantity + 1;
  			  			    Storage.saveCart(cart);
  			  			    this.cartValues(cart);
  			  			    amoutUp.nextElementSibling.innerText = temItem.quantity;
=======
  			  showCart(){

<<<<<<< HEAD
  			  	cartDOM.classList.add("showCart");
  			  	cartOverlay.classList.add("transparentBcg");
  			  }

=======
<<<<<<< HEAD
        
=======

         }
=======
>>>>>>> 08de2c457b094d4d9056712c557c96cadec6e1e5
>>>>>>> fd8044ec41c232e16d09decfadec1b86db750c1e
>>>>>>> 8cfab11b9836f2f4856631a02b8706884db7f4a9
>>>>>>> ecf5e57e43577205bc20224a43fb0a378499998c
>>>>>>> 9185789b412988a591d25a94d98916828f6b72d4
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb

  			  			}
  			  			else  if (
  			  				event.target.classList.contains("fa-chevron-down")){
  			  			let amoutDown = event.target;
  			  			let  id = amoutDown.dataset.id;
  			  			let temItem = cart.find(item => item.id === id);
  			  			temItem.quantity = temItem.quantity - 1;

  			  			if (temItem.quantity > 0){
  			  				Storage.saveCart(cart);
  			  				this.cartValues(cart);
  			  				amoutDown.previousElementSibling.innerText = temItem.quantity;


  			  			} 
  			  			 else{
  			  			 	cartContent.removeChild(amoutDown.parentElement.parentElement);
  			  			 	this.removeItem(id);
  			  			 	;
  			  			 }


  			  			}


  			  		});
  			  


<<<<<<< HEAD
  			  

  			  clearTheCart(){
  			  	let cartItem = cart.map(item => item.sys.id);
  			  	
  			  	cartItem.forEach(id => this.removeItem(id))
  			  	while(cartContent.children.length > 0){

  			  		cartContent.removeChild(cartContent.children[0]);
  			  	}


  			  }

  			  removeItem(id){
  			  
  			  	cart =  cart.filter(item => item.sys.id !== id);

  			  	this.cartValues(cart);
  			  	Storage.saveCart(cart);
  			  	let button = this.singleButton(id);
  			  	button.disabled  = false;
  			  	button.innerHTML = `<i class = "fa fa-shopping-cart"></i> add to cart`;

=======
  }
>>>>>>> 165b158e3c6d168df18cd30d63eb71dec17bcbdb

  			  	

  			  }

  			  singleButton(id){
  

  			  	return buttonsDOM.find(button => button.dataset.id == id);

  			  }



}

//local storage
class Storage {
	static saveProducts(products) {

		localStorage.setItem("products" , JSON.stringify(products));

  }

  static getCartProducts(id){

  	let producs = JSON.parse(localStorage.getItem ("products"));

  	return producs.find(produc => produc.sys.id === id);


  }

  static saveCart(cart){

  	localStorage.setItem("cart" , JSON.stringify(cart));

  }

  static checkCart(){

  return localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : []; 


  }

} 
//DOM function

		document.addEventListener("DOMContentLoaded" , () => {

		const goods = new Products();

		const ui = new UI();

		ui.cartAPP();


	    goods.getProducts().then (products => {

	    	ui.displayProducts(products);

	     	Storage.saveProducts(products);


	    }).then(() => {

	    	ui.getBagButton();
	    	ui.cartLogic();
	    });

});