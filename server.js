const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html at root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
