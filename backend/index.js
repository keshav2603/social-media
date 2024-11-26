import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
    .then(() => {
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });