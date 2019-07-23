const TodoItem = {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
}

export {TodoItem};

export default TodoItem;