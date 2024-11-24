import cors from "cors";
import express from "express"
const app = express();
import MessageRoutes from "./routes/message.routes.js";
import VisitorRoutes from "./routes/visitor.routes.js";

// config cors (cross origin resources service)
app.use(cors({
    origin: ["https://lokeshwar-creatives.netlify.app", "https://lokeshwardewangan.in", "http://localhost:5173"],
    // origin: "*",
    credentials: true
}))

// accept data from frontend
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


app.get("/", (req, res) => {
    res.send("Hello world from backend!!")
})

// api endpoint for users
app.use("/api/v1/users", MessageRoutes)

// api endpoint for visited user
app.use("/api/v1/visitor", VisitorRoutes)




export { app }
