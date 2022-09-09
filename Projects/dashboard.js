const filterTasks = document.querySelector(".filter-task")

filterTasks.addEventListener("click",filterFunction)

function searchFunction() {
  // Declare variables
  var input, filter;
  input = document.getElementById("searchTask");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("displayTaskSlot")
  titles = document.getElementsByClassName("task__card__name");

  // Loop through all list items, and hide those tasks that don't match the search query
  for (i = 0; i < cards.length; i++) {
    a = titles[i];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function filterFunction() {
    // Declare variables
    var input, filter;
    var selected = document.getElementById('taskFilter');
    input = selected.options[selected.selectedIndex];
    filter = input.text.toUpperCase();
    cards = document.getElementsByClassName("displayTaskSlot");
    titles = document.querySelectorAll('[id=status]');
  
    if(filter == "FILTER"){
        for (i=0; i<cards.length; i++){
            cards[i].style.display = "";
        }
        return
    }
    // Loop through all list items, and hide those tasks that don't match the filter
    for (i = 0; i < cards.length; i++) {
      a = titles[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
