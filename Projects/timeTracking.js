const openTaskModal=()=>{
    const open = document.getElementById("myModal");
    open.style.display= "block";
    loadTaskDetail();
};

// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadTaskDetail = () => {
    const taskID = localStorage.getItem("taskDetail")
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
            description.innerText =taskObject.taskDesc
        }
    });

};