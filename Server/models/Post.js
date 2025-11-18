module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define('Post', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		title: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, {
		timestamps: true,
	});
	return Post;
};