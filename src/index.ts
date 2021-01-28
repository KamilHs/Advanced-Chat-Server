import express = require("express");

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world!")
})


app.listen(process.env.PORT || 5555);
