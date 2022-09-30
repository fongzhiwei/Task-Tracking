const openTaskModal=()=>{
    const open = document.getElementById("myModal");
    open.style.display= "block";
    loadTaskDetail();
};

// get task data from local storage
const loadTaskDetail = () => {
    const taskID = localStorage.getItem("taskDetail")
    const getTaskData = localStorage.getItem("task");
    const {task} = JSON.parse(getTaskData);

    task.map((taskObject) => {
        if(taskObject.id == taskID){
            console.log(taskObject)
    
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
            description.innerText =taskObject.taskDesc
        }
    });

};

const editTask = () =>{
    document.getElementById("name").contentEditable = "true";
    document.getElementById("type").contentEditable = "true";
    document.getElementById("story").contentEditable = "true";
    document.getElementById("priority").contentEditable = "true";
    document.getElementById("status").contentEditable = "true";
    document.getElementById("member").contentEditable= "true";
    document.getElementById("description").contentEditable = "true";
}
d
const saveEdits = () => {
    changeName = document.getElementById("name").textContent;
    changeType = document.getElementById("type").textContent;
    changeStory = document.getElementById("story").textContent;
    changePriority = document.getElementById("priority").textContent;
    changeStat = document.getElementById("status").textContent;
    changeMember = document.getElementById("member").textContent;
    changeDesc = document.getElementById("description").textContent;

    document.getElementById("name").innerHTML = changeName;
    document.getElementById("type").innerHTML = changeType;
    document.getElementById("story").innerHTML = changeStory;
    document.getElementById("priority").innerHTML = changePriority;
    document.getElementById("status").innerHTML = changeStat;
    document.getElementById("member").innerHTML = changeMember;
    document.getElementById("description").innerHTML = changeDesc;

    document.getElementById("name").contentEditable = "false";
    document.getElementById("type").contentEditable = "false";
    document.getElementById("story").contentEditable = "false";
    document.getElementById("priority").contentEditable = "false";
    document.getElementById("status").contentEditable = "false";
    document.getElementById("member").contentEditable= "false";
    document.getElementById("description").contentEditable = "false";
}