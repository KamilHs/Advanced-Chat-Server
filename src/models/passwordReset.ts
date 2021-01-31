import { Schema, Model, model, Document } from "mongoose";

export interface IPasswordResetSchema {
    email: string;
    token: string;
}

export interface IPasswordResetSchemaModel extends IPasswordResetSchema, Document {

}

const PasswordResetSchema = new Schema({
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

const PasswordReset: Model<IPasswordResetSchemaModel> = model<IPasswordResetSchemaModel>("PasswordReset", PasswordResetSchema);

export default PasswordReset;