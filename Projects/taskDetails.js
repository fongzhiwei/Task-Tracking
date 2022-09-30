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
 const editName = document.getElementById("editTaskName").textContent;
 const editType = document.getElementById("editTaskType").textContent;
 const editPriority = document.getElementById("editTaskPriority").textContent;
 const editMember = document.getElementById("editAddMember").textContent;
 const editDesc = document.getElementById("editTaskDesc").textContent;
 const editStat = document.getElementById("editTaskStatus").textContent;
 const editStory = document.getElementById("editStoryPoint").textContent;

 console.log(editName)

 document.getElementById("taskName").value = editName;
 document.getElementById("taskType").value = editType;
 document.getElementById("storyPoint").value = editStory;
 document.getElementById("taskPriority").value = editPriority;
 document.getElementById("taskStatus").value = editStat;
 document.getElementById("addMember").value = editMember;
 document.getElementById("taskDesc").value = editDesc;
};