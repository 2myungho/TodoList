import React,{useState,useCallback,useRef} from 'react';
import TodoHead from './TodoHead'
import TodoList from './TodoList'
import TodoInsert from './TodoInsert'

const Todo = () => {

    const [todos,setTodos] = useState([
        {
            id:0,
            text:'Redux와 미들웨어 공부하기',
            checked:true
        },
        {
            id:1,
            text:'node js와 express 공부하기',
            checked:false
        },
        {
            id:2,
            text:'포트폴리오 제작하기',
            checked:false
        }
    ])

    //List
    const checked = todos.filter(todo => !todo.checked).length

    //insert
    const nextId = useRef(3)
    const onInsert = useCallback(
        text => {
            const todoList = {
                id:nextId.current,
                text,
                checked:false
            }
            setTodos(todos => todos.concat(todoList))
            nextId.current += 1;
        }
        ,[]
    )

    const onRemove = useCallback(
        id => {
            setTodos(todo => todo.filter(todoId => todoId.id !==id))
        }
        ,[]
    )

    const onToggle = useCallback(
        id => {
            setTodos(
                todo => todo.map(todoId => todoId.id === id ? {...todoId,checked: !todoId.checked} : todoId)
            )
        },
        []
    )

    return (
        <div>
            <TodoHead checked={checked} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            <TodoInsert onInsert={onInsert} />
        </div>
    );
};

export default Todo;