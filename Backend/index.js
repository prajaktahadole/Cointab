import express from "express";
import usersRouter from "./routes/userRouter.js";
import connect from "./db/db.js";
import cors from "cors";

const app = express();
app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//   })
// );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", usersRouter);
app.get("/", (req, res) => res.send("Cointab Assignment"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connect;
  // console.log("server started at http://localhost:8080");
});
