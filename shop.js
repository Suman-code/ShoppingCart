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
			fetch ('Items.json').then ((result) => {
				let data = result.json();
				let products = data.items;
				products = products.map(item => {
				const {title, price, image} = item.filed;
			    const {id} = item.sys

				return {title, price, image,id}

				})

				return products;
				
                }).then ( (data) => {
				console.log(data);

			}) 
			    .catch ( (error) => {
				console.log(error);

			}); 

		}
	}

		

//local storage
class storage{}


		document.addEventListener("DOMContentOnloaded" , () => {

		const products = new Products();

		products.getProducts().then (products => console.log (products));


		});
