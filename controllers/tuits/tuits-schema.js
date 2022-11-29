import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    username: String,
    handle: String,
    time: {
        type: String,
        default: "Just now"
    },
    image: String,
    title: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    disliked: Boolean,
}, {collection: 'tuits'});
export default schema;

//push to github