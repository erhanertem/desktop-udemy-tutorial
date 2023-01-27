const express = require('express');

const router = express.Router();

// fetch all users
router.get('/users', async (req, res) => {});
// fetch a user with ID
router.get('/users/:id', async (req, res) => {});
// create a new user
router.post('/users', async (req, res) => {});
// update a user with ID
router.put('/users/:id', async (req, res) => {});
// delete a user with ID
router.delete('/users/:id', async (req, res) => {});

module.exports = router;
