// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Create route to get all comments
router.get('/', (req, res) => {
    res.send('Get all comments');
});

// Create route to get a comment by id
router.get('/:id', (req, res) => {
    res.send(`Get comment with id: ${req.params.id}`);
});

// Create route to create a comment
router.post('/', (req, res) => {
    res.send('Create comment');
});

// Create route to update a comment
router.put('/:id', (req, res) => {
    res.send(`Update comment with id: ${req.params.id}`);
});

// Create route to delete a comment
router.delete('/:id', (req, res) => {
    res.send(`Delete comment with id: ${req.params.id}`);
});

// Export router
module.exports = router;
