console.log("Hello from JavaScript!");
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

let greeting = "Hello, " + name + "!";
console.log(greeting);

function greet(personName) {
    console.log("Hello, " + personName + "!");
}
greet("Pradeep");

function add(a, b) {
    return a + b;
}
let sum = add(5, 7);
console.log(sum);

let number = 10;
if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}

let button = document.getElementById("myButton");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "You clicked the button, Pradeep!";
});
message.style.color = "red";

let hobbies = ["Playing Chess", "Learning Coding", "Getting info about good food and healthy lifestyle"];
console.log(hobbies.length);
for (let i=0; i<hobbies.length; i++) {
    console.log(hobbies[i]);
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
    renderTasks();
    saveTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function() {
        tasks.splice(i, 1);
        renderTasks();
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

renderTasks();

let cityInput = document.getElementById("cityInput");
let getWeatherBtn = document.getElementById("getWeatherBtn");
let weatherResult = document.getElementById("weatherResult");

async function getWeather() {
    let city = cityInput.value;

    if (city === "") {
        return;
    }

    weatherResult.textContent = "Loading...";

    let geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=" + city;
    let geoResponse = await fetch(geoUrl);
    let geoData = await geoResponse.json();

    console.log(geoData);

}

getWeatherBtn.addEventListener("click", getWeather);

async function getWeather() {
    let city = cityInput.value;

    if (city === "") {
        return;
    }

    weatherResult.textContent = "Loading...";

    let geoUrl = "https:/geocoding-api.open-meteo.com/v1/search?name=" + city;
    let geoResponse = await fetch(geoUrl);
    let geoData = await geoResponse.json();

    if (!geoData.results) {
        weatherResult.textContent = "City not found.";
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