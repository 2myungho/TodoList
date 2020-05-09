import React from 'react'
import NewsList from './NewsList'
import NewsHead from './NewsHead'

const NewsPaage = ({match}) => {
    const category = match.params.category || 'all'

    return (
        <div>
            <NewsHead/>
            <NewsList category={category} />
        </div>
    );
};

export default NewsPaage;