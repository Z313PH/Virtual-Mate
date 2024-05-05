const express = require('express');
const { spawn } = require('child_process');

const app = express();
app.use(express.json());
const port = 3000;

app.post('/process-text', (req, res) => {
    const text = req.body.text;

    const pythonProcess = spawn('python', ['nlp_script.py', text]);

    pythonProcess.stdout.on('data', (data) => {
        // Capture output from the Python script
        res.send(data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
        // Capture any errors
        console.error(`stderr: ${data}`);
        res.status(500).send('Error processing text');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
