import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    id: Number, 
    name: String,
    membershipType: String,
});
const member = mongoose.model('member', memberSchema);

export default member;