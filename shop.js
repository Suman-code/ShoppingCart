const button = document.querySelector(".cart-btn");
const cartItems = document.querySelector(".cart-items");
const cartClose = document.querySelector(".close-cart");
const removeItem = document.querySelector(".remove-item");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const clearCart = document.querySelector(".clear-cart");
const cartTotal = document.querySelector(".cart-total");
const products = document.querySelector(".products");
const productsDOM = document.querySelector(".products-center");
const cartContent = document.querySelector(".cart-cotent");




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

	           buttonsDOM = buttons;


	           cart = JSON.parse(localStorage.getItem ("products"));    

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
				
				cart  = [...cart , cartItem];

				//Save cart to local storage
				Storage.saveCart(cart);

				//set up the value
				debugger;
				this.cartValues(cart);


				//Display cart

			     });
	
			});

         }  
                cartValues(cart){
                	let  cartItemTotal= 0;
                	let itemTotal = 0;
                	debugger;

                	cart.map(item => {
                		cartItemTotal += item.field.price * item.quantity;
                		itemTotal += item.quantity;
                	})

                	cartTotal.innerText = parseFloat(cartItemTotal.toFixed(2));
                	cartItems.innerText = itemTotal;
                	console.log(cartTotal ,  cartItems)
                	
                


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

} 


//DOM function

		document.addEventListener("DOMContentLoaded" , () => {

		const goods = new Products();

		const ui = new UI();


	    goods.getProducts().then (products => {

	    	ui.displayProducts(products);

	    	Storage.saveProducts(products);


	    }).then(() => {

	    	ui.getBagButton();
	    });

});