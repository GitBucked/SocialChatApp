import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

	const [postText, setPostText] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5174/posts" ).then((response) => {
			setPostText(response.data);
		});
	}, []);

  return (
  <>
    {postText.map((value, key) => {
      return (
        <div
          key={key}
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
            {value.title}
          </div>

          <div
            className="
              flex-[60%] 
              grid place-content-center
            "
          >
            {value.content}
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
            {value.username}
          </div>
        </div>
      );
    })}
  </>
	);
}

export default App
