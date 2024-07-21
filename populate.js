require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/productModel");
const jsonProducts = require("./products.json");

const start = async (req, res) => {
  try {
    await connectDB(process.env.DATABASE_URL);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success!!!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

start();
