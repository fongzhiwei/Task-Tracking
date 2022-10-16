const TeamAdding = document.querySelector("#display");

const generateNewCard = (member, count) => `
<tr>
    <td>${count}</td>
    <td>${member.name}</td>
    <td id>${member.address}</td>
    <td id=${member.id}>3 Hours</td>
</tr>`
;

// declaring an empty array to store data
let globalStorage = [];
let globalTimeStorage = [];

// get task data from local storage
const loadTeamData = () => {
  const getTeamData = localStorage.getItem("team");
  const {teamMembers} = JSON.parse(getTeamData);
  var count = 1;

  teamMembers.map((member) => {
    globalStorage.push(member);
    TeamAdding.insertAdjacentHTML("beforeend", generateNewCard(member,leadZero(count)));
    count++;
  });

  const getTeamTime = localStorage.getItem("teamTime");
  const {memberTime} = JSON.parse(getTeamTime);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  var dateToday = dd + '/' + mm + '/' + yyyy;

  memberTime.map((memberTimeTrack) => {
    if(memberTimeTrack.hasOwnProperty(dateToday)){
      document.getElementById(memberTimeTrack.id).innerHTML = memberTimeTrack[dateToday]/3600 + " Hours";
    }
    else{
      document.getElementById(memberTimeTrack.id).innerHTML = 0 + " Hours";
    }
    
    globalTimeStorage.push(memberTimeTrack);
  });
};

function leadZero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// save changes of new time range
const saveChanges = () => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    const listDate = [];
    const dateMove = new Date(startDate);
    let strDate = startDate;

    while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        strDate = strDate.split("-").reverse().join("-");
        strDate = strDate.replaceAll("-","/")
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
    };
    console.log(listDate);

    globalTimeStorage.forEach(function (memberTimes){
        var avgTime = 0;
        listDate.forEach(function(currDate){
            if(memberTimes.hasOwnProperty(currDate)){
                avgTime += memberTimes[currDate]

            }
        })
        console.log(avgTime);
        document.getElementById(memberTimes.id).innerHTML = avgTime/3600 + " Hours";
      })

    
  };
