import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
    color:{type: String, required: true},
    origin: {type: String, required: true}
});