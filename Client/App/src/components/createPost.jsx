import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, ENDPOINTS } from '../constants';
import postSchema from '../validation/postSchema';

function CreatePost() {
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    username: '',
    content: '',
  };

  const onSubmit = (data) => {
    axios.post(`${API_BASE_URL}${ENDPOINTS.POSTS}`, data).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-10">
      <div className="flex flex-col w-[500px] h-auto p-5 border-[5px] border-blue-500 rounded-md">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={postSchema}>
          <Form className="flex flex-col">
            <label className="mb-2">Title: </label>
            <ErrorMessage name="title" component="span" className="text-red-500 mb-2" />
            <Field
              id="inputCreatePost"
              name="title"
              placeholder="(Ex. Title...)"
              className="h-10 mb-4 border-2 border-gray-500 rounded-md pl-2.5 text-xl"
            />

            <label className="mb-2">Post: </label>
            <ErrorMessage name="content" component="span" className="text-red-500 mb-2" />
            <Field
              id="inputCreatePost"
              name="content"
              placeholder="(Ex. Post...)"
              className="h-10 mb-4 border-2 border-gray-500 rounded-md pl-2.5 text-xl"
            />

            <label className="mb-2">Username: </label>
            <ErrorMessage name="username" component="span" className="text-red-500 mb-2" />
            <Field
              id="inputCreatePost"
              name="username"
              placeholder="(Ex. John123...)"
              className="h-10 mb-4 border-2 border-gray-500 rounded-md pl-2.5 text-xl"
            />

            <button
              type="submit"
              className="mt-4 h-10 w-full border-none bg-sky-300 rounded-md text-white hover:cursor-pointer hover:bg-blue-500"
            >
              Create Post
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreatePost;
