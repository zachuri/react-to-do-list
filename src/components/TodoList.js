import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
   state = {
      todos: [],
   };

   addTodo = (todo) => {
      // Creating copy of current state array and passing it to newTodos
      // 	using ... syntax from JS
      // 	Also, adding a new todo to the begining of the array and adding the copy
      //     of all the todos in the from the array after
      // E.g) const newTodos = [todo, ...this.state.todos];

      this.setState({
         todos: [todo, ...this.state.todos],
      });
   };

   render() {
      return (
         <div>
            <TodoForm onSubmit={this.addTodo} />

            {/* Creating a Map of all the TODOS */}
            {/* key of the id which will display the text of that id */}
            {this.state.todos.map((todo) => (
               <Todo key={todo.id} text={todo.text} />
            ))}
         </div>
      );
   }
}
