import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
	state = {
		todos: [],
	};

	addTodo = (todo) => {
		const newTodos = [todo, ...this.state.todos];
		this.setState({
			todos: newTodos,
		});
	};

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					// suppose to update
					return {
						id: todo.id,
						text: todo.text,
						complete: !todo.complete,
					};
				} else {
					return todo;
				}
			}),
		});
	};

	render() {
		return (
			<div>
				<TodoForm onSubmit={this.addTodo} />
				{this.state.todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={() => this.toggleComplete(todo.id)}
					/>
				))}
			</div>
		);
	}
}
