import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    price: Number,
});
const book = mongoose.model('book', bookSchema);

export default book;