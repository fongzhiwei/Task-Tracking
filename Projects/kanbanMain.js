import Kanban from "./src/Kanban.js";

new Kanban(
	document.querySelector(".kanban")
);

function createTodo(task) {
	const todo_div = document.createElement("div");
	const txt = document.createTextNode(task)
  //   const input_val = document.getElementById("todo_input").value;
  //   const txt = document.createTextNode(input_val);
  
  
	todo_div.appendChild(txt);
	todo_div.classList.add("todo");
  
	/* create span */
	const span = document.createElement("span");
	const span_txt = document.createTextNode("\u00D7");
	span.classList.add("close");
	span.appendChild(span_txt);
  
	todo_div.appendChild(span);
  
	no_status.appendChild(todo_div);
  
	span.addEventListener("click", () => {
	  span.parentElement.style.display = "none";
	});
	//   console.log(todo_div);
  
  
	document.getElementById("todo_input").value = "";
	todo_form.classList.remove("active");
	overlay.classList.remove("active");
  }

  const loadTaskData = () => {
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);
  
    task.map((taskObject) => {
		if(taskObject.sprintStatus == "In Sprint"){
			createTodo(taskObject.taskName);
		}

  
      globalStorage.push(taskObject);
    });
  };


  
