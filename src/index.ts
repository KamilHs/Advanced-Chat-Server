import express = require("express");
import cors = require("cors");
import bodyParser = require("body-parser");

const app = express();

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
    credentials: true
}))
app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world!")
})


app.listen(process.env.PORT || 5555);
