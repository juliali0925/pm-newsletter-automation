const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('.'));

// Endpoint to get list of available newsletters
app.get('/api/newsletters', (req, res) => {
    const newslettersDir = './newsletters';
    
    if (!fs.existsSync(newslettersDir)) {
        fs.mkdirSync(newslettersDir, { recursive: true });
    }
    
    const files = fs.readdirSync(newslettersDir)
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const date = file.replace('pm-newsletter-', '').replace('.md', '');
            return {
                date: date,
                filename: file,
                url: `/newsletters/${file}`
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by newest first
    
    res.json(files);
});

// Endpoint to get a specific newsletter
app.get('/api/newsletter/:date', (req, res) => {
    const date = req.params.date;
    const filePath = path.join('./newsletters', `pm-newsletter-${date}.md`);
    
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        res.json({ date, content });
    } else {
        res.status(404).json({ error: 'Newsletter not found' });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`PM Newsletter web server running at http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server');
});