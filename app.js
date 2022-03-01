import express from "express";
import { sort } from "./helpers/sort.js";
const port = 3011;

const app = express();

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  console.log("test");
  res.json({ status: 200 });
});

app.post("/itommey", (req, res, next) => {
  try {
    const { data } = req.body;
    console.log("from body: ", data);

    sort(data);

    console.log("from function: ", data);
    res.json({ status: 200, message: "OK", data });
  } catch (err) {
    throw new Error(err);
  }
});

app.use((req, res) => {
  res.json({
    status: 404,
    message: "Invalid Routes",
  });
});

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
  console.log(process.env.NODE_ENV);
});

export const test = app;
