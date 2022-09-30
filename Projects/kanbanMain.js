import { nodeName } from "jquery";
import Kanban from "./src/Kanban.js";

new Kanban(
	document.querySelector(".kanban")
);

function createSprint(task) {
	if(taskObject.taskStatus == "To Do Task"){

	}
	else if (taskObject.taskStatus == "In Progress"){

	}
	else if (taskObject.taskStatus == "Done"){

	}

}

  const loadTaskData = () => {
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);
  
    task.map((taskObject) => {
		if(taskObject.sprintStatus == "In Sprint"){
			createSprint(taskObject);
		}

  
      globalStorage.push(taskObject);
    });
  };


  
