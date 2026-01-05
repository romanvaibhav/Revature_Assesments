// 1. Call Stack & Event Loop

console.log("Start");

setTimeout(() => {
  console.log("Async Task"); 
}, 0);

console.log("End");

// 2. Callback Queue

setTimeout(() => {
  console.log("Ad Loaded");
}, 0);

console.log("Main Content Loaded");


// 3. JSON.parse()

const apiResponse = '{"id":101,"name":"Laptop","price":50000}';
const product = JSON.parse(apiResponse);
console.log("Product Name:", product.name); // Laptop

// 4. JSON.stringify()

const user = { username: "admin", role: "manager" };
const userString = JSON.stringify(user);
console.log("JSON String:", userString);

// 5. Array forEach – Real-Time Example

const users = ["Alice", "Bob", "Charlie"];
users.forEach(user => {
  console.log(`Welcome, ${user}!`);
});

// 6. Array map – Price Calculation

const prices = [1000, 2000, 3000];
const discountedPrices = prices.map(price => price * 0.9); // 10% discount
console.log("Discounted Prices:", discountedPrices);

// 7. Array filter – Search Feature

const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
];

const availableProducts = products.filter(product => product.inStock);
console.log("Available Products:", availableProducts);

// 8. Array reduce – Cart Total

const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 2000 },
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log("Cart Total:", totalPrice);

// 9. Function Declaration vs Arrow Function

function calculateGST(price, gstPercent) {
  return price + (price * gstPercent) / 100;
}

const calculateGSTArrow = (price, gstPercent) => price + (price * gstPercent) / 100;

console.log("GST (Function):", calculateGST(1000, 18));
console.log("GST (Arrow):", calculateGSTArrow(1000, 18));


// 10. Closures – Secure Counter

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log("Counter:", counter.getCount()); // 2

// 11. Callback Function – Login Validation

function validateUser(user, callback) {
  if (user.username === "admin" && user.password === "1234") {
    callback(null, "Login Successful");
  } else {
    callback("Invalid credentials", null);
  }
}

const user1 = { username: "admin", password: "1234" };

validateUser(user1, (err, successMsg) => {
  if (err) {
    console.log(err);
  } else {
    console.log(successMsg);
  }
});

// 12. Callback Hell – Payment Processing

function validateUserCB(user, next) {
  console.log("Validating user...");
  setTimeout(() => next(), 1000);
}

function processPayment(next) {
  console.log("Processing payment...");
  setTimeout(() => next(), 1000);
}

function generateInvoice() {
  console.log("Invoice generated.");
}

validateUserCB({}, () => {
  processPayment(() => {
    generateInvoice();
  });
});


// 13. Promises & async/await

async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("API Data:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}


// 14. DOM Manipulation – Dynamic UI

document.getElementById("addBtn")?.addEventListener("click", () => {
  const li = document.createElement("li"); // create new <li>
  li.textContent = "New Item"; // set text
  document.getElementById("list")?.appendChild(li);
});

// 15. Event Listeners – Form Validation

document.getElementById("myForm")?.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const input = document.getElementById("input");
  if (!input.value) {
    document.getElementById("errorMsg").textContent = "Input is required!";
  } else {
    document.getElementById("errorMsg").textContent = "";
    console.log("Form submitted:", input.value);
  }
});
