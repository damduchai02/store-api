require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/productModel");
const jsonProducts = require("./products.json");

const port = process.env.PORT || 3000;
const start = async (req, res) => {
  try {
    await connectDB(process.env.DATABASE_URL);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success!!!");
  } catch (error) {
    console.log(error);
  }
};

start();
