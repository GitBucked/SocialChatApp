module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );

	User.associate = (models) => {
		User.hasMany(models.Post, {
			foreignKey: "UserId",
			as: "posts",
			onDelete: "CASCADE",
		});
	};
	return User;

}