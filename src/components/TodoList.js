import React from "react";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
   state = {
      todos: [],
   };

   render() {
      return (
         <div>
            <TodoForm />
         </div>
      );
   }
}
