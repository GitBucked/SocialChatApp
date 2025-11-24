function Post({ post }) {
  return (
    <div
      className="
        w-[400px] h-[300px] 
        rounded-[10px] 
        flex flex-col 
        mt-[50px] 
        border border-gray-300 
        font-sans
        shadow-[0_2px_8px_rgba(99,99,99,0.2)]
        hover:shadow-[0_7px_29px_rgba(100,100,111,0.2)]
        cursor-pointer
      "
    >
      <div
        className="
          flex-[20%] 
          border-b border-gray-300 
          bg-blue-500 
          grid place-content-center 
          text-white
        "
      >
        {post.title}
      </div>

      <div
        className="
          flex-[60%] 
          grid place-content-center
        "
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