const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const AuthorController = require('../controllers/author_controller') // Bring in the AuthorController

// Remember the pattern
// router.<verb>('url', <controller>.<function>)

router.get('/', AuthorController.index)

router.post('/', AuthorController.create)

router.get('/new', AuthorController.make)

// Show is the name chosen because of rails naming convention. We could choose anything
// The ":" indicates there is a variable or wild card coming into the route
// What we put after the ":" will be made avalible under params in the controller
router.get('/:id', AuthorController.show)

router.get('/:id/edit', AuthorController.edit)

router.patch('/:id', AuthorController.update)

router.put('/:id', AuthorController.update)

router.delete('/:id', AuthorController.destroy)

module.exports = router