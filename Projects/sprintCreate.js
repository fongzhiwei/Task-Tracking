const sprintCreation = document.querySelector(".display");

const generateNewCard = (sprint) => `<div class = "card">
<div>
    <div id="upperLine">
        <h5 id="taskName"> <b> ${sprint.sprintTitle} </b></h5>
        <button type="button" class="btn btn-outline-danger" id=${sprint.id} onclick="deleteTask.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
        <i class="fas fa-trash-alt"id=${sprint.id}
        data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteTask.apply(this, arguments)" ></i>
      </button>
      <div id="statusButtons"> 
        <div><button id="status" onclick="statusButton()">  <a type="button" href="login.html"> Get Started </a> </button></div> 
        <div><button type="button" id="finish" onclick="" > Finished </button> </div>
         </div>
        </div>
        <div id="date" class="dateClass"><p id="date1">${sprint.startDate}</p> </div>
    </div>
</div>`

;

// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadTaskData = () => {
  const getTaskData = localStorage.getItem("sprint");
  const {sprintTask} = JSON.parse(getTaskData);

  sprintTask.map((taskObject) => {
    sprintCreation.insertAdjacentHTML("beforeend", generateNewCard(taskObject));

    globalStorage.push(taskObject);
  });
};

// save changes of new task 
const saveChanges = () => {
  const taskData = {
    id: Date.now(),
    sprintTitle: document.getElementById("sprintTitle").value, 
    startDate: document.getElementById("startDate").value,
  };
  sprintCreation.insertAdjacentHTML("beforeend", generateNewCard(taskData));

  globalStorage.push(taskData);

  localStorage.setItem("sprint", JSON.stringify({sprintTask: globalStorage}));
};

// delete task
const deleteTask = (event) => {
  event = window.event;
  const targetId = event.target.id;
  const tagName = event.target.tagName;

  globalStorage = globalStorage.filter(
    (taskObject) => taskObject.id != targetId
  );

  localStorage.setItem("sprint", JSON.stringify({sprintTask: globalStorage}));

  if (tagName == "BUTTON") {
    return sprintCreation.removeChild(
      event.target.parentNode.parentNode.parentNode
    );
  } else {
    return sprintCreation.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  }
};

const statusButton = ()=>{
   const button1 = document.getElementById("status");
   button1.innerText = "Contitue";

}