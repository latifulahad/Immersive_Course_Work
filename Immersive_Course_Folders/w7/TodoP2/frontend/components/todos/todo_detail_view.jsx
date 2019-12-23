import React from "react";

class TodoDetailView extends React.Component {

    render() {
        const { removeTodo } = this.props;
        return (
            <div>
                <button onClick={removeTodo}>Remove Todo</button>
            </div>
        )
    }
}

export default TodoDetailView;