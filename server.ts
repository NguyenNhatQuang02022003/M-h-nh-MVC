import express, { Application } from "express";
import Server from "./src/index";
import Database from "./src/db/index";
const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
import dotenv from 'dotenv'; dotenv.config();
const db = new Database();
app.get('/health', (req, res) => {
  res.send('App is running');
});

app
  .listen(PORT, "0.0.0.0", function () {
    console.log("Server is running on port ${PORT}.");
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });