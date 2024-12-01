import products from './products';
const productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress:string = 'Nice Place, Nice Country, 0001';


const product = products.filter(product => product.name === productName)[0];

if (String(product.preOrder) === 'true') {
  console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) > 25){
  shipping = 0; 
} else {
  shipping = 5;
  console.log ("We provide free shipping for this product.")
}

if (shippingAddress.match('001')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;

total = Number(product.price) + taxTotal + shipping; 

/*
Greeting section
@param name str 
@returns text with name 
*/

function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greet('Varvara')

function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim(); // if not given params  
proclaim('ready!');

function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}

logGreeting("User!")


function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Hiya', 10);

//////////////////////////////////////////////////////

console.log(product);
console.log(`Your receipt:
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);

