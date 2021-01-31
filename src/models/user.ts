import { Schema, Document, Types, Model, model } from "mongoose";

import { IDialogSchema } from "./dialog";

export interface IUserSchema {
    username: string;
    avatar?: string;
    lastOnlineTime: string;
    email: string;
    password: string;
    confirmed: boolean
    dialogs: Array<Types.ObjectId> | Array<Record<string, unknown>>;
    friends: Array<Types.ObjectId> | Array<Record<string, unknown>>;
    messages: Array<Types.ObjectId> | Array<Record<string, unknown>>;
}

export interface IUserSchemaModel extends IUserSchema, Document {

}

const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true
    },
    avatar: {
        type: Schema.Types.String,
        required: false
    },
    lastOnlineTime: {
        type: Schema.Types.Date,
        required: false
    },
    email: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    confirmed: {
        type: Schema.Types.Boolean,
        required: true
    },
    dialogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Dialog'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Friend'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, {
    timestamps: true
});

const User: Model<IUserSchemaModel> = model<IUserSchemaModel>("User", UserSchema);

export default User;