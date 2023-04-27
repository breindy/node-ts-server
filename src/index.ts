import express, { Express, Request, Response } from "express";

const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express + TS");
});

app.listen(port, () => {
    console.log("Server listening on PORT: ", port);
});