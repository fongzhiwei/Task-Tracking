//getting task conatainer to add tasks
const taskCreation = document.querySelector(".task_creation");
const memberList = document.querySelector("#addMember");

// new task template
const generateNewTask = (taskData) => `
<div class ="displayTaskSlot" onclick="taskPressed()">
  <div class="col-md-6 col-lg-4 mt-3">
    <div class="card shadow-sm task__card">

      <div class="card-header d-flex justify-content-end task__card__header" id=${taskData.id}>
        <button type="button" class="btn btn-outline-danger"  onclick="deleteTask.apply(this, arguments)" data-bs-toggle="modal">
          <i class="fas fa-trash-alt"id=${taskData.id} data-bs-toggle="modal" onclick="deleteTask.apply(this, arguments)"></i>
        </button>

      </div>

      <div class="card-body" id=${taskData.id}>
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

// declaring an empty array to store data
let globalStorage = [];
let globalTeamStorage = [];

// get task data from local storage
const loadTaskData = () => {
  const getTaskData = localStorage.getItem("task");
  const {task} = JSON.parse(getTaskData);

  task.map((taskObject) => {
    taskCreation.insertAdjacentHTML("beforeend", generateNewTask(taskObject));

    globalStorage.push(taskObject);
  });

  const getTeamData = localStorage.getItem("team");
  const {teamMembers} = JSON.parse(getTeamData);

  teamMembers.map((member) => {
    globalTeamStorage.push(member);
    var el = document.createElement("option");
    el.textContent = member.name;
    el.value = member.name;
    memberList.appendChild(el);
  });

};

// save changes of new task 
const saveChanges = () => {
  const taskData = {
    id: Date.now(),
    taskName: document.getElementById("taskName").value,
    taskType: document.getElementById("taskType").value,
    taskPriority: document.getElementById("taskPriority").value,
    addMember: document.getElementById("addMember").value,
    taskDesc: document.getElementById("taskDesc").value,
    taskStatus: document.getElementById("taskStatus").value,
    storyPoint: document.getElementById("storyPoint").value,
  };
  taskCreation.insertAdjacentHTML("beforeend", generateNewTask(taskData));

  globalStorage.push(taskData);

  localStorage.setItem("task", JSON.stringify({task: globalStorage}));
};

// delete task
const deleteTask = (event) => {
  event = window.event;
  const targetId = event.target.id;
  const tagName = event.target.tagName;

  globalStorage = globalStorage.filter(
    (taskObject) => taskObject.id != targetId
  );

  localStorage.setItem("task", JSON.stringify({task: globalStorage}));

  if (tagName == "BUTTON") {
    return taskCreation.removeChild(
      event.target.parentNode.parentNode.parentNode.parentNode
    );
  } else {
    return taskCreation.removeChild(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
  }
};

// edit task
const editTask = () => {
  document.getElementById("name").contentEditable = "true";
  document.getElementById("type").contentEditable = "true";
  document.getElementById("desc").contentEditable = "true";
  document.getElementById("priority").contentEditable = "true";
  document.getElementById("status").contentEditable = "true";
  document.getElementById("member").contentEditable = "true";
  document.getElementById("story").contentEditable = "true";
};

const saveEdit = () => {
  const editName = document.getElementById("name").textContent;
  const editType = document.getElementById("type").textContent;
  const editDesc = document.getElementById("desc").textContent;
  const editPrior = document.getElementById("priority").textContent;
  const editStatus = document.getElementById("status").textContent;
  const editMember = document.getElementById("member").textContent;
  const editPoint = document.getElementById("story").textContent;

  document.getElementById("name").innerHTML = editName;
  document.getElementById("type").innerHTML = editType;
  document.getElementById("desc").innerHTML = editDesc;
  document.getElementById("priority").innerHTML = editPrior;
  document.getElementById("status").innerHTML = editStatus;
  document.getElementById("member").innerHTML = editMember;
  document.getElementById("story").innerHTML = editPoint;

  document.getElementById("name").contentEditable = "false";
  document.getElementById("desc").contentEditable = "false";
  document.getElementById("type").contentEditable = "false";
  document.getElementById("priority").contentEditable = "false";
  document.getElementById("status").contentEditable = "false";
  document.getElementById("member").contentEditable = "false";
  document.getElementById("story").contentEditable = "false";
};

const taskPressed = event => {
  event = window.event;
  var targetId = event.target.id;

  if (/[a-z]/i.test(targetId)){
    targetId = event.target.parentNode.id;
  }

  if (/[a-z]/i.test(targetId)){
    targetId = event.target.parentNode.parentNode.id;
  }
  console.log(targetId)
  localStorage.setItem("taskDetail", targetId)
  window.location.replace("taskDeatils.html");
}