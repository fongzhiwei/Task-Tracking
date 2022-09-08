// Search & Filter Tasks Function
const task = document.querySelectorAll('.task')

const displayTask = (values) => {
    task.forEach(element => {
        element.style.display = "none"
        const title = element.querySelector('h2').innerHTML.toUpperCase();
        const status = element.dataset.status.toUpperCase();

        if (title.includes(values)){
            element.style.display = "block"
        }

        else if (status.includes(values)){
            element.style.display = "block"
        }
    })
}

searchTask.addEventListener('input', (e) => {
    displayTask(e.target.value.toUpperCase())
})

taskFilter.addEventListener('input', (e) => {
    displayTask(e.target.value.toUpperCase())
})

// Tests for changing display (does not work)
// Search & Filter Tasks Function
// const task = document.querySelectorAll('.col-md-6 col-lg-4 mt-3')

// const displayTask = (values) => {
//     const properties = ["name","type","desc","priority"];

//     task.forEach(element => {
//         element.style.display = "none";
        
//         // for(i = 0; i<properties.length; i++){
//         //     if (element.getElementById(properties).innerHTML === values){
//         //         element.style.display = "block";
//         //         break;
//         //     }
//         // }
//     })

// }

// searchTask.addEventListener('input', (e) => {
//     displayTask(e.target.value.toUpperCase())
// })

// taskFilter.addEventListener('input', (e) => {
//     displayTask(e.target.value.toUpperCase())
// })

    