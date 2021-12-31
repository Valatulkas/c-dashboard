import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/news',
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

        {firstBatch?.map( (i, _index) => (
          <a href={i.url}>
            <p key={_index}>{i.title}</p>
          </a>
        ))}
        
      </div>
    );
}
  
export default NewsFeed;