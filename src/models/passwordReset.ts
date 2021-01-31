import { Schema, Model, model, Document } from "mongoose";

export interface IDialogSchema {
    email: string;
    token: string;
}

export interface IDialogSchemaModel extends IDialogSchema, Document {

}

const DialogSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true
    },
    token: {
        type: Schema.Types.String,
        required: true
    },
}, {
    timestamps: true
});

const Dialog: Model<IDialogSchemaModel> = model<IDialogSchemaModel>("Dialog", DialogSchema);

export default Dialog;