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
                    <NavLink to="/" activeStyle={activeStyle} exact={true} className="TabItem">
                        TodoList
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeStyle={activeStyle} className="TabItem">
                        Today News
                    </NavLink>
                </li>
            </ul>

            <Route path="/" component={Todo} exact={true}/>
            <Route path="/news" component={News}/>


        </div>
    );
};

export default React.memo(Tab);