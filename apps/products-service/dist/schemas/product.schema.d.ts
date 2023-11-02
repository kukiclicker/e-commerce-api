import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    description: string;
    price: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    description: string;
    price: number;
}>> & mongoose.FlatRecord<{
    title: string;
    description: string;
    price: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
