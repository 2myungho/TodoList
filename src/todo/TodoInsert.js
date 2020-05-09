import React,{useState,useCallback} from 'react';
import './TodoInsert.scss'
import {IoIosAddCircle} from 'react-icons/io';
import cn from 'classnames';

const TodoInsert = ({onInsert}) => {

    const [value,setValue] = useState('')
    const [open,setOpen] = useState(false)

    const onChange = useCallback(
        e => {
            setValue(e.target.value)
        },
        []
    )

    const onSubmit = useCallback(
        e => {
            onInsert(value)
            setValue('')
            e.preventDefault()
        },
        [onInsert,value]
    )
    
    const onClick = useCallback(
        () => setOpen(!open)
        ,[open]
    )

    return (
        <form onSubmit={onSubmit}>
            {open &&(
                <input
                className="textInput" 
                placeholder="할 일을 입력 후,  Enter을 눌러주세요."
                value={value}
                onChange={onChange}
                />
            )}
            <div className={cn('circleBtn',{open})} onClick={onClick}>
                <IoIosAddCircle />
            </div>
        </form>
    );
};

export default TodoInsert;