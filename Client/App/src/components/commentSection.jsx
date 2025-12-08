import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../constants';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE_URL}${ENDPOINTS.COMMENTS}/${postId}`).then((response) => {
      setComments(response.data);
    });
  }, [postId]);

  const addComment = () => {
    if (!newComment.trim()) return;
    
    axios
      .post(`${API_BASE_URL}${ENDPOINTS.COMMENTS}/${postId}`, {
        commentBody: newComment,
      })
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment('');
      });
  };

  return (
    <div className="w-[600px] flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addComment}
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Add Comment
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="w-full px-6 py-4 border border-gray-300 rounded-md bg-white"
          >
            {comment.commentBody}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;