import { Schema, Model, model, Document, Types } from "mongoose";
import { MessageStatus, MessageType } from "src/types";

export interface IMessageSchema {
    type: MessageType;
    content: string;
    status: MessageStatus;
    user: Types.ObjectId | Record<string, unknown>;
    dialog: Types.ObjectId | Record<string, unknown>;
}

export interface IMessageSchemaModel extends IMessageSchema, Document {

}

const MessageSchema = new Schema({
    content: {
        type: Schema.Types.String,
        required: true
    },
    type: {
        type: Schema.Types.Number,
        enum: [0, 1, 2] // Image or text or audio
    },
    status: {
        type: Schema.Types.Number,
        enum: [0, 1, 2] // sent or recieved or seen
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dialog: {
        type: Schema.Types.ObjectId,
        ref: 'Dialog'
    },
}, {
    timestamps: true
});

const Message: Model<IMessageSchemaModel> = model<IMessageSchemaModel>("Message", MessageSchema);

export default Message;