import { useNavigate } from 'react-router-dom';

function Post({ post, isDetail = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isDetail) {
      navigate(`/post/${post.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        ${isDetail ? 'w-[800px] h-[500px]' : 'w-[400px] h-[300px]'} 
        rounded-[10px] 
        flex flex-col 
        ${isDetail ? '' : 'mt-[50px]'}
        border border-gray-300 
        font-sans
        ${isDetail ? 'shadow-[0_7px_29px_rgba(100,100,111,0.2)]' : 'shadow-[0_2px_8px_rgba(99,99,99,0.2)]'}
        ${isDetail ? '' : 'hover:shadow-[0_7px_29px_rgba(100,100,111,0.2)] cursor-pointer'}
      `}
    >
      <div
        className={`
          flex-[20%] 
          border-b border-gray-300 
          bg-blue-500 
          grid place-content-center 
          text-white
          ${isDetail ? 'text-2xl rounded-t-[10px]' : ''}
        `}
      >
        {post.title}
      </div>

      <div
        className={`
          flex-[60%] 
          grid place-content-center
          ${isDetail ? 'text-lg p-4' : ''}
        `}
      >
        {post.content}
      </div>

      <div
        className="
          flex-[20%] 
          border-t border-gray-300 
          flex items-center 
          pl-[15px] 
          bg-blue-500 
          text-white 
          rounded-b-[10px]
        "
      >
        {post.username}
      </div>
    </div>
  );
}

export default Post;
