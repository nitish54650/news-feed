import './styles.css';

export const NewsCard = ({ newsData }) => {
    return (
        <div className="card-container">
            <div className='news-image-container'>
                <div className="news-image"
                    style={{ backgroundImage: `url(${newsData.urlToImage})` }}>
                </div>
            </div>


            <div className='news-details'>
                <div>
                    <div className='news-header'>
                        <div>
                            <span className='news-headline'>{newsData.title}</span>
                        </div>
                        <div className='news-date'>
                            <span>Published on {newsData.publishedAt.substring(0, 10)}</span>
                        </div>
                    </div>
                    <div className='news-article-body'>
                        {newsData.description}
                    </div>
                </div>
                <div className='news-read-more'>
                    read more at <a target='_blank' href={newsData.url}>{newsData.source.name}</a>
                </div>
            </div>
        </div>
    )
}