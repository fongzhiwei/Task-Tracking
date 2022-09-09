//getting task conatainer to add tasks
const taskCreation = document.querySelector(".task_creation");

// new task template
const generateNewTask = (taskData) => `
<div class="col-md-6 col-lg-4 mt-3" >
  <div class="card shadow-sm task__card">

    <div class="card-header d-flex justify-content-end task__card__header">
      <button type="button" class="btn btn-outline-info mr-2" onclick ="editTask()">
        <i class="fas fa-pencil-alt" onlick ="editTask()"></i>
      </button>

      <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteTask.apply(this, arguments)" data-bs-toggle="modal">
        <i class="fas fa-trash-alt"id=${taskData.id} data-bs-toggle="modal" onclick="deleteTask.apply(this, arguments)"></i>
      </button>
    </div>

    <div class="card-body">
      <h2 class="task__card__name" id="name">${taskData.taskName}
      </h2>
        <p class="description trim-3-lines text-muted" id="desc" >${taskData.taskDesc}</p>
        <form>
          <div class="tags text-white flex-wrap"><span class="badge bg-primary m-1" id="priority">${taskData.taskPriority}</span></div>
          <div class="tags text-white flex-wrap"><span class="badge bg-success m-1" id="story">${taskData.storyPoint}</span></div>
          <div class="tags text-white flex-wrap"><span class="badge bg-success m-1" id="type">${taskData.taskType}</span>
          <div class="tags text-white flex-wrap"><span class="badge bg-primary m-1" id="status">${taskData.taskStatus}</span></div>
          <div class="tags text-white flex-wrap"><span class="badge bg-warning m-1" id="member">${taskData.addMember}</span>
          <div class="tags text-white flex-wrap"><span class="badge bg-warning m-1" id="member2">${taskData.addMember2}</span>
          <div class="tags text-white flex-wrap"><span class="badge bg-warning m-1" id="member3">${taskData.addMember3}</span></div>
          <div class="tags text-white flex-wrap"><span class="badge bg-warning m-1" id="member4">${taskData.addMember4}</span></div>
          <div class="tags text-white flex-wrap"><span class="badge bg-warning m-1" id="member5">${taskData.addMember5}</span></div>
          <div class="tags text-white flex-wrap"><span class="badge bg-warning m-1" id="member6">${taskData.addMember6}</span></div>
        </form>
    </div>

    <div class="card-footer">
      <button type="button" onclick="saveEdit()" class="btn btn-primary btn-default active">Save Changes</button>
    </div>
  </div>
</div>
`;

// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadTaskData = () => {
  const getTaskData = localStorage.getItem("task");
  const {task} = JSON.parse(getTaskData);

  task.map((taskObject) => {
    taskCreation.insertAdjacentHTML("beforeend", generateNewTask(taskObject));

    globalStorage.push(taskObject);
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
    addMember2: document.getElementById("addMember2").value,
    addMember3: document.getElementById("addMember3").value,
    addMember4: document.getElementById("addMember4").value,
    addMember5: document.getElementById("addMember5").value,
    addMember6: document.getElementById("addMember6").value,
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
      event.target.parentNode.parentNode.parentNode
    );
  } else {
    return taskCreation.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
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
  document.getElementById("member2").contentEditable = "true";
  document.getElementById("member3").contentEditable = "true";
  document.getElementById("member4").contentEditable = "true";
  document.getElementById("member5").contentEditable = "true";
  document.getElementById("member6").contentEditable = "true";
  document.getElementById("story").contentEditable = "true";
};

const saveEdit = () => {
  const editName = document.getElementById("name").textContent;
  const editType = document.getElementById("type").textContent;
  const editDesc = document.getElementById("desc").textContent;
  const editPrior = document.getElementById("priority").textContent;
  const editStatus = document.getElementById("status").textContent;
  const editMember = document.getElementById("member").textContent;
  const editMember2 = document.getElementById("member2").textContent;
  const editMember3 = document.getElementById("member3").textContent;
  const editMember4 = document.getElementById("member4").textContent;
  const editMember5 = document.getElementById("member5").textContent;
  const editMember6 = document.getElementById("member6").textContent;
  const editPoint = document.getElementById("story").textContent;

  document.getElementById("name").innerHTML = editName;
  document.getElementById("type").innerHTML = editType;
  document.getElementById("desc").innerHTML = editDesc;
  document.getElementById("priority").innerHTML = editPrior;
  document.getElementById("status").innerHTML = editStatus;
  document.getElementById("member").innerHTML = editMember;
  document.getElementById("member2").innerHTML = editMember2;
  document.getElementById("member3").innerHTML = editMember3;
  document.getElementById("member4").innerHTML = editMember4;
  document.getElementById("member5").innerHTML = editMember5;
  document.getElementById("member6").innerHTML = editMember6;
  document.getElementById("story").innerHTML = editPoint;

  document.getElementById("name").contentEditable = "false";
  document.getElementById("desc").contentEditable = "false";
  document.getElementById("type").contentEditable = "false";
  document.getElementById("priority").contentEditable = "false";
  document.getElementById("status").contentEditable = "false";
  document.getElementById("member").contentEditable = "false";
  document.getElementById("member2").contentEditable = "false";
  document.getElementById("member3").contentEditable = "false";
  document.getElementById("member4").contentEditable = "false";
  document.getElementById("member5").contentEditable = "false";
  document.getElementById("member6").contentEditable = "false";
  document.getElementById("story").contentEditable = "false";
};
