import { Schema, Model, model, Document, Types } from "mongoose";

export enum DialogType {
    dialog,
    group
}

export interface IDialogSchema {
    name?: string;
    type: DialogType;
    creator: Types.ObjectId | Record<string, unknown>;
    members: Array<Types.ObjectId> | Array<Record<string, unknown>>;
    messages: Array<Types.ObjectId> | Array<Record<string, unknown>>;
}

export interface IDialogSchemaModel extends IDialogSchema, Document {

}

const DialogSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: false
    },
    type: {
        type: Schema.Types.Number,
        enum: [0, 1] // Dialog or group
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, {
    timestamps: true
});

const Dialog: Model<IDialogSchemaModel> = model<IDialogSchemaModel>("Dialog", DialogSchema);

export default Dialog;