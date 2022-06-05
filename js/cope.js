let todos = [];
const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

function addTodo(text){
   const todo = {
      text,
      done: false,
      id: `${Math.random()}`,
   };
   todos.push(todo);
}

function deleteTodo(id){
   todos.forEach( todo =>{
      if(todo.id === id){
         todo.done = true;
      };
      render();
   })
}


function render(){

   let html = '';

   todos.forEach( todo => {
      if(todo.done){
         return;
      };
      html += `
               <div>${todo.text}
               <button data-id='${todo.id}'>выполнено</button>
               </div>
               `
   })
  

   todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () => {
   const text = inputNode.value;
   addTodo(text);
   render();
})

// event.target. - инициатор события;
todosNode.addEventListener('click', (event) => {
   if(event.target.tagName !== 'BUTTON') {
      return;
   };

   const id = event.target.dataset.id; // извлекаем data атрибут конкретно id;

   deleteTodo(id);
   render();
});

render();


