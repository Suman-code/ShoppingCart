const button = document.querySelector(".cart-btn");
const cartItems = document.querySelector(".cart-items");
const cartClose = document.querySelector(".close-cart");
const removeItem = document.querySelector(".remove-item");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const clearCart = document.querySelector(".clear-cart");
const clearTotal = document.querySelector(".cart-total");
const products = document.querySelector(".products");
const productsDOM = document.querySelector(".products-center");
const cartContent = document.querySelector(".cart-cotent");



let cart = [];




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

debugger;
class UI {

displayProducts(products) {
	
          
        let output = '';

		products.forEach(product =>{ 

		output += `
		<article class="product">
				<div class="img-container">
					
					<img src=${product.image} alt= "product" class="product-img">
					<button class="bag-btn" data-id=${product.id}>
						<i class="fas fa-shopping-cart"></i>add to bag
					</button>
				</div>
				<h3>${product.title}</h3>
				<h4>$${product.price}</h4>

			</article> `;

		});
	

	productsDOM.innerHTML = output;



	
	}

}



//local storage

class Storage{} 


//DOM 

		document.addEventListener("DOMContentLoaded" , () => {

		const goods = new Products();

		const ui = new UI();


	    goods.getProducts().then (products => ui.displayProducts(products));

});