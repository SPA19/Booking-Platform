import express from "express";
import morgan from "morgan";

const app = express();

// settings

app.set("port", 4000);

//middlewares
app.use(morgan("dev")); // log requests to the console



export default app;