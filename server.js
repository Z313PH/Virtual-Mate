const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files from 'public' directory

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/message', (req, res) => {
    // Here you will handle incoming messages and send them to Rasa
    console.log(req.body);
    res.status(200).json({ message: 'Received' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
