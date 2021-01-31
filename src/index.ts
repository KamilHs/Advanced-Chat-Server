import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../.env' });
import express = require("express");
import cors = require("cors");
import bodyParser = require("body-parser");
import mongoose = require("mongoose");

import { IDialog, MessageStatus, IMessage } from "./types";

mongoose
    .connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.20o0c.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

    .then(res => {
        console.log("Successfully connected");
    }).catch(err => {
        console.log(err);
    });

const app = express();

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
    credentials: true
}))
app.use(bodyParser.json());

const dialogs: IDialog[] = [
    {
        id: "1",
        lastMessage: {
            id: "11",
            content: "Salam varam",
            dialogId: "1",
            status: MessageStatus.seen,
            date: new Date(1611676402437 - 10000000),
            author: {
                id: "111",
                avatar: null,
                username: "Henry Jaguar",
                isAuthorOnline: false
            }
        }
    },
    {
        id: "2",
        lastMessage: {
            id: "22",
            dialogId: "2",
            content: "Salam varaasdddddddddddsdsdsdddasdasdsadsadsadasdsadasdadasdasdadasdm",
            status: MessageStatus.seen,
            date: new Date(1611676402437 - 10000000),
            author: {
                id: "222",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                username: "Kamil Salimli",
                isAuthorOnline: true
            }
        }
    },
    {
        id: "3",
        lastMessage: {
            id: "33",
            dialogId: "3",
            content: "Salam varaasdddddddddddsdsdsdddasdasdsadsadsadasdsadasdadasdasdadasdm",
            status: MessageStatus.seen,
            date: new Date(1611676402437 - 10000000),
            author: {
                id: "333",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                username: "Kamil Salimli",
                isAuthorOnline: true
            }
        }
    },
]

const messages: IMessage[] = [
    {
        id: Math.random().toString(),
        author: {
            id: Math.random().toString(),
            username: "Kamil Salimli",
            isAuthorOnline: false,
            avatar: null
        },
        dialogId: "1",
        date: new Date(1611676402437 - 11100000),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum ",
        status: MessageStatus.seen
    },
    {
        id: Math.random().toString(),
        author: {
            id: "1",
            username: "Kamil Salimli",
            isAuthorOnline: true,
            avatar: null
        },
        dialogId: "1",
        date: new Date(1611676402437 - 10000000),
        content: "Thanks, I'm fine, and you?",
        status: MessageStatus.seen
    }
];

app.get("/messages", (req: express.Request, res: express.Response) => {
    res.json(messages
        .filter(message => message.dialogId === req.query.dialog_id)
        .sort((a, b) => +a.date - +b.date)
    );
})

app.get("/dialogs", (req: express.Request, res: express.Response) => {
    res.json(dialogs);
})

app.listen(process.env.PORT || 5555);
