const BookModel = require('./../database/models/book_model')

async function create(req, res) {
    let {name} = req.body
    let book = await BookModel.create({name})
        .catch(err => res.status(500).send(err))
    res.redirect('/books')
}

async function index(req, res) {
    let books = await BookModel.find()
    res.render('book/index', {books})
}

function make (req, res) {
    res.render('book/new')
}

async function show (req, res) {
    let {id} = req.params
    let book = await BookModel.findById(id)
    res.render('/book/show', { book })
}

module.exports = {
    create,
    index,
    make,
    show
}