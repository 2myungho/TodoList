import React from 'react';
import styled from 'styled-components'
import TodoListItem from './TodoListItem'

const TodoListBlock = styled.div`
        height:500px;
        overflow-y: auto;
        box-sizing:border-box;
        border-radius:0 0 12px 12px;
        background:#fff;
        padding-top:10px;
        ::-webkit-scrollbar {
            width: 12px;
          }
        ::-webkit-scrollbar-thumb {
            background-color: #b6c2fa;
            border-radius: 10px;
            background-clip: padding-box;
            border: 2px solid transparent;
          }
        ::-webkit-scrollbar-track {
            background-color: #e9edff;
            border-radius: 10px;
            box-shadow: inset 0px 0px 5px white;
    `

const TodoList = ({todos,onRemove,onToggle}) => {
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </TodoListBlock>
    );
};

export default TodoList;