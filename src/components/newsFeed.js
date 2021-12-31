import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
        headers: {
          'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
          'x-rapidapi-key': ''
        }
      };
      
      axios.request(options).then((response) => {
        console.log(response.data);
        setArticles(response.data);
      }).catch((error) => {
        console.error(error);
      });
    }, []);

    const firstBatch = articles?.slice(0,8);

    return (
      <div className="news-feed">

        {firstBatch.map( (i, _index) => (
          <a href={i.url} target='_blank'><p key={_index}>{i.title}</p></a>
        ))}
        
      </div>
    );
}
  
export default NewsFeed;