const TeamAdding = document.querySelector(".display");

const generateNewCard = (member) => `
<div class = "card" id=${member.id}>
  <div id="upperLine">
    <div id="statusButtons"> 
      <button type="button" class="btn btn-outline-danger" id=${member.id} class="asa" onclick="deleteMember.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
        <i class="fas fa-trash-alt"id=${member.id} data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteMember.apply(this, arguments)" ></i>
      </button>
    </div>

    <p id="name">Member Name: ${member.name}</p>
    
    <p id="Email">Member Name: ${member.address}</p>   
  </div>
</div>`
;

// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadTeamData = () => {
  const getTeamData = localStorage.getItem("team");
  const {teamMembers} = JSON.parse(getTeamData);

  teamMembers.map((member) => {
    TeamAdding.insertAdjacentHTML("beforeend", generateNewCard(member));
    globalStorage.push(member);
    
  });

};


// save changes of new task 
const saveChanges = () => {
    const teamData = {
      id: Date.now(),
      name: document.getElementById("memberName").value, 
      address: document.getElementById("email").value,
    };
    TeamAdding.insertAdjacentHTML("beforeend", generateNewCard(teamData));
  
    globalStorage.push(teamData);
    localStorage.setItem("team", JSON.stringify({teamMembers: globalStorage}));
  };


