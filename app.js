require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productRouter = require("./routes/productRoute");

const app = express();
// middleware
app.use(express.json());

// routes
app.use("/api/v1/products", productRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async (req, res) => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, () => {
      console.log(`server is listening port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
