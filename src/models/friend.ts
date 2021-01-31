import { Schema, Model, model, Document, Types } from "mongoose";

export enum FriendStatus {
    rejected,
    pending,
    accepted,
}

export interface IFriendSchema {
    content: string;
    status: FriendStatus;
    requester: Types.ObjectId | Record<string, unknown>;
    recipient: Types.ObjectId | Record<string, unknown>;
}

export interface IFriendSchemaModel extends IFriendSchema, Document {

}

const FriendSchema = new Schema({
    content: {
        type: Schema.Types.String,
        required: true
    },
    status: {
        type: Schema.Types.Number,
        enum: [0, 1, 2] // rejected or pending or accepted
    },
    requester: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

const Friend: Model<IFriendSchemaModel> = model<IFriendSchemaModel>("Friend", FriendSchema);

export default Friend;