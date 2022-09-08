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