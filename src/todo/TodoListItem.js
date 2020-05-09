import React from 'react';
import { IoMdCheckboxOutline, IoIosSquareOutline, IoIosTrash } from 'react-icons/io';
import './TodoListItem.scss'
import cn from 'classnames';

const TodoListItem = ({ todo,onRemove,onToggle}) => {
    const { id, text, checked } = todo
    return (
        <div className="item">
            <div className={cn('checkBox',{checked})} onClick={()=>onToggle(id)}>
                {checked ? <IoMdCheckboxOutline /> : <IoIosSquareOutline />}
                <div className="text">{text}</div>
            </div>

            <div className="remove" onClick={() => onRemove(id)}>
                <IoIosTrash />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);