import * as mongoose from 'mongoose';
export interface IBlogModel extends app.i.IBlog, mongoose.Document {};

let blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
datePosted: {type: Number},
  body: {type: String, required: true},
  imageUrl: {type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxY7n6J4PZqzhJrPDUEJAGz_UJHI_heOpvdoIscea1sj2MVVToS6czgq_'},
  tags: String
});

export let Blog = mongoose.model<IBlogModel>('Blog', blogSchema);
