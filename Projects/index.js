//getting task conatainer to add cards
const taskContainer = document.querySelector(".task__container");

// new task template
const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4 mt-3" >
<div class="card shadow-sm task__card">

  <div class="card-header d-flex justify-content-end task__card__header">
    <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
                  <i class="fas fa-trash-alt"id=${taskData.id}
                  data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteCard.apply(this, arguments)" ></i>
                </button>

  </div>
  <div class="card-body">
    <h2 class="task__card__name" id="name">${taskData.taskName}</h2>
    <p class="description trim-3-lines text-muted" id="desc" >
     ${taskData.taskDesc}
    </p>
    <div class="tags text-white d-flex flex-wrap">
      <span class="badge bg-primary m-1" id="type">${taskData.taskPriority}</span>
    </div>
    <div class="tags text-white flex-wrap">
      <span class="badge bg-primary m-1" id="type">${taskData.taskType}</span>
    </div>
  </div>
  <div class="card-footer"></div>
</div>
</div>

`;

let globalStorage = []; // declaring an empty array to store data

// get task data on load/refreah from local storage
const loadCardData = () => {
  const getCardData = localStorage.getItem("tasky");
  const { cards } = JSON.parse(getCardData);

  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

    globalStorage.push(cardObject);
  });
};

// save changes of new task 
const saveChanges = () => {
  const taskData = {
    id: Date.now(),
    taskName: document.getElementById("taskName").value,
    taskType: document.getElementById("taskType").value,
    taskPriority: document.getElementById("taskPriority").value,
    taskDesc: document.getElementById("taskDesc").value,
  };
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

  globalStorage.push(taskData);

  localStorage.setItem("tasky", JSON.stringify({ cards: globalStorage }));
};

//delete task
const deleteCard = (event) => {
  event = window.event;
  const targetId = event.target.id;
  const tagName = event.target.tagName;

  globalStorage = globalStorage.filter(
    (cardObject) => cardObject.id != targetId
  );

  localStorage.setItem("tasky", JSON.stringify({ cards: globalStorage }));

  if (tagName == "BUTTON") {
    return taskContainer.removeChild(
      event.target.parentNode.parentNode.parentNode
    );
  } else {
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  }
};




