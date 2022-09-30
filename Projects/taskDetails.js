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


const saveEdits = () => {
 editName = document.getElementById("taskName").value;
 editType = document.getElementById("taskType").value;
 editPriority = document.getElementById("taskPriority").value
 editMember = document.getElementById("addMember").value
 editDesc = document.getElementById("taskDesc").value
 editStat = document.getElementById("taskStatus").value
 editStory = document.getElementById("storyPoint").value

 document.getElementById("name") = editName;
 document.getElementById("type") = editType;
 document.getElementById("story") = editStory;
 document.getElementById("priority") = editPriority;
 document.getElementById("status") = editStat;
 document.getElementById("member") = editMember;
 document.getElementById("description") = editDesc;
};