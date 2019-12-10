const AuthorModel = require('./../database/models/author_model')

// Logic for creating a resource
async function create (req, res) {
  let { name, bio, gender } = req.body // Destructuring off the name, bio and gender from the req.body
  let author = await AuthorModel.create({ name, bio, gender }) // Creating the author
    .catch(err => res.status(500).send(err))
  res.redirect('/authors') // Redirect to /authors
}

// Showed a list of all the resources
async function index (req, res) {
  let authors = await AuthorModel.find() // Extracting all the authors from the DB
  res.render('author/index', { authors }) // Render the 'author/index view' pass it the authors
}

// Shows the form to create the resource
function make (req, res) {
  res.render('author/new')
}

// The logic for the Show controller
async function show (req, res) {
  console.log(req.params)
  let { id } = req.params // Destructure the id off the params.
  let author = await AuthorModel.findById(id) // Find the author by id and add save it to the variable author
  res.render('author/show', { author }) // render the 'author/show' and pass it the {author}
}

async function update (req, res) {
  let {name, bio, gender} = req.body
  let {id} = req.params
  await AuthorModel.findByIdAndUpdate(id, {name, bio, gender})
  res.redirect(`/authors/${id}`)
}

async function edit (req, res) {
  let {id} = req.params
  let author = await AuthorModel.findById(id)
  res.render('author/edit', {author})
}

async function destroy (req, res) {
  let {id} = req.params
  await AuthorModel.findByIdAndDelete(id)
  res.redirect('/authors')
}

module.exports = {
  create,
  index,
  make,
  show,
  destroy,
  update,
  edit
}
