import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    description: string;
    price: number;
    size: string;
    color: string;
    origin: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    description: string;
    price: number;
    size: string;
    color: string;
    origin: string;
}>> & mongoose.FlatRecord<{
    title: string;
    description: string;
    price: number;
    size: string;
    color: string;
    origin: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
