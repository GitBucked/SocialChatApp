const express = require('express');
const app = express();
const port = 3001;

// Cycle through models to ensure they are loaded before creating tables
const db = require('./models');

db.sequelize.sync().then(() => {
	// API Endpoints would be defined here and where it starts listening
		app.listen(port, () => {
				console.log(`Server is running on http://localhost:${port}`);
		});
});