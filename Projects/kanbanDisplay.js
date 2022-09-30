notStarted = document.querySelector("[id=not-started]")
inProgress = document.querySelector("#in-progress")
completed = document.querySelector("#completed")

const generateNewSprint = (taskData) => `
<div class ="displayTaskSlot">
  <div class="col-md-6 col-lg-4 mt-3" >
    <div class="card shadow-sm task__card">

      <div class="card-header d-flex justify-content-end task__card__header">
      </div>

      <div class="card-body">
        <h2 class="task__card__name" id="name">${taskData.taskName}
        </h2>
          <form>
            <div class="tags text-white flex-wrap"><span class="badge bg-primary m-1" style="background-color: red"; id="priority">${taskData.taskPriority}</span>
            <div class="tags text-white flex-wrap"><span class="badge bg-success m-1" id="story">${taskData.storyPoint}</span></div>
          </form>

          <form>
            <div class="tags text-white flex-wrap"><span class="badge bg-success m-1" id="type">${taskData.taskType}</span></div>
            <div class="tags text-white flex-wrap"><span class="badge bg-primary m-1" id="status">${taskData.taskStatus}</span>
          </form>
      </div>
    </div>
  </div>
</div>
`;

function createSprint(task) {

	if(task.taskStatus == "To Do Task"){
		notStarted.insertAdjacentHTML("beforeend", generateNewSprint(task));
	}
	else if (task.taskStatus == "In Progress"){
		inProgress.insertAdjacentHTML("beforeend", generateNewSprint(task));
	}
	else if (task.taskStatus == "Done"){
		completed.insertAdjacentHTML("beforeend", generateNewSprint(task));

	}

}

  const loadSprintTask = () => {
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);
  
    task.map((taskObject) => {
		if(taskObject.sprintStatus == "In Sprint"){
			createSprint(taskObject);
		}
    });
  };