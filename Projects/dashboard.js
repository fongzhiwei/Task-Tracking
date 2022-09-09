// // Search & Filter Tasks Function
// const task = document.querySelectorAll('.task')

// const displayTask = (values) => {
//     task.forEach(element => {
//         element.style.display = "none"
//         const title = element.querySelector('h2').innerHTML.toUpperCase();
//         const status = element.dataset.status.toUpperCase();

//         if (title.includes(values)){
//             element.style.display = "block"
//         }

//         else if (status.includes(values)){
//             element.style.display = "block"
//         }
//     })
// }

// searchTask.addEventListener('input', (e) => {
//     displayTask(e.target.value.toUpperCase())
// })

// taskFilter.addEventListener('input', (e) => {
//     displayTask(e.target.value.toUpperCase())
// })

// Tests for changing display (does not work)
// Search & Filter Tasks Function

function search() {
    // Declare variables
    var input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("col-md-6 col-lg-4 mt-3")
    titles = document.getElementsByClassName("card-title");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < cards.length; i++) {
      a = titles[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
