// API Routes for the backend

const express = require('express');
const router = express.Router();

// Middleware
router.use(express.json());

// GET all items
router.get('/items', (req, res) => {
  res.json({ 
    items: [
      { id: 1, title: 'Item 1', description: 'First item' },
      { id: 2, title: 'Item 2', description: 'Second item' }
    ] 
  });
});

// GET single item
router.get('/items/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, title: `Item ${id}`, description: `Description for item ${id}` });
});

// POST new item
router.post('/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', item: newItem });
});

// PUT update item
router.put('/items/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Item updated', id, ...req.body });
});

// DELETE item
router.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Item ${id} deleted` });
});

module.exports = router;
