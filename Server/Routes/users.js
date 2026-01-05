const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
	const { username, password } = req.body; 
	const hash = await bcrypt.hash(password, 10);
	await User.create({
		username: username,
		password: hash,
	});
	res.json("User Created");
});

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ where: { username: username } });

	if (!user) {
		return res.status(400).json({ error: 'User not found' });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	
	if (!isPasswordValid) {
		return res.status(400).json({ error: 'Invalid password' });
	}
	res.json("Login successful");
});

module.exports = router;