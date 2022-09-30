
const sprintCreation = document.querySelector(".display");

const generateNewCard = (sprint) => `
<div class = "card" id=${sprint.id} onclick ="buttonPressed()">
  <div id="upperLine">
    <h5 id="taskName"><b> ${sprint.sprintTitle} </b></h5>

    <div class = "date">
      <p id="date1">Start Date: ${sprint.startDate}</p>
      <p id="date3">End Date: ${sprint.endDate}</p>
    </div>
    
    <div id="statusButtons"> 
      <button type="button" class="btn btn-outline-danger" id=${sprint.id} class="asa" onclick="deleteTask.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
        <i class="fas fa-trash-alt"id=${sprint.id} data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteTask.apply(this, arguments)" ></i>
      </button>

      <div id = "btn1"><button id=${sprint.id1} class = "started" onclick="statusButton.apply(this, arguments)">Get Started</button></div> 
      <div><button class = "finished" type="button" id="finish" onclick="finishFunc()"> Finished </button></div>
    </div>
  </div> 
</div>`
;

// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadSprintData = () => {
  const getSprintData = localStorage.getItem("sprint");
  const {sprintTask} = JSON.parse(getSprintData);

  sprintTask.map((sprintObject) => {
    sprintCreation.insertAdjacentHTML("beforeend", generateNewCard(sprintObject));
    const b = document.getElementById(sprintObject.id1);
    b.innerText = localStorage.getItem(sprintObject.id1);

    globalStorage.push(sprintObject);
    
  });

};

// save changes of new task 
const saveChanges = () => {
  const taskData = {
    id: Date.now(),
    id1 : Date.now()+"1",
    sprintTitle: document.getElementById("sprintTitle").value, 
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
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
  var ctnFlag = localStorage.getItem(statusId).toString();
  
  if (ctnFlag === "Get Started"){
    localStorage.setItem(statusId, "Continue");
    const button1 = document.getElementById(statusId);
    button1.innerText = localStorage.getItem(statusId);
    location.href = "drag-and-drop.html";
  }
  else{
    location.href = "sprintDetails.html";
  }
   
}

function finishFunc(){
  var ctnBtn = document.getElementById("btn1")
  ctnBtn.remove();
  var finishBtn = document.getElementById("finish")
  finishBtn.remove();
}