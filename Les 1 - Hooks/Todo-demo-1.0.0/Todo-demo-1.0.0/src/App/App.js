import Todo from "../components/Todo/Todo";

import todos from "../Data/todos";

import "./App.css";

const App = () =>{
    
    let toBeRenderedToDos = todos.map(todo => {
        return <Todo title={todo.title} items={todo.items}/>
    });
    return (
        <>
            {toBeRenderedToDos}
        </>
    )
}

export default App;