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

let tasks=[];

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
}

function renderTasks() {
    taskList.innerHTML = "";

    for (let task of tasks) {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
}

addTaskBtn.addEventListener("click", addTask);

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
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
}