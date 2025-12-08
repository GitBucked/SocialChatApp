module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      commentBody: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );

  Comments.associate = (models) => {
    Comments.belongsTo(models.Post, {
      foreignKey: "PostId",
      onDelete: "CASCADE",
    });
  };

  return Comments;
};
