// declaring variables for time tracking
let t;
let started = true;
let elapsedTime = 0;

// declaring an empty array to store data
let globalStorage = [];
let globalTimeStorage = [];

const openTaskModal=()=>{
    const open = document.getElementById("myModal");
    open.style.display= "block";
    loadTaskDetail();
};



// get task data from local storage
const loadTaskDetail = () => {
    const taskID = localStorage.getItem("taskDetail");
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);

    task.map((taskObject) => {
        globalStorage.push(taskObject)
        if(taskObject.id == taskID){
    
            const name = document.getElementById("name");
            name.innerText = taskObject.taskName
            const type = document.getElementById("type")
            type.innerText = taskObject.taskType
            const story = document.getElementById("story")
            story.innerText = taskObject.storyPoint
            const priority = document.getElementById("priority")
            priority.innerText = taskObject.taskPriority
            const status = document.getElementById("status")
            status.innerText = taskObject.taskStatus
            const member = document.getElementById("member")
            member.innerText = taskObject.addMember
            const description = document.getElementById("description")
            description.innerText = taskObject.taskDesc
            const timer = document.getElementById("timer")
            timer.innerText = taskObject.timeTotal
        }
    });

    const getTeamTime = localStorage.getItem("teamTime");
    const {memberTime} = JSON.parse(getTeamTime);

  
    memberTime.map((memberTimeTrack) => {
      globalTimeStorage.push(memberTimeTrack);
    });

    console.log(globalTimeStorage);


};


function startTimeCounter() {
    started = true;
    var startTime = localStorage.getItem("startTime");
    var now = Math.floor(Date.now() / 1000); // get the time now
    var diff = now - startTime + elapsedTime; // diff in seconds between now and start
    var hour = Math.floor(diff / 3600); // get minutes value (quotient of diff)
    var minute = Math.floor(diff / 60); // get minutes value (quotient of diff)
    var second = Math.floor(diff % 60); // get seconds value (remainder of diff)
    hour = checkTime(hour); // add a leading zero if it's single digi
    minute = checkTime(minute); // add a leading zero if it's single digit
    second = checkTime(second); // add a leading zero if it's single digit
    document.getElementById("elapsedTime").innerHTML = hour+":"+ minute + ":" + second; // update the element where the timer will appear
    t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


const startTime = () =>{

    var startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
    localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page

    startTimeCounter();
}

const stopTime = () =>{
    var startTime = localStorage.getItem("startTime");
    clearTimeout(t);
    var stopTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
    localStorage.setItem("stopTime", stopTime); // Store it if I want to restart the timer on the next page
    elapsedTime += stopTime-startTime;
    saveTime(stopTime-startTime);

}

const resetTime = () =>{
    clearTimeout(t);
    started = false;
    elapsedTime = 0;
    document.getElementById("elapsedTime").innerHTML = "00:00:00"; // update the element where the timer will appear
}


const saveTime = (time) =>{
    var member ="";
    const taskID = localStorage.getItem("taskDetail");
    globalStorage.forEach(function (taskItem){
        if (taskItem.id == taskID){
            member = taskItem.addMember;
            console.log(member);
            if (taskItem.hasOwnProperty("timeTotal")){
                taskItem.timeTotal += time;
            }
            else {taskItem.timeTotal = time;}
        }
      })
      localStorage.setItem("task", JSON.stringify({task: globalStorage}));

    
      

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      today = mm + '/' + dd + '/' + yyyy;
      console.log(today)
      

      globalTimeStorage.forEach(function (teamMember){
        if (teamMember.name == member){
            console.log("yes");
            if (teamMember.hasOwnProperty(today)){
                teamMember[today] += time;
            }
            else {
                teamMember[today] = time;
                console.log("no");
            }
        }
        
      })
      localStorage.setItem("teamTime", JSON.stringify({memberTime: globalTimeStorage}));

      
};
