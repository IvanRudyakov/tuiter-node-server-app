import mongoose from 'mongoose';
const schema = mongoose.Schema({
  title: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  handle: String,
  time: String,
  image: String,
  replies: Number,
  retuits: Number
}, {collection: 'tuits'});
export default schema;