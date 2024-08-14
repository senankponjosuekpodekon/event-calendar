import { defineStore } from 'pinia';
import { useAuthStore } from './auth'; 

export const useTodoStore = defineStore('todo', {
  state: () => ({
	todos: []
  }),
  actions: {
	loadTodos() {
  	const authStore = useAuthStore();
  	const storedTodosString = localStorage.getItem('todos');
  	if (storedTodosString) {
    	const storedTodos = JSON.parse(storedTodosString);
    	// Filter task user connected
    	this.todos = storedTodos.filter(todo => todo.userEmail === authStore.user.email);
    	console.log(this.todos);
  	}
	},
	createTodo(todo) {
  	const authStore = useAuthStore();
  	this.todos.push({
    	id: Date.now(),
    	...todo,
    	userEmail: authStore.user.email, // create todo only for connected user
    	createdDate: new Date().toLocaleString(),
    	lastModifiedDate: new Date().toLocaleString()
  	});
  	localStorage.setItem('todos', JSON.stringify(this.todos));
	},
	updateTodo(updatedTodo) {
  	const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
  	if (index !== -1) {
    	this.todos[index] = {
      	...updatedTodo,
      	lastModifiedDate: new Date().toLocaleString()
    	};
    	localStorage.setItem('todos', JSON.stringify(this.todos));
  	}
	},
	deleteTodo(todoId) {
  	this.todos = this.todos.filter(todo => todo.id !== todoId);
  	localStorage.setItem('todos', JSON.stringify(this.todos));
	}
  },
  getters: {
	getTodoList: (state) => state.todos,
	getTodoById: (state) => (id) => state.todos.find(todo => todo.id === id),
	getTodoColumns: () => {
  	return [
    	{
      	key: 'name',
      	label: 'Task'
    	},
    	{
      	key: 'description',
      	label: 'Description'
    	},
    	{
      	key: 'status',
      	label: 'Status'
    	},
    	{
      	key: 'createdDate',
      	label: 'Created Date'
    	},
    	{
      	key: 'lastModifiedDate',
      	label: 'Last Modified Date'
    	}
  	];
	}
  }
});
