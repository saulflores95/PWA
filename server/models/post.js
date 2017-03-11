import mongoose from 'mongoose'

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const postSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: false},

})

const Post = mongoose.model('Post', postSchema)

export default Post
