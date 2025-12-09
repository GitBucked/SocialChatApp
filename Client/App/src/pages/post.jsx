import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_BASE_URL, ENDPOINTS } from '../constants';
import { useParams } from 'react-router-dom';
import Post from '../components/post';
import CommentSection from '../components/commentSection';

function post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`${API_BASE_URL}${ENDPOINTS.POSTS}/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen -mt-20">
      <div className="flex gap-8">
        <div className="flex items-center justify-center">
          {postObject.title && <Post post={postObject} isDetail={true} />}
        </div>
        <div className="flex items-start justify-start pt-8">
          <CommentSection postId={id} />
        </div>
      </div>
    </div>
  );
}

export default post;
