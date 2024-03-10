import dotenv from "dotenv"
dotenv.config({ path: "./.env" });
// dotenv.config({ path: "./.env.sample" });
import connnectToDB from "./db/conn.js";
import {app} from "./app.js"
const PORT = process.env.PORT || 5000;

connnectToDB()
    .then(() => { 
        app.on("error", () => {
            console.log(`Error on app ${error} `)
            throw error 
        })
        app.listen(PORT, () => {
            console.log(`Server is running at PORT ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(`Mongodb connection failed ${err}`)
        throw err 
    })