const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}


/* create todo  */

function createTodo(task) {
  const todo_div = document.createElement("div");
  const txt = document.createTextNode(task)
//   const input_val = document.getElementById("todo_input").value;
//   const txt = document.createTextNode(input_val);


  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  /* create span */
  const span = document.createElement("span");

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);


  //   console.log(todo_div);

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

}


// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadTaskData = () => {
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);
  
    task.map((taskObject) => {
      createTodo(taskObject.taskName);
  
      globalStorage.push(taskObject);
    });
  };

  const updateTaskData = (taskAdded) => {

    globalStorage.forEach(function (taskItem){
      console.log(taskItem.taskName)
      console.log(taskAdded.textContent)
      if (taskItem.taskName == taskAdded.textContent){
        taskItem.sprintStatus = "In Sprint";
        console.log("added task into sprint")
      }
    })
    localStorage.setItem("task", JSON.stringify({task: globalStorage}));
  };



  const addToSprint = () => {
    const toBeadded = document.querySelectorAll("#add_to_sprint > .todo")
    toBeadded.forEach(updateTaskData)
  }