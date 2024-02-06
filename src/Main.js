import React, { useEffect } from 'react';

const Main = () => {

    useEffect(() => {
        const getAPI = () => {
            const result = fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=74084b2423664b3ab32b5939713fdf73')
                .then((result) => console.log(result))
                .catch((e) => console.log(e))
        }
        getAPI();
    }, [])



    return (
        <div>Hello MAin </div>
    )
}
export default Main; 