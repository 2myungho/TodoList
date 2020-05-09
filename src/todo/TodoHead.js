import React from 'react';
import styled from 'styled-components'

const TodoHeadBg = styled.div`
        background:#0f4c82;
        height:80px;
        line-height:60px;
        padding:10px 25px;
        box-sizing:border-box;
        color:#fff;
        .date{
            font-size:16px;
        }
        .listBox{
            font-weight:bold;
            font-size:26px;
            overflow:hidden;
            div{
                display:inline-block;
            }
            .left{
                float:left;
            }
            .right{
                float:right;
            }
        }
    `

const TodoHead = ({ checked }) => {
    return (
        <TodoHeadBg>
            <div className="listBox">
                <div className="left">Do it now!</div>
                <div className="right">{checked}</div>
            </div>
        </TodoHeadBg>
    );
};

export default TodoHead;