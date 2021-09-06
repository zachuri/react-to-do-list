import React from "react";

export default class Counter extends React.Component {
   // If initializing the constructor with just this.state
   // then you don't need the write the constructor function

   // constructor(props) {
   //    super(props);

   //    this.state = {
   //       count: 0,
   //    };
   // }

   state = {
      count: 0,
   };

   // Use the constructor if you want to change the default
   // value in the component tag

   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       count: props.initialCount,
   //    };
   // }

   // The difference is that you have to write this.bind.function_Name
   //	 	which will be undefined in console

   // handleButtonClick() {
   //    console.log(this.state);
   //    console.log("button clicked");
   // }

   // But this arrow function is the short cut where you don't have to
   //		write this.bind.function_Name

   increment = () => {
      // console.log(this.state);
      // console.log("button clicked");

      // Don't call this
      // this.state.count += 1;

      // Use the setState FUNCTION which will be the new state
      // 	it will call the recall the render function everytime
      //		with a new value of the set state
      this.setState({
         count: this.state.count + 1,
      });
   };

   decrement = () => {
      this.setState({
         count: this.state.count - 1,
      });
   };

   render() {
      console.log("render fucntion called");
      return (
         <div>
            <div>count: {this.state.count}</div>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
         </div>
      );
   }
}

// The biggest difference between classes and functions
// is that classes have state that can be updated
