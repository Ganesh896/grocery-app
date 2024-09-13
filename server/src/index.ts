import express from "express";
import { Client } from "pg";
import config from "./config";
import router from "./routes/index.routes";

const PORT = config.port;

const app = express();

// middleware to parse incomin JSON requests
app.use(express.json());

// router
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is runnin on port: ${PORT}`);
});