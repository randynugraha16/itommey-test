import express from "express";
import { bubbleSort } from "./helpers/sort.js";
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
    bubbleSort(data);
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
});

export const test = app;
