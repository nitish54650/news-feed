import { useEffect, useState } from "react"
import { NewsCard } from "../NewsCard";
import './styles.css'

export const NewsSection = () => {
    const [error, setError] = useState(false);
    const [newslist, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=74084b2423664b3ab32b5939713fdf73');
            const data = await response.json();
            console.log({ data })
            if (data.status !== 'ok') {
                setError(true)
            } else {
                setNewsList(data.articles)
            }
        }

        fetchNews();

    }, []);


    return (
        <div className="news-section">
            {!!newslist.length && newslist.map((newsItem) => <NewsCard newsData={newsItem} />)}
            {error && <h1>System error. Please try again later.</h1>}
        </div>
    )
}