const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cron = require("node-cron");
require("dotenv").config();
const operationRoutes = require("./routes/operationsRoutes.js");
const { startScheduler } = require("./fetchingScript.js");

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Use the CORS middleware
app.use(cors({
  origin: "*", // Allow requests from any origin
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome... Server Running... Hopefully... Let's see");
});

app.use("/api", operationRoutes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// Schedule task: Run the function every 5 minutes
cron.schedule('*/5 * * * *', async () => {
  console.log('Fetching and adding Nifty50 stock data...');
  try {
    // Call your function to fetch and store data
    startScheduler();
    console.log('Nifty50 stocks data updated successfully.');
  } catch (error) {
    console.error('Error fetching Nifty50 stock data:', error);
  }
});
