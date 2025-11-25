import * as Yup from 'yup'

const postSchema = Yup.object().shape({
	title: Yup.string().required("You must input a title!"),
	username: Yup.string().min(3).max(15).required("You must input a username!"),
	content: Yup.string().min(3).max(300).required("You must input post content!"),
})

export default postSchema