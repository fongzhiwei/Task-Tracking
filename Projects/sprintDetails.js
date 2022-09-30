const openModal=()=>{
    const open = document.getElementById("myModal");
    open.style.display= "block";
    loadSprintData();
};

// declaring an empty array to store data
let globalStorage = [];

// get task data from local storage
const loadSprintData = () => {
    const taskID = localStorage.getItem("sprintDetail")
    const getSprintData = localStorage.getItem("sprint");
    const {sprintTask} = JSON.parse(getSprintData);

    sprintTask.map((sprintObject) => {
        if(sprintObject.id == taskID){
    
            const sprintName = document.getElementById("sprintName");
            console.log(sprintName.textContent)
            sprintName.innerHTML = sprintObject.sprintTitle
            const sprintStartDate = document.getElementById("sprintStartDate")
            sprintStartDate.innerHTML = sprintObject.startDate
            const sprintEndDate = document.getElementById("sprintEndDate")
            sprintEndDate.innerHTML = sprintObject.endDate

        }
    });

};