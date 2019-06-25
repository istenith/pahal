var completedTasks = localStorage.getItem('homeCompletedTasks');

if (completedTasks != '' && completedTasks != null) {
  completedTasks = completedTasks.split(',').map(function(x) {
    return Number(x)
  });
} else {
  completedTasks = [];
}

var todoCards = document.getElementById('todo').getElementsByClassName('card');

for (var i = 0; i < completedTasks.length; ++i) {
  todoCards[completedTasks[i]].classList.add('completed');
}

for (var todoCard = 0; todoCard < todoCards.length; ++todoCard) {
  todoCards[todoCard].Index = todoCard;

  todoCards[todoCard].onclick = function(eve) {
    eve.target.classList.toggle('completed');
    toggleValueInArray(completedTasks, eve.target.Index);

    localStorage.setItem('homeCompletedTasks', completedTasks.toString());
  };
}

function toggleValueInArray(array, value) {
  var index = array.indexOf(value);

  if (index == -1) {
    array.push(value);
  } else {
    do {
      array.splice(index, 1);
      index = array.indexOf(value);
    } while (index != -1);
  }
}
