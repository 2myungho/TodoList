import React from 'react';
import './NewsHead.scss';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테이먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sport',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
]

const Categories = styled(NavLink)`
    &.active{
        border-bottom:2px solid #a6ddff;
        color:#a6ddff;
    }
`

const NewsHead = ({onSelect,category}) => {
    return (
        <div className="NewsHead">
            <div className="categorieBlock">
                {categories.map(
                    c => (
                        <Categories key={c.name} 
                        activeClassName="active"
                        className="categories"
                        exact={c.name === 'all'}
                        to={c.name === 'all' ? '/TodoList/news/' : `/TodoList/news/${c.name}`}
                        >
                            {c.text}
                        </Categories>
                    )
                )}
            </div>
        </div>
    );
};

export default NewsHead;