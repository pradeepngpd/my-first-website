console.log("Hello from JavaScript to Console Read Page!");
let name = "Pradeep";
let age = 41;
let isLearningToCode = true;

console.log(name);
console.log(age);
console.log(isLearningToCode);

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x * (y/2));

let greeting = "Hello, " + name + " hope you are doing well" + "!";
console.log(greeting);

function greet(personName) {
    console.log("Hello, " + personName + "!");
}
greet("Pradeep");

function test(javascript) {
    console.log("javascript console text reading text!")
}
test("javascript");

function add(a, b) {
    return a + b;
}
let sum = add(5, 7);
console.log(sum);

function subtract(a, b) {
    return a - b;
}
let difference = subtract(1450, 1345)
console.log("1450-135=" + difference);

let number = 10;
if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}

function oddeven(a) {
    if (a % 2 === 0) {
        return a + " is even"
    } else {
        return a + " is odd"
    }
}
let oddevenfinder = oddeven(155);
console.log(oddevenfinder);


let button = document.getElementById("myButton");
let message = document.getElementById("message");
button.addEventListener("click", function() {
    message.textContent = "Surprise!, my first user interactive button";
    message.style.color = "red";
});


let testButton = document.getElementById("testButton");
testButton.addEventListener("click", function() {
    message.textContent = "Test click button code wrote on my own"
    message.style.color = "blue"
});

let learning = ["Learning HTML listed below ", "HTML", "CSS", "Java Script"];
console.log("Total words count is " + learning.length);
for (let i=0; i<learning.length; i++) {
    console.log(learning[i]);
}

let savedTasks = localStorage.getItem("myTasks");
let tasks = savedTasks ? JSON.parse(savedTasks) : [];

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value;
    if (taskText === "") {
        return;
    }
    tasks.push(taskText);
    taskInput.value = "";
    showTasks();
    saveTasks();
}
function showTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function() {
        tasks.splice(i, 1);
        showTasks();
        saveTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
}
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}
addTaskBtn.addEventListener("click", addTask);
showTasks();

let cityInput = document.getElementById("cityInput");
let getWeatherBtn = document.getElementById("getWeatherBtn");
let weatherResult = document.getElementById("weatherResult");
getWeatherBtn.addEventListener("click", getWeather);
async function getWeather() {
    let city = cityInput.value;

    if (city === "") {
        return;
    }

    weatherResult.textContent = "Loading...";

    let geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=" + city;
    let geoResponse = await fetch(geoUrl);
    let geoData = await geoResponse.json();

    if (!geoData.results) {
        weatherResult.textContent = "City not found.";
        return;
    }

    let lat = geoData.results[0].latitude;
    let lon = geoData.results[0].longitude;
    let cityName = geoData.results[0].name;

    console.log("lat:", lat, "lon", lon);

    let weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true";
    let weatherResponse = await fetch(weatherUrl);
    let weatherData = await weatherResponse.json();

    console.log(weatherData);

    let temp = weatherData.current_weather.temperature;
    weatherResult.textContent = cityName + ": " + temp + "°C";
}

let savedItems = localStorage.getItem("myItems");
let items = savedItems ? JSON.parse(savedItems) : [];

let shoppingListElement = document.getElementById("shoppingList");

function showItems() {
    shoppingListElement.innerHTML = "";
    for (let i=0; i<items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function() {
            items.splice(i, 1);
            showItems();
            saveItems();
        });
        li.appendChild(deleteBtn);
        shoppingListElement.appendChild(li);
    }
}

let itemInput = document.getElementById("itemInput");
let addItemBtn = document.getElementById("addItemBtn");

function addItem() {
    let itemText = itemInput.value;
    if (itemText === "") {
        return;
    }
    items.push(itemText);
    itemInput.value = "";
    showItems();
    saveItems();
}

addItemBtn.addEventListener("click", addItem);

function saveItems() {
    localStorage.setItem("myItems", JSON.stringify(items));
}

showItems();