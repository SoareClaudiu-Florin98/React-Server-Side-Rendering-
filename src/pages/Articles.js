import React, {useState, useEffect} from 'react';

export const Articles =() => {
    const [articles, setArticles] = useState([]) ; 
    useEffect(()=>{
        fetch('/api/articles')
        .then(response => response.json())
        .then(data => setArticles(data))
    },[])
    return (
        <>
        <h1>Articles</h1>
        {articles && articles.map((article,index) => {
            return(
            <div key={index}>
                <h3>{article.title}</h3>
                <p>by {article.author}</p>
            </div>);
        })}
        </>
    )
}