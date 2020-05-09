import React from 'react';
import styled from 'styled-components'

const Times = styled.div`
    position:fixed;
    top:5%;
    left:50%;
    transform: translate(-50%,0);
    .day{
        font-size:20px;
        font-weight:600;
        color:#6b84fc;
        text-align:center;
    }
    .date{
        font-size:32px;
        margin-right:10px;
        color:#0f4c82;
    }
    .month{
        font-size:32px;
        color:#0f4c82;
    }
`

const Time = () => {
    const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
    const month = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']

    const today = new Date();
    const Month = month[today.getMonth()]
    const date = today.getDate();
    const Day = week[today.getDay()]

    //const Month0 = `${Month < 10 ? `0${Month}` : Month}`
    const date0 = `${date < 10 ? `0${date}` : date}`

    return <Times className="date">        
            <div><span className="date">{date0}</span> <span className="month">{Month}</span></div>
            <p className="day">{Day}</p>
        </Times>
};

export default Time;