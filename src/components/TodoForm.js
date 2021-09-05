import React from "react";

export default class TodoForm extends React.Component {
   state = {
      text: "",
   };

   handleChange = (event) => {
      this.setState({
         // set name = the value
         [event.target.name]: event.target.value,
      });
   };

   handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({
         text: this.state.text,
         complete: false,
      });
   };

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input
               name="text"
               value={this.state.text}
               onChange={this.handleChange}
               placeholder="todo..."
            />
         </form>
      );
   }
}
