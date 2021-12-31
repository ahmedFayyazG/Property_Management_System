const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const connectDB = require("./Config/db");
const LandlordRoutes = require("./Routes/landlord");
const ManagementRoutes = require("./Routes/managment");
const AuthRoutes = require("./Routes/auth");

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors());

// Set static folder
// app.use(express.static(path.join(__dirname, "public")));

//Routes

app.use("/api/v1", LandlordRoutes);
app.use("/api/v1", ManagementRoutes);
app.use("/api/v1", AuthRoutes);

//Connect DB
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
