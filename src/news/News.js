import React from 'react';
import {Route} from 'react-router-dom'
import NewsPage from './NewsPage'

const News = () => {
    return <Route path="/news/:category?" component={NewsPage} />
};

export default News;