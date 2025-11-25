import { Link } from 'react-router-dom'

function CreateBtn() {
	return (
		<div className="w-full bg-blue-500 py-4 px-6">
			<div className="flex items-center gap-4">
				<Link
					to="/"
					className="inline-block px-6 py-3 bg-gray-600 text-white text-lg font-medium rounded-md hover:bg-gray-700 transition-colors"
				>
					Home Page
				</Link>
				<Link
					to="/create-post"
					className="inline-block px-6 py-3 bg-gray-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
				>
					Create A Post
				</Link>
			</div>
		</div>
	)
}

export default CreateBtn