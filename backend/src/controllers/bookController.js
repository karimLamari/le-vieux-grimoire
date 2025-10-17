const Book = require('../models/Book');
const fs = require('fs');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ error });
    }
};

exports.getBestRating = async (req, res) => {
    try {
        const bestBooks = await Book.find().sort({ averageRating: -1 }).limit(3);
        res.status(200).json(bestBooks);
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.createBook = async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body.book);
        const bookData = JSON.parse(req.body.book);
        delete bookData._id;
        delete bookData._userId;

        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;

        const book = new Book({
            ...bookData,
            userId: req.auth.userId,
            imageUrl,
            ratings: [],
            averageRating: 0,
        });

        await book.save();
        res.status(201).json({ message: 'Livre créé avec succès !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });

        if (book.userId !== req.auth.userId) {
            return res.status(403).json({ message: 'Requête non autorisée.' });
        }

        const bookObject = req.file
            ? {
                ...JSON.parse(req.body.book),
                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            }
            : { ...req.body };

        delete bookObject._userId;

        await Book.updateOne({ _id: req.params.id }, { ...bookObject });
        res.status(200).json({ message: 'Livre modifié avec succès !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });

        if (book.userId !== req.auth.userId) {
            return res.status(403).json({ message: 'Requête non autorisée.' });
        }

        const filename = book.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, async () => {
            await Book.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: 'Livre supprimé avec succès !' });
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.addRating = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        const userId = req.auth.userId;
        const { rating } = req.body;
        if (book.ratings.find(r => r.userId === userId)) {
            return res.status(400).json({ message: 'Vous avez déjà noté ce livre.' });
        }

        if (rating < 0 || rating > 5) {
            return res.status(400).json({ message: 'La note doit être entre 0 et 5.' });
        }

        book.ratings.push({ userId, grade: rating });
        book.averageRating = (
            book.ratings.reduce((acc, i) => acc + i.grade, 0) / book.ratings.length
        ).toFixed(1);

        await book.save();
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error });
    }
};
