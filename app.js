/* VARIABLES */
const father = document.getElementById("father");

/* FIRST ARRAY COLLECTION */

let items = [];

father.addEventListener("click", (e) => {
	if (e.target.classList.contains("shopping")) {
		// INFORMATION //
		let title =
			e.target.parentElement.parentElement.firstElementChild.nextElementSibling
				.textContent;
		let price =
			e.target.parentElement.parentElement.firstElementChild.nextElementSibling
				.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling
				.firstElementChild.textContent;
		let img = e.target.parentElement.parentElement.firstElementChild;

		// NEW OBJECT //

		let selectedItems = {img, title, price: parseInt(price)};
		console.log(selectedItems);

		const firstArray = Object.keys(selectedItems);
		console.log(firstArray);

		// ADDITION OF ALL PRICE TAGS //

		items = [...items, selectedItems];
		let result = items.reduce((sum, item) => {
			return (sum += item.price);
		}, 0);
		console.log(result);

		// CHANGES VISIBLE ON HTML //
		const messageItems = document.getElementById("messageItems");

		let newMessageItems = document.createElement("li");
		newMessageItems.textContent = firstArray;

		messageItems.appendChild(newMessageItems);

		//

		let totalItems = document.getElementById("totalItems");

		let newTotalItems = document.createElement("span");
		newTotalItems.textContent = result;

		totalItems.appendChild(newTotalItems);

		/*COUNTER ON THE CART*/
		counter.textContent = items.length;

		/*DISABLE BUTTON TO AVOID X2 PURCHASE*/
		let button = e.target;
		button.setAttribute("disabled", "");
	}
});
