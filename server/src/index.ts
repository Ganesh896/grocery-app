import express from "express";
import config from "./config";
import router from "./routes/index.routes";
import { genericErrorHandler, notFoundError } from "./middleware/errorHandler.middleware";

const PORT = config.port;

const app = express();

// middleware to parse incomin JSON requests
app.use(express.json());

// router
app.use(router);

app.use(genericErrorHandler);
app.use(notFoundError);

app.listen(PORT, () => {
    console.log(`Server is runnin on port: ${PORT}`);
});
