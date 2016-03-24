import * as mongoose from 'mongoose';
interface IBlogModel

let blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
datePosted: {type: Number, max: Date.now},
  body: {type: String, required: true},
  imageUrl: {type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxY7n6J4PZqzhJrPDUEJAGz_UJHI_heOpvdoIscea1sj2MVVToS6czgq_'},
  tags: String
});

export let blog = <IBlogModel>('Blog', blogSchema);
