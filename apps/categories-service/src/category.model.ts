import * as mongoose from 'mongoose';
export interface Category extends mongoose.Document{
    id: string,
    name: string,
    description: string,
    
}