import { Link } from 'react-router-dom'

function CreateBtn() {
	return (
		<div className="flex items-center justify-center my-6">
			<Link
				to="/create-post"
				className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				Create Post
			</Link>
			<Link
			to="/"
			className="inline-block px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
			>Home Page</Link>
		</div>
	)
}

export default CreateBtn