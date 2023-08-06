// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create data array
const comments = [
    {
        name: 'John',
        comment: 'Hello World!'
    },
    {
        name: 'Doe',
        comment: 'Hi there!'
    }
];

app.use(bodyParser.urlencoded({ extended: false }));

// Create route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create route to add a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        name: req.body.name,
        comment: req.body.comment
    };
    comments.push(newComment);
    res.json(newComment);
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}!`));