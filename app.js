function addTodo() {
    let todo = document.getElementById("todo");
    let list = document.getElementById("list");

    if (todo.value.trim() !== "") {
        list.innerHTML += `<li class='lines'><input type="text" value="${todo.value}" class="l-input" disabled><button class="d-button" onClick='deleteTodo(event)'> <i class="fa-solid fa-trash"></i> </button><button class="e-button" onClick='editTodo(event)'> <i class="fa-solid fa-pen"></i> </button></li>`;
        todo.value = "";
        todo.blur();
    }
}

function addEnter(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

function deleteTodo(event) {
  event.target.parentNode.parentNode.remove();
  document.getElementById("todo").focus();
}

function editTodo(event) {
    var input = event.target.closest('li').querySelector('.l-input');
    input.disabled = false;
    input.focus();

    input.onblur = function () {
        input.disabled = true;
    };
}
