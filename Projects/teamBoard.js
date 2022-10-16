const TeamAdding = document.querySelector(".display");

const generateNewCard = (member) => `
<div class = "card" id=${member.id}>
  <div id="upperLine">
      <div id="statusButtons"> 
        <button type="button" class="btn btn-outline-danger" id=${member.id} class="asa" onclick="deleteMember.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
          <i class="fas fa-trash-alt"id=${member.id} data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteMember.apply(this, arguments)" ></i>
        </button>
        <div id = "analytics">
          <a href="graph.html" onclick="memberPressed()"><span class="material-symbols-outlined" id=${member.id}>monitoring</span></a>
        </div>
      </div>

    <p id="name">Member Name: ${member.name}</p>
    
    <p id="Email">Member Address: ${member.address}</p>   
    </div>
</div>`
;

// declaring an empty array to store data
let globalStorage = [];
let globalTimeStorage = [];

// get task data from local storage
const loadTeamData = () => {
  const getTeamData = localStorage.getItem("team");
  const {teamMembers} = JSON.parse(getTeamData);

  teamMembers.map((member) => {
    TeamAdding.insertAdjacentHTML("beforeend", generateNewCard(member));
    globalStorage.push(member);
    
  });

  const getTeamTime = localStorage.getItem("teamTime");
  const {memberTime} = JSON.parse(getTeamTime);

  memberTime.map((memberTimeTrack) => {
    globalTimeStorage.push(memberTimeTrack);
  });


};


// save changes of new task 
const saveChanges = () => {
    var id = Date.now();
    const teamData = {
      id: id,
      name: document.getElementById("memberName").value, 
      address: document.getElementById("email").value,
      password: document.getElementById("passwordMember").value,
    };
    TeamAdding.insertAdjacentHTML("beforeend", generateNewCard(teamData));
  
    globalStorage.push(teamData);
    localStorage.setItem("team", JSON.stringify({teamMembers: globalStorage}));

    const memberTime = {
      id: id,
      name: document.getElementById("memberName").value,
    }
    globalTimeStorage.push(memberTime);
    localStorage.setItem("teamTime", JSON.stringify({memberTime: globalTimeStorage}));

  };

  
const deleteMember = (event) => {
  event = window.event;
  const targetId = event.target.id;
  const tagName = event.target.tagName;

  globalStorage = globalStorage.filter(
    (taskObject) => taskObject.id != targetId
  );

  localStorage.setItem("team", JSON.stringify({teamMembers: globalStorage}));

  globalTimeStorage = globalTimeStorage.filter(
    (memberObject) => memberObject.id != targetId
  );

  localStorage.setItem("teamTime", JSON.stringify({memberTime: globalTimeStorage}));

  if (tagName == "BUTTON") {
    return TeamAdding.removeChild(
      event.target.parentNode.parentNode.parentNode
    );
  } else {
    return TeamAdding.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  }

};

const memberPressed = event => {
  event = window.event;
  var targetId = event.target.id;

  if (/[a-z]/i.test(targetId)){
    targetId = event.target.parentNode.id;
  }

  if (/[a-z]/i.test(targetId)){
    targetId = event.target.parentNode.parentNode.id;
  }
  console.log(targetId)
  localStorage.setItem("currentMember", targetId)
  // window.location.replace("taskDeatils.html");
}