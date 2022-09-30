const taskCreation = document.querySelector(".sprint-container");

const openModal=()=>{
    loadSprintData();
};

// declaring an empty array to store data
let globalStorage = [];

const generateNewTask = (taskData) => `
<div class ="displayTaskSlot">
  <div class="mt-3">
    <div class="card shadow-sm task__card">

      <div class="card-header d-flex justify-content-end task__card__header">
      </div>

      <div class="card-body">
        <h2 class="task__card__name" id="name">${taskData.taskName}
        </h2>
          <form>
            <div class="tags text-white flex-wrap"><span class="badge bg-primary m-1" style="background-color: red"; id="priority">${taskData.taskPriority}</span>
            <div class="tags text-white flex-wrap"><span class="badge bg-success m-1" id="story">${taskData.storyPoint}</span>
          </form>

          <form>
            <div class="tags text-white flex-wrap"><span class="badge bg-success m-1" id="type">${taskData.taskType}</span>
            <div class="tags text-white flex-wrap"><span class="badge bg-primary m-1" id="status">${taskData.taskStatus}</span>
          </form>
      </div>
    </div>
  </div>
</div>
`;

function createTodo(task) {
    const todo_div = document.createElement("div");
    const txt = document.createTextNode(task.taskName)
  
    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
  
    /* create span */
    const span = document.createElement("span");
  
    todo_div.appendChild(span);
  
    tasklist.appendChild(todo_div);
  
  }

  // get task data from local storage
const loadTaskData = () => {
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);
  
    task.map((taskObject) => {
        if(taskObject.sprintStatus == "In Sprint"){
            taskCreation.insertAdjacentHTML("beforeend", generateNewTask(taskObject));
        }
      
      globalStorage.push(taskObject);
    });
  };

// get task data from local storage
const loadSprintData = () => {
    const taskID = localStorage.getItem("sprintDetail")
    const getSprintData = localStorage.getItem("sprint");
    const {sprintTask} = JSON.parse(getSprintData);

    sprintTask.map((sprintObject) => {
        if(sprintObject.id1 == taskID){
    
            const sprintName = document.getElementById("sprintName");
            sprintName.innerHTML = sprintObject.sprintTitle
            const sprintStartDate = document.getElementById("sprintStartDate")
            sprintStartDate.innerHTML = sprintObject.startDate
            const sprintEndDate = document.getElementById("sprintEndDate")
            sprintEndDate.innerHTML = sprintObject.endDate
            loadTaskData()
        }
    });

};