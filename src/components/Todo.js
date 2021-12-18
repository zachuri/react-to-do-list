import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
	<div
		style={{
			textDecoration: props.todo.complete ? "line-through" : "",
		}}
		onClick={props.toggleComplete}
	>
		{props.todo.text}
	</div>
);
