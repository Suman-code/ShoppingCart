const button = document.querySelector(".cart-btn");
const cartItems = document.querySelector(".cart-items");
const cartClose = document.querySelector(".close-cart");
const removeItem = document.querySelector(".remove-item");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const clearCart = document.querySelector(".clear-cart");
const clearTotal = document.querySelector(".cart-total");
const products = document.querySelector(".products");
const productsCenter = document.querySelector(".products-center");
const cartContent = document.querySelector(".cart-cotent");

const productsCenter = document.querySelector(".products-center");


let cart = [];


class UI {
	
}

//display produc

	
			fetch ('shop.json').then ((result) => {
				return result.json();
			}).then ((data) => {
				console.log(data);

			}).catch ( (err) =>{
				console.log(err);


			});
