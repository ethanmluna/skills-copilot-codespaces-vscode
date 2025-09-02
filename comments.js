// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Middleware
app.use(bodyParser.json());

// In-memory data store
let comments = [];

// Routes

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a specific comment by ID
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

// Create a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: uuidv4(),
        text: req.body.text
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});