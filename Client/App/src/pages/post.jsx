import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_BASE_URL, ENDPOINTS } from '../constants';
import { useParams } from 'react-router-dom';
import Post from '../components/post';

function post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}${ENDPOINTS.POSTS}/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`${API_BASE_URL}${ENDPOINTS.COMMENTS}/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen -mt-20">
      <div className="flex gap-8">
        <div className="flex items-center justify-center">
          {postObject.title && <Post post={postObject} isDetail={true} />}
        </div>
        <div className="flex items-start justify-start w-[400px]">
          {comments.map((comment, key) => {
            return <div key={key}>{comment.commentBody}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default post;
