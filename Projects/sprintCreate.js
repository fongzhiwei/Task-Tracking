
const sprintCreation = document.querySelector(".display");

const generateNewCard = (sprint) => `<div class = "card">
<div>
    <div id="upperLine">
        <h5 id="taskName"> <b> ${sprint.sprintTitle} </b></h5>
        <button type="button" class="btn btn-outline-danger" id=${sprint.id} class="asa" onclick="deleteTask.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
        <i class="fas fa-trash-alt"id=${sprint.id}
        data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteTask.apply(this, arguments)" ></i>
      </button>
      <div id="statusButtons"> 
        <div><button id=${sprint.id1} onclick="statusButton.apply(this, arguments)">Get Started</button></div> 
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
    const b = document.getElementById(taskObject.id1);
    b.innerText = localStorage.getItem(taskObject.id1);

    globalStorage.push(taskObject);
    
  });

};

// save changes of new task 
const saveChanges = () => {
  const taskData = {
    id: Date.now(),
    id1 : Date.now()+"1",
    sprintTitle: document.getElementById("sprintTitle").value, 
    startDate: document.getElementById("startDate").value,
  };
  sprintCreation.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  localStorage.setItem(taskData.id1, "Get Started");

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

const statusButton = (event)=>{
   event = window.event;
   const statusId = event.target.id;
   localStorage.setItem(statusId, "Continue");
   const button1 = document.getElementById(statusId);
   button1.innerText = localStorage.getItem(statusId);

}