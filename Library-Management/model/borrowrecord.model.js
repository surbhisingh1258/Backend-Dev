import mongoose from 'mongoose';

const BorrowRecordSchema = new mongoose.Schema({
    id: Number,
    member: String,
    book_id: { type: mongoose.Schema.ObjectId, ref: "book" },
    member_id: { type: mongoose.Schema.ObjectId, ref: "member" },
});
const BorrowRecord = mongoose.model('BorrowRecord', BorrowRecordSchema);

export default BorrowRecord;