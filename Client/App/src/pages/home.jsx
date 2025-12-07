import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_BASE_URL, ENDPOINTS } from '../constants';
import Post from '../components/post';

function Home() {
  const [postText, setPostText] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}${ENDPOINTS.POSTS}`).then((response) => {
      setPostText(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {postText.map((value, key) => (
        <Post key={key} post={value} />
      ))}
    </div>
  );
}

export default Home;
