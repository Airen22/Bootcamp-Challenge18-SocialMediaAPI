const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/Thoughts
router
.route('/')
.get(getThoughts)
.post(createThought);

// /api/Thoughts/:ThoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.post(updateThought)
.delete(deleteThought);

// /api/Thoughts/:ThoughtId/Reactions
router
.route('/:thoughtId/reactions')
.post(addReaction);

// /api/Thoughts/:ThoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;