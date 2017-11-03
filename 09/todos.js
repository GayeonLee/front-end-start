//start...
console.log('todos.js');



function getDom(id){
  return document.getElement(id);
}

var todoStringField = getDom('todoString');

console.log(todoStringField);

todoStringField.addEventListener('keyup', function(event)){

  console.log(todoStringField keyup!);

  if(event.keyCode === 13)

    var newTodo = todoStringField.value;
    todoStringField.value="";

    console.log('새로운 todo:', newTodo);



      var listDom = getDom('todoList');

      listDom.innerHTML += ' \
        <li>\
             <button class="delete">×</button>\
             <input type="checkbox" class="toggle-checked">\
             <span class="text"> '+ newTodo +' </span>\
        </li>';
    }
