import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
	state = {
		todos: [],
		todoToShow: "all",
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

	updateTodoToShow = (s) => {
		this.setState({
			todoToShow: s,
		});
	};

	handleDeleteTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id),
		});
	};

	removeAllTodosThatAreComplete = () => {
		console.log("called remove");
		this.setState({
			todos: this.state.todos.filter((todo) => !todo.complete),
		});
	};

	render() {
		let todos = [];

		if (this.state.todoToShow === "all") {
			todos = this.state.todos;
		} else if (this.state.todoToShow === "active") {
			todos = this.state.todos.filter((todo) => !todo.complete);
		} else if (this.state.todoToShow === "complete") {
			todos = this.state.todos.filter((todo) => todo.complete);
		}

		return (
			<div>
				<TodoForm onSubmit={this.addTodo} />
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={() => this.toggleComplete(todo.id)}
						onDelete={() => this.handleDeleteTodo(todo.id)}
					/>
				))}
				<div>
					todos left:{" "}
					{this.state.todos.filter((todo) => !todo.complete).length}
				</div>
				<div>
					<button onClick={() => this.updateTodoToShow("all")}>all</button>
					<button onClick={() => this.updateTodoToShow("active")}>
						active
					</button>
					<button onClick={() => this.updateTodoToShow("complete")}>
						complete
					</button>
				</div>
				<div>
					<button onClick={this.removeAllTodosThatAreComplete}>
						remove all complete todos
					</button>
				</div>
			</div>
		);
	}
}
