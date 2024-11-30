"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'beanie';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = 'Nice Place, Nice Country, 0001';
var product = products_1.default.filter(function (product) { return product.name === productName; })[0];
if (String(product.preOrder) === 'true') {
    console.log('We will send you a message when your product is on its way.');
}
if (Number(product.price) > 25) {
    shipping = 0;
}
else {
    shipping = 5;
    console.log("We provide free shipping for this product.");
}
if (shippingAddress.match('001')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value), "!"));
}
greetTripled('Hiya', 5);
console.log(product);
console.log("Your receipt:\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
