import React,{useState,useEffect} from 'react';
import NewsListItem from './NewsListItem';
import styled from 'styled-components'
import axios from 'axios'

const NewsListBlock = styled.div`
    box-sizing:border-box;
    height:500px;
    padding:20px;
    background:#fff;
    border-radius:12px;
    overflow-y:auto;
    .wait{
        font-weight:bold;
    }
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

const NewsList = ({category}) => {
    const [articles,setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=668dde934af742d0baa151184e638009`
                )
                setArticles(response.data.articles)
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    },[category])
    

    if(loading){
        return <NewsListBlock className="wait">잠시만 기다려주세요...</NewsListBlock>
    }
    if(!articles){
        return <NewsListBlock></NewsListBlock>
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsListItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;