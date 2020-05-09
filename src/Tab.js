import React from 'react';
import Todo from './todo/Todo'
import News from './news/News'

import {Route, NavLink} from 'react-router-dom'
import './Tab.scss'

const Tab = () => {

    const activeStyle = {
        background:'#0f4c82',
        color:'#fff'
    }

    return (
        <div>
            <ul className="TabList">
                <li>
                    <NavLink to="https://2myungho.github.io/TodoList/" activeStyle={activeStyle} exact={true} className="TabItem">
                        TodoList
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://2myungho.github.io/TodoList/" activeStyle={activeStyle} className="TabItem">
                        Today News
                    </NavLink>
                </li>
            </ul>

            <Route path="https://2myungho.github.io/TodoList/" component={Todo} />
            <Route path="https://2myungho.github.io/TodoList/" component={News}/>


        </div>
    );
};

export default React.memo(Tab);