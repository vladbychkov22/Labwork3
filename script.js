// Alert dialog
alert("Hello, world!");

// Prompt dialog
let name = prompt("Please enter your name");
alert(`Hello, ${name}!`);

// Confirm dialog
let result = confirm("Are you sure you want to delete this item?");
if (result) {
  alert("Item deleted.");
} else {
  alert("Deletion cancelled.");
}